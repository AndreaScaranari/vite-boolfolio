// Il web.php di Vue
import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../components/pages/HomePage.vue';
import ProjectDetailPage from '../components/pages/ProjectDetailPage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/projects/:slug', component: ProjectDetailPage, name: 'project-detail' },
        { path: '/contact-us', component: ContactUsPage, name: 'contact-us' },
        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: 'not-found' }
        // { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});

export { router }