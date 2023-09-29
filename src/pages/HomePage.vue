<script>
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
    <section>
        <div class="jumbotron position-relative">
            
            <div class="title">
                <h2>
                    Simona Caruso
                    <h6 class="text-white">
                        Web Developer
                    </h6>
                </h2>

                <li class="btn btn-light">
                    <router-link :to="{ name: 'projects'}" class="nav-link"> 
                        My projects
                    </router-link>
                </li>
            </div>
            
            <img src="../../public/img/liquid-cheese.png" alt="">

        </div>
        
    </section>
</template>

<style lang="scss" scoped>

    .jumbotron{
        width: 100%;
        height: 100%;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .title{
            position: absolute;
            top: 50%;
            left: 40%;
            z-index: 4;

            h2{
                text-shadow: 1px 1px 2px #D0B101;
            }
        }
    }
</style>