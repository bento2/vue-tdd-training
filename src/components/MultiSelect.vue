<script setup lang="ts" xmlns="http://www.w3.org/1999/html">
// TODO:
// - Définir une prop `options` qui est un tableau d'objets { value: string, label: string }
// - Définir une prop `modelValue` qui est un tableau de strings (les valeurs des options sélectionnées)
// - Gérer la sélection et la désélection des options
// - Émettre un événement `update:modelValue` avec les nouvelles valeurs sélectionnées

type optionProps = { value: string, label: string }
const props = withDefaults(defineProps<({
  options: Array<optionProps>, modelValue: Array<string>
})>(), {options: () => [], modelValue: () => []});

const {options, modelValue} = props
const emit = defineEmits(['update:modelValue'])


const changeOption = (event: Event) => {
  const input = event.target as HTMLInputElement
  let result = modelValue
  if (input.checked) {
    result.push(input.value)
  }else{
    result = modelValue.filter((item) => item !== input.value)
  }
  emit('update:modelValue', result)
}

</script>

<template>
  <div>
    <!-- TODO: Afficher la liste des options sous forme de checkboxes -->
    <template v-for="option in options">
      <label>
        <input type="checkbox" :value="option.value" :checked="modelValue?.includes(option.value)"
               @change="changeOption($event)"/>{{ option.label }}
      </label>
    </template>
    <!-- TODO: Afficher les options sélectionnées -->

  </div>
</template>
