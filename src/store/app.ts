import { create } from 'zustand'
import { combine } from 'zustand/middleware'

const initialState = {
  value: 5
}

const useAppStore = create(
  combine(initialState, (set) => ({
    setValue: (value: number) => set({ value }),
    reset: () => set(initialState)
  }))
)

export default useAppStore
