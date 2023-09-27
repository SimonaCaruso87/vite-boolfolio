<script>

import axios from 'axios';


export default{
    name: "MainComponent",
    data(){
        return{
            projects : [ ],
        }
    },
    methods:{

    },
    created(){
        axios.get('http://localhost:8000/api/projects')
        .then(res=>{
            this.projects = res.data.projects.data
        })
    },
    
}
</script>

<template>

    <main>
        <div class="row">
            <div class="card border rounded-2 bg-primary" v-for="(project , index) in projects" :key="index">
                <div>
                    {{ project.title }}
                </div>
                <div>
                    {{ project.slug }}
                </div>
                <div>
                    {{ project.creation_date }}
                </div>
                <div>
                    {{ project.url }}
                </div>
                <div>
                    {{ project.description }}
                </div>
            </div>
        </div>
    </main>

</template>

<style lang="scss" scoped>

main{
    padding:40px;
    text-align: center;
}

</style>