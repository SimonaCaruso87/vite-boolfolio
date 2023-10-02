import { createRouter, createWebHistory  } from "vue-router";

import HomePage from './pages/HomePage.vue';
import SinglePostPage from './pages/SinglePostPage.vue';
import ContactPage from './pages/contactPage.vue';
import NotFoundPage from './pages/NotFoundPage.vue';


const router = createRouter({
  history:createWebHistory(),
  routes:[
    {
      path:'/',
      name:'home',
      component:HomePage,
    },
    {
      path:'/single/:id',
      name:'single',
      component:SinglePostPage,
    },
    {
      path:'/:pathMatch(.*)*',
      name:'NotFound',
      component:NotFoundPage,
    },{
        path:'/contact',
        name:'contact',
        component:HomePage,
      }
  ]
});

export { router };