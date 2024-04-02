<script>
import AppHeader from './components/AppHeader.vue';
import ProjectList from './components/projects/ProjectList.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'vite-boolfoglio',
    components: { AppHeader, ProjectList },
    data: () => ({
        projects: []
    }),
    methods: {
        fetchProjects() {
            axios.get(endpoint).then(res => {
                // console.log(res.data);
                this.projects = res.data;
            })
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

            <ProjectList :projects="projects" />
        </main>
    </div>
</template>

<style></style>