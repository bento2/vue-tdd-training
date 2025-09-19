<script setup lang="ts">
import {ref} from 'vue'
import './assets/main.css'

// Liste de toutes les vues disponibles
const views = [
  {name: 'Counter', component: () => import('./components/Counter.vue')},
  {name: 'ComplexState', component: () => import('./components/ComplexState.vue')},
  {name: 'Child', component: () => import('./components/Child.vue')},
  {name: 'NameForm', component: () => import('./components/NameForm.vue')},
  {name: 'SearchBox', component: () => import('./components/SearchBox.vue')},
  {name: 'TodoList', component: () => import('./components/TodoList.vue')},
  {name: 'TaskItem', component: () => import('./components/TaskItem.vue')},
  {name: 'Names', component: () => import('./components/Names.vue')},
  {name: 'Card', component: () => import('./components/Card.vue')},
  {name: 'Life', component: () => import('./components/Life.vue')}
]

const currentView = ref<null | any>(null)
const currentName = ref('')

async function loadView(view: typeof views[0]) {
  currentView.value = (await view.component()).default
  currentName.value = view.name
}

</script>

<template>
  <div class="p-2">
    <h1>Vue TDD Playground</h1>

    <div class="mb-2">
      <h2>Choisis une vue :</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
        <button v-for="view in views" :key="view.name" @click="loadView(view)" type="button"
                :class="{'bg-green-500': currentName === view.name}"> {{ view.name }}
        </button>
      </div>
    </div>

    <div v-if="currentView">
      <component :is="currentView"/>
    </div>
  </div>
</template>
