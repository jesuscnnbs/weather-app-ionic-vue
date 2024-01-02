import { defineStore } from 'pinia'

export const useWeatherStore = defineStore('Weather', {
  state: (): State => {
    return {
      current: null,
      forecast: [] as DayInfo[]
    }
  }
})

interface State {
  current: DayInfo | null
  forecast: DayInfo[]
}

interface DayInfo {
  last_updated: string
  temp_c: number
  temp_f: number
  is_day: boolean
  condition: Condition
}

interface Condition {
  text: string
  icon: string
  code: number
}