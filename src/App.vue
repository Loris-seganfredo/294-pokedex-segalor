<template>
  <!--
  Conteneur principal de l'application utilisant Vuetify
  -->
  <v-app>

    <!-- En-tête global de l'application -->
    <app-header />

    <!--
    Zone principale :
    router-view affiche la page correspondant à la route actuelle
    -->
    <v-main>
      <router-view />
    </v-main>

    <!-- Pied de page global -->
    <app-footer />

  </v-app>
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>
