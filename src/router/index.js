// Il web.php di Vue
import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../components/pages/HomePage.vue';
import ProjectDetailPage from '../components/pages/ProjectDetailPage.vue';
import TypeProjectPage from '../components/pages/TypeProjectPage.vue';
import TechnologyProjectPage from '../components/pages/TechnologyProjectPage.vue';
import ContactUsPage from '../components/pages/ContactUsPage.vue';
import NotFoundPage from '../components/pages/NotFoundPage.vue';

const router = createRouter({
    history: createWebHistory(),
    linkExactActiveClass: 'active',
    routes: [
        { path: '/', component: HomePage, name: 'home' },
        { path: '/contact-us', component: ContactUsPage, name: 'contact-us' },

        { path: '/projects/:slug', component: ProjectDetailPage, name: 'project-detail' },
        { path: '/types/:slug/projects', component: TypeProjectPage, name: 'type-projects' },
        { path: '/technologies/:slug/projects', component: TechnologyProjectPage, name: 'technology-projects' },

        { path: '/not-found', component: NotFoundPage, name: 'not-found' },
        { path: '/:pathMatch(.*)*', redirect: 'not-found' }
        // { path: '/:pathMatch(.*)*', redirect: '/' }
    ]
});

export { router }