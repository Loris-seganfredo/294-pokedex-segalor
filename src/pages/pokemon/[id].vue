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
      v-else-if="pokemons.length"
      type="error"
    >
      Pokémon introuvable.
    </v-alert>

  </v-container>
</template>

<script setup>
import { getImageUrl } from '@/utils/imageUrl'
import { useRoute } from 'vue-router'

const route = useRoute()

const pokemons = ref([])

const pokemon = computed(() => {
  return pokemons.value.find(p => p.id === route.params.id)
})

onMounted(async () => {
  const response = await fetch('http://localhost:3535/pokemons')
  pokemons.value = await response.json()
})
</script>
