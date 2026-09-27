<script setup>
import { getImageUrl } from '@/utils/imageUrl'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  pokemon: {
    type: Object,
    required: true,
  },
})

function ouvrirPokemon() {
  router.push(`/pokemon/${props.pokemon.id}`)
}
</script>

<template>
  <v-card
    hover
    @click="ouvrirPokemon"
  >
    <v-img
      :src="getImageUrl(pokemon.img)"
      :alt="pokemon.name"
      height="200"
      cover
    />

    <v-card-title>
      {{ pokemon.name }}
    </v-card-title>

    <v-card-subtitle>
      Niveau {{ pokemon.level }}
    </v-card-subtitle>
  </v-card>
</template>
