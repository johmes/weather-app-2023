import React, { useEffect, useState } from 'react'
import { cities } from '../cities.js';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { WeatherDayComponent } from '../components/WeatherDayComponent.jsx';

const ThreeDays = () => {
  const [state, setState] = useState({
    isLoading: false,
    data: null,
    error: null
  });

  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const baseURL = 'https://api.open-meteo.com/v1/forecast?timezone=Europe/Helsinki'

    const getThreeDayWeather = async () => {
      setState({ isLoading: true })

      if (!(id in cities)) {
        setState({ error: "Check the name of the city." })
        return;
      }

      const { latitude, longitude } = cities[id];

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
        } = result.data
        let {
          time: timeArray,
          weathercode: weathercodeArray,
          temperature_2m_max: temperatureArray,
        } = daily

        for (let i = 0; i < range; i++) {
          days.push({
            time: timeArray[i],
            weathercode: weathercodeArray[i],
            temperature: temperatureArray[i],
          })
        }

        setState({
          isLoading: false,
          data: {
            units: {
              temperature: temperature_2m_max,
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
    getThreeDayWeather();

  }, [id, navigate])

  if (state.isLoading) { return (<p className='headerText'>Loading...</p>) }

  if (state.error) { return (<p className='headerText'>{state.error}</p>) }


  console.log(state.data)
  return (
    <>
      <h1 className='headerText'>{id}</h1>
      <div className='weatherComponentsContainer'>
        {
          state.data && state.data.weather.map((day, index) => (
            <WeatherDayComponent
              key={index}
              time={new Date(day.time).toLocaleDateString()}
              weathercode={day.weathercode}
              temperature={day.temperature}
              units={state.data.units}
            />
          ))
        }
      </div>
      <br />
      <div className='goBackContainer'>
        <button className='goBackButton' onClick={() => navigate(`/oneDay/${id}`)}>1 day</button>
      </div>

    </>
  )
}

export default ThreeDays