import { createApp } from 'vue'
import App from './App.vue'
import *as bootstrap from 'bootstrap'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faDroplet } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'

/* add icons to the library */
library.add(faVideo , faRoad , faDroplet , faGoogle , faGear , faChartBar , faBuilding)
//aggiungere faG

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')