<template>
  <!-- Conteneur principal pour structurer la disposition de la page -->
  <v-container>
    <!--
    Titre de la page
      * text-h3 applique le style titre de niveau 3
      * text-center permet de centrer le texte
      * my-6 ajoute une marge verticale de 6 unités
    -->
    <h1 class="text-h3 text-center my-6">
      Pokédex

    </h1>

    <v-row>
      <v-col
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <PokemonCard :pokemon="pokemon" />
      </v-col>
    </v-row>
    <!-- TODO: Afficher les Pokémon ici -->
  </v-container>
</template>

<script setup>
import PokemonCard from '@/components/PokemonCard.vue'


import { usePokemonStore } from '@/stores/pokemonStore'
import { storeToRefs } from 'pinia'

const pokemonStore = usePokemonStore()
const { pokemons } = storeToRefs(pokemonStore)

</script>
