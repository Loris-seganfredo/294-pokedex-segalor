import {defineStore} from 'pinia'

export const usePokemonStore = defineStore('pokemon', {
  state: () => ({
    pokemons: [],
    types: [],
    isLoading: false,
    error: null,
  }),


  getters: {
    totalPokemons: (state) => state.pokemons.length,

    getPokemonById: (state) => {
      return (pokemonId) => {
        return state.pokemons.find(p => p.id === pokemonId)
      }
    },
  },

  actions: {
    async fetchPokemons() {
      try {
        const response = await fetch('http://localhost:3535/pokemons')

        if (!response.ok) {
          throw new Error('Erreur lors du chargement des Pokémon')
        }

        this.pokemons = await response.json()

      } catch (error) {
        this.error = error.message
        console.error(error)
        throw error
      }
    },


    async fetchTypes() {
      try {
        const response = await fetch('http://localhost:3535/types')

        if (!response.ok) {
          throw new Error('Erreur lors du chargement des types')
        }

        this.types = await response.json()

      } catch (error) {
        this.error = error.message
        console.error(error)
        throw error
      }
    },

    async init() {
      this.isLoading = true

      try {
        await Promise.all([
          this.fetchPokemons(),
          this.fetchTypes(),
        ])
      } catch (error) {
        this.error = 'Erreur lors du chargement des données'
        console.error(error)
      } finally {
        this.isLoading = false
      }
    },

  },

})
