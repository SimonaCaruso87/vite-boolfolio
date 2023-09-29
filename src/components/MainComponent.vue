<script>
//import


   export default {
    data() {
      return{
        //dati
      }
    },
    methods: {
        //function
    },
    components: {
        //components
    },
    props:{
        //utilizzo per file padre
    }
    
    
  }
</script>


<template>

    <main>

      <router-view></router-view>
      
    </main>

</template>




<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

main{
    padding-top: 20px;
    padding-bottom: 20px;
    overflow: auto; /* Abilita lo scorrimento del main se il contenuto è troppo lungo */
    height: 100%;

}


</style>