<script setup lang="ts">
// TODO :
// - Créer deux refs : firstname et lastname
import {computed, ref} from "vue";

const props = defineProps<{ firstname: string, lastname: string }>()
//tests du toRefs qui ne fonctionne pas les props passent lecture seule
//const {firstname,lastname} = toRefs(props)
// Créer deux refs initialisées avec les props
const firstname = ref(props.firstname);
const lastname = ref(props.lastname);


// - Créer une computed fullName = firstname + ' ' + lastname
const fullname = computed(() => firstname.value + ' ' + lastname.value);
// - Les afficher tous dans le template
</script>

<template>
  <!-- TODO : deux inputs pour firstname et lastname avec v-model et affichage de fullName -->
  <fieldset title="Test NameForm">
    {{ fullname }}
    <label for="firstname">
      <input type="text" name="firstname" v-model="firstname" required/>
    </label>
    <label for="lastname">
      <input type="text" name="lastname" v-model="lastname" required/>
    </label>
    <label for="fullname">
      <input type="text" name="fullname" v-model="fullname" readonly disabled/>
    </label>
  </fieldset>
</template>
