<script setup lang="ts">
// TODO :
// - Créer un tableau de todos { text, done }
import {ref} from "vue";

type todo = {
  text: string,
  done: boolean,
}
const showList = ref(true);
const showDone = ref(true);
const props = defineProps<{ todos?: todo[] }>()
const todos = [
  {text: "todo 1", done: false}
];
todos.push({text: "todo 2", done: false})
todos.push({text: "todo 3", done: true})
todos.push({text: "todo 4", done: false})
// - Afficher la liste avec v-for
// - Ajouter un bouton Toggle pour cacher/afficher la liste (v-if ou v-show)
</script>

<template>
  <!-- TODO : liste + bouton toggle -->
  <button type="button" id="showList" @click="showList= !showList">{{ showList ? "Masquer" : "Afficher" }} la list</button>
  <button type="button" id="showDown" @click="showDone= !showDone">{{ showDone ? "Masquer" : "Afficher" }} les donnes</button>
  <ul v-if="showList">
    <template v-for="todo in todos">
      <li v-if="!todo.done || !showDone" :key="todo.text">{{ todo.text }}</li>
    </template>
  </ul>
</template>
