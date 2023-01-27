import {
  faSun,
  faCloudSun,
  faCloud,
  faSmog,
  faDroplet,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowman,
  faSnowflake,
  faCloudShowersWater,
  faBoltLightning,
  faPooStorm,
  faQuestion
} from '@fortawesome/free-solid-svg-icons'

export const weatherCodesToIcons = {
  0: {
    icon: faSun,
    color: 'yellow',
    description: 'Clear Sky'
  },
  1: {
    icon: faCloudSun,
    color: 'yellow',
    description: 'Mainly clear'
  },
  2: {
    icon: faCloudSun,
    color: 'grey',
    description: 'Partly cloudy'
  },
  3: {
    icon: faCloud,
    color: 'grey',
    description: 'Overcast'
  },
  45: {
    icon: faSmog,
    color: 'grey',
    description: 'Fog'
  },
  48: {
    icon: faDroplet,
    color: 'blue',
    description: 'Depositing rime fog'
  },
  51: {
    icon: faCloudRain,
    color: 'blue',
    description: 'Light drizzle'
  },
  53: {
    icon: faCloudRain,
    color: 'blue',
    description: 'Moderate drizzle'
  },
  55: {
    icon: faCloudRain,
    color: 'blue',
    description: 'Heavy drizzle'
  },
  56: {
    icon: faSnowflake,
    color: 'white',
    description: 'Slight freezing drizzle'
  },
  57: {
    icon: faSnowflake,
    color: 'white',
    description: 'Dense freezing drizzle'
  },
  61: {
    icon: faCloudRain,
    color: 'blue',
    description: 'Slight rain'
  },
  63: {
    icon: faCloudRain,
    color: 'blue',
    description: 'Moderate rain'
  },
  65: {
    icon: faCloudShowersHeavy,
    color: 'blue',
    description: 'Heavy rain'
  },
  66: {
    icon: faSnowflake,
    color: 'white',
    description: 'Light freezing rain'
  },
  67: {
    icon: faSnowflake,
    color: 'white',
    description: 'Heavy freezing rain'
  },
  71: {
    icon: faSnowman,
    color: 'white',
    description: 'Slight snow fall'
  },
  73: {
    icon: faSnowman,
    color: 'white',
    description: 'Moderate snow fall'
  },
  75: {
    icon: faSnowman,
    color: 'white',
    description: 'Heavy snow fall'
  },
  77: {
    icon: faSnowflake,
    color: 'white',
    description: 'Snow grains'
  },
  80: {
    icon: faCloudShowersWater,
    color: 'blue',
    description: 'Slight rain'
  },
  81: {
    icon: faCloudShowersHeavy,
    color: 'blue',
    description: 'Moderate rain'
  },
  82: {
    icon: faCloudShowersHeavy,
    color: 'blue',
    description: 'Heavy rain'
  },
  85: {
    icon: faSnowflake,
    color: 'white',
    description: 'Slight snow showers'
  },
  86: {
    icon: faSnowflake,
    color: 'white',
    description: 'Heavy snow showers'
  },
  95: {
    icon: faBoltLightning,
    color: 'yellow',
    description: 'Thunderstorm'
  },
  96: {
    icon: faPooStorm,
    color: 'grey',
    description: 'Thunderstorm with slight hail'
  },
  99: {
    icon: faPooStorm,
    color: 'grey',
    description: 'Thunderstorm with heavy hail'
  },
  'default': {
    icon: faQuestion,
    color: 'grey',
    description: 'Unknown'
  }
}