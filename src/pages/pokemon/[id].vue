<template>
  <v-container>

    <!-- Si le Pokémon existe -->
    <div v-if="pokemon">
      <v-btn
        class="mb-4"
        @click="$router.back()"
      >
        Retour
      </v-btn>

      <h1>{{ pokemon.name }}</h1>

      <v-img
        :src="getImageUrl(pokemon.img)"
        :alt="pokemon.name"
        height="300"
        contain
      />

      <p>Niveau : {{ pokemon.level }}</p>

      <p>
        {{ pokemon.description }}
      </p>
    </div>

    <!-- Si les données sont chargées mais que l'ID n'existe pas -->
    <v-alert

      v-else-if="pokemonStore.pokemons.length"

      type="error"
    >
      Pokémon introuvable.
    </v-alert>

  </v-container>
</template>

<script setup>
import { getImageUrl } from '@/utils/imageUrl'
import { useRoute } from 'vue-router'

import { computed } from 'vue'
import { usePokemonStore } from '@/stores/pokemonStore'


const route = useRoute()
const pokemonStore = usePokemonStore()

const pokemon = computed(() => {
  return pokemonStore.getPokemonById(route.params.id)
})
</script>
