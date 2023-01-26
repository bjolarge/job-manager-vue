import { createApp } from 'vue'
import App from './App.vue'
import './assets/app.css'

import router from './router'
import PrimeVue from 'primevue/config';

import 'primevue/resources/themes/tailwind-light/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';  

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faIndent} from '@fortawesome/free-solid-svg-icons'
import { faFolder} from '@fortawesome/free-solid-svg-icons'
import { faBarChart} from '@fortawesome/free-solid-svg-icons'
import { faAddressCard} from '@fortawesome/free-solid-svg-icons'


import InputText from 'primevue/inputtext'; 
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';

library.add(faIndent, faFolder, faBarChart,faAddressCard )
const app = createApp(App)

app.component('InputText',InputText)
app.component('Avatar',Avatar)
app.component('Menu',Menu)
// app component
app.component('font-awesome-icon', FontAwesomeIcon)

app.use(router)
app.use(PrimeVue)
app.mount('#app')
