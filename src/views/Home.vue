<template>
  <div class="main-container">
    <h1>Filie-se à Resistência!</h1>
    <CadastroResistencia />  
  </div>
</template>

<script>
import CadastroResistencia from '../components/CadastroResistencia.vue'

export default {
  name: "Home",
  components: {
    CadastroResistencia,
  }
}

</script>

<style scoped>


</style>