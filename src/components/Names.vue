<script setup lang="ts">
// TODO :
// - Créer une liste de noms dans une ref

import {ref} from "vue";

const noms = ref(["riri", "fifi"])

// - Afficher la liste avec v-for et :key
// - Ajouter un bouton pour mélanger les noms

const randomize = () => {
  noms.value = noms.value.map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value)
}


</script>

<template>
  <!-- TODO : inputs pour chaque nom + bouton mélanger -->
  <button type="button" @click="randomize">Mélanger</button>
  <ul>
    <template v-for="(value,index) in noms" :key="index">
      <input :value="value" @input="noms[index] = ($event.target as HTMLInputElement).value"/>
    </template>
  </ul>
</template>
