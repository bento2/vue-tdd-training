<script setup lang="ts">
import { inject } from 'vue'

// TODO:
// - Injecter la valeur fournie par le composant parent avec la clé 'my-key'
const injectedValue = ''
</script>

<template>
  <div>
    <p>{{ injectedValue }}</p>
  </div>
</template>
