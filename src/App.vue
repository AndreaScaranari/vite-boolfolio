<script>
import AppHeader from './components/AppHeader.vue';
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'vite-boolfoglio',
    components: { AppHeader },
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
            <ul>
                <li v-for="project in projects" :key="project.id">
                    <strong v-text="project.title"></strong>
                </li>
            </ul>
        </main>
    </div>
</template>

<style></style>