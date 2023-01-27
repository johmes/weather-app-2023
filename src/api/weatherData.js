import { useState } from 'react'
import axios from 'axios'

const useWeatherInCity = (coords) => {
  const { latitude, longitude } = coords
  const [state, setState] = useState({
    isLoading: false,
    error: null,
    data: null,
  })

  const baseURL = 'https://api.open-meteo.com/v1/forecast?timezone=Europe/Helsinki'

  const getOneDayWeather = async () => {
    console.log("Haetaan yhden päivän sää")
    setState({ isLoading: true })

    const url = `${baseURL}&latitude=${latitude}&longitude=${longitude}&hourly_units=true&hourly=weathercode,temperature_2m&current_weather=true`

    try {
      const result = await axios.get(url)
      const {
        current_weather,
        hourly_units: { temperature_2m, ...units }
      } = result.data

      setState({
        isLoading: false,
        data: {
          units: {
            temperature: temperature_2m,
            ...units
          },
          weather: { ...current_weather }
        },
        error: null
      })
    } catch (error) {
      setState({
        isLoading: false,
        error: `${error.code} ${error.message}`,
        data: null
      })
    }
    console.log(state)
    return;
  }

  const getThreeDayWeather = async () => {
    setState({ isLoading: true })

    // ISO 8601 date format
    const addDaysToNow = (days) => {
      const now = new Date()
      now.setDate(now.getDate() + days)
      return now.toISOString().split('T')[0]
    }

    const range = 3
    const tomorrow = addDaysToNow(1)
    const inThreeDays = addDaysToNow(range)

    const url = `${baseURL}&latitude=${latitude}&longitude=${longitude}&daily_units=true&daily=weathercode,temperature_2m_max&start_date=${tomorrow}&end_date=${inThreeDays}`


    try {
      const result = await axios.get(url)
      let days = []
      const {
        daily_units: { temperature_2m_max, ...units },
        daily
      } = result.data()
      let {
        time: timeArray,
        weathercode: weathercodeArray,
        temperature_2m_max: temperatureArray,
      } = daily

      for (let i = 0; i < range; i++) {
        days.push({
          time: timeArray[i],
          weathercode: weathercodeArray[i],
          temperature_2m: temperatureArray[i],
        })
      }

      setState({
        isLoading: false,
        data: {
          units: {
            temperature_2m: temperature_2m_max,
            ...units,
          },
          weather: days,
        },
      })
    } catch (error) {
      setState({
        isLoading: false,
        error: `${error.code} ${error.message}`,
      })
    }
  }

  return [getOneDayWeather, getThreeDayWeather, { ...state }]
}

export default useWeatherInCity