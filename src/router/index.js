import VueRouter from 'vue-router'

import Main from '../components/mainFolder/Main.vue'
import DownloadPage from '../components/mainFolder/DownloadPage.vue'



export default new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/download',
            name: 'download',
            component: DownloadPage
        }

    ]
})