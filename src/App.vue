<script>
import AppHeader from './components/AppHeader.vue';
import AppAlert from './components/AppAlert.vue';
import ProjectList from './components/projects/ProjectList.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'vite-boolfoglio',
    components: { AppHeader, ProjectList, AppAlert },
    data: () => ({
        projects: [],
        isLoading: false,
        isAlertOpen: false,
    }),
    methods: {
        fetchProjects() {
            this.isLoading = true;
            axios.get(endpoint).then(res => {
                // console.log(res.data);
                this.projects = res.data;
                this.isAlertOpen = false;
            }).catch(err => {
                console.error(err);
                this.isAlertOpen = true;
            }).then(() => {
                this.isLoading = false;
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
    <div class="container">
        <AppHeader />
        <main>
            <h1 class="text-center py-3">TEST</h1>
            <AppAlert :show="isAlertOpen" @close="closeErrorAlert" />
            <AppLoader v-if="isLoading" />
            <ProjectList v-else :projects="projects" />
        </main>
    </div>


</template>

<style></style>