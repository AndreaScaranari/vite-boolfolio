<script>
import AppAlert from '../AppAlert.vue';
import ProjectList from '../projects/ProjectList.vue';
import axios from 'axios';
import { store } from '../../data/store';

const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'HomePage',
    components: { ProjectList, AppAlert },
    data: () => ({
        projects: {
            data: [],
            link: [],
        },
        isAlertOpen: false,
        store
    }),
    methods: {
        fetchProjects(endpoint) {
            if (!endpoint) endpoint = 'http://localhost:8000/api/projects/';
            store.isLoading = true;
            axios.get(endpoint).then(res => {
                const { data, links } = res.data;
                this.projects = { data, links };

                this.isAlertOpen = false;
            }).catch(err => {
                console.error(err);
                this.isAlertOpen = true;
            }).then(() => {
                store.isLoading = false;
            })
        },
        closeErrorAlert() {
            this.isAlertOpen = false;
            // this.fetchProjects();
        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <h1 class="text-center py-3">I miei progetti</h1>
    <AppAlert :show="isAlertOpen" @close="closeErrorAlert" />
    <div v-if="!store.isLoading">
        <ProjectList :projects="projects.data" :isDetail="false" />

        <!-- BasePagination -->
        <nav aria-label="Page navigation example">
            <ul class="pagination">
                <li v-for="link in projects.links" :key="link.label" class="page-item">
                    <button class="page-link" :disabled="!link.url"
                        :class="{ 'active': link.active, 'disabled': !link.url }" v-html="link.label"
                        @click="fetchProjects(link.url)"></button>
                </li>
            </ul>
        </nav>
    </div>

</template>

<style></style>