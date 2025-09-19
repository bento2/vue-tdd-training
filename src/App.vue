<script setup lang="ts">
import { ref } from 'vue'

// Liste de toutes les vues disponibles
const views = [
  { name: 'Counter', component: () => import('./components/Counter.vue') },
  { name: 'ComplexState', component: () => import('./components/ComplexState.vue') },
  { name: 'Child', component: () => import('./components/Child.vue') },
  { name: 'NameForm', component: () => import('./components/NameForm.vue') },
  { name: 'SearchBox', component: () => import('./components/SearchBox.vue') },
  { name: 'TodoList', component: () => import('./components/TodoList.vue') },
  { name: 'TaskItem', component: () => import('./components/TaskItem.vue') },
  { name: 'Names', component: () => import('./components/Names.vue') },
  { name: 'Card', component: () => import('./components/Card.vue') },
  { name: 'Life', component: () => import('./components/Life.vue') }
]

const currentView = ref<null | any>(null)

async function loadView(view: typeof views[0]) {
  currentView.value = (await view.component()).default
}
</script>

<template>
  <div style="padding: 2rem; font-family: sans-serif;">
    <h1>Vue TDD Playground</h1>

    <div style="margin-bottom: 2rem;">
      <h2>Choisis une vue :</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <button
            v-for="view in views"
            :key="view.name"
            @click="loadView(view)"
            style="padding: 0.5rem 1rem; cursor: pointer;"
        >
          {{ view.name }}
        </button>
      </div>
    </div>

    <div v-if="currentView">
      <component :is="currentView" />
    </div>
  </div>
</template>
