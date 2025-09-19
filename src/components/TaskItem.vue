<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
// TODO :
// - Recevoir une prop "done" boolean
const props = withDefaults(defineProps<{ done: boolean }>(), {
  done: false,
});
// - Ajouter une classe "completed" si done = true
// - Ajouter un style couleur verte si done = true

</script>

<template>
  <div :class="{'completed': props.done}" :style="[`${props.done?'color:green':''}`]"><slot/></div>
</template>
