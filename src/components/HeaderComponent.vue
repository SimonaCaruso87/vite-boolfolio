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
        //dichiarazione
    },
    props:{
        //utilizzo per file padre
    }
    
    
  }
</script>


<template>
    
    <header class="header">
        <nav class="navbar d-flex justify-content-center">

            <div class="container-fluid">
                <a class="navbar-brand me-5">
                    <div style="width: 100px; height: 100px;" >
                        <img style="width: 100%;" src="../../public/img/loghista.png" alt="">
                    </div>
                </a>
                <div>
                    <ul class="navbar-nav d-inline-block">

                        <li class="nav-item d-inline-block ms-5">
                            <router-link :to="{ name: 'home'}" class="nav-link"> 
                                HomePage
                            </router-link>
                        </li>
                        <li class="nav-item ms-5 d-inline-block">
                            <router-link :to="{ name: 'projects'}" class="nav-link"> 
                                Projects
                            </router-link>
                        </li>
                        <li class="nav-item ms-5 d-inline-block">
                            <router-link :to="{ name: ''}" class="nav-link"> 
                                About Me
                            </router-link>
                        </li>
                        <li class="nav-item ms-5 d-inline-block">
                            <router-link :to="{ name: ''}" class="nav-link"> 
                                Contacts
                            </router-link>
                        </li>
                    </ul>
                </div>
                <form class="d-flex" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                    
                    <button class="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>
    </header>

</template>



<style lang="scss" scoped>
@use '../assets/scss/variables.scss' as *;

.header{
        background-color: #fffafa;
        }

</style>