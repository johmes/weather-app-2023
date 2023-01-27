import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { cities } from '../cities.js';
import { WeatherDayComponent } from '../components/WeatherDayComponent.jsx';

const OneDay = () => {
  const [state, setState] = useState({
    isLoading: false,
    data: null,
    error: null
  });

  let navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    const baseURL = 'https://api.open-meteo.com/v1/forecast?timezone=Europe/Helsinki'

    const getOneDayWeather = async () => {
      setState({ isLoading: true })

      if (!(id in cities)) {
        setState({ error: "Check the name of the city." })
        return;
      }

      const { latitude, longitude } = cities[id];
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
    }
    getOneDayWeather();

  }, [id, navigate])

  if (state.isLoading) { return (<p className='headerText'>Loading...</p>) }

  if (state.error) { return (<p className='headerText'>{state.error}</p>) }

  return (
    <>
      <h1 className='headerText'>{id}</h1>
      <div className='weatherComponentsContainer'>
        {
          state.data &&
          <WeatherDayComponent
            time='Today'
            weathercode={state.data.weather.weathercode}
            temperature={state.data.weather.temperature}
            units={state.data.units}
          />
        }
      </div>
      <br />
      <div className='goBackContainer'>
        <button
          className='goBackButton'
          onClick={() => navigate(`/threeDays/${id}`)}
        >
          3 days
        </button>
      </div>

    </>
  )
}

export default OneDay