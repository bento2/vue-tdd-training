<script setup lang="ts">
import {inject, provide} from 'vue'
import Injector from './Injector.vue'

// TODO:
// - Fournir une valeur (par exemple, une chaîne de caractères 'hello from provider')
//   en utilisant la clé 'my-key'
provide('my-key', 'hello from provider')
</script>

<template>
  <div>
    <Injector />
  </div>
</template>
