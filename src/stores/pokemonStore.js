
import { defineStore } from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    types: [],
    isLoading: false,
    error: null,
  }),
})
