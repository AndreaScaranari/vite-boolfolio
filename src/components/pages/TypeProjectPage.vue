<script>
import axios from 'axios';
import { store } from '../../data/store';
import ProjectCard from '../projects/ProjectCard.vue';
import ProjectList from '../projects/ProjectList.vue';
const baseUri = 'http://localhost:8000/api';
export default {
    name: 'TypeProjectsPage',
    components: { ProjectCard, ProjectList },
    data: () => ({
        projects: [],
        typeLabel: '',
        store
    }),
    methods: {
        fetchProjects() {
            store.isLoading = true;
            axios.get(`${baseUri}/types/${this.$route.params.slug}/projects/`)
                .then(res => {
                    const { label, projects } = res.data;
                    this.projects = projects;
                    this.typeLabel = label;
                })
                .catch(err => {
                    console.error(err);
                    this.$router.push({ name: 'not-found' });
                })
                .then(() => {
                    store.isLoading = false;
                })
        }
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<template>
    <section id="type_project_list" v-show="!store.isLoading">
        <h1 class="text-center py-3">Progetti della categoria: {{ typeLabel }}</h1>

        <ProjectList :projects="projects" />
    </section>

</template>

<style></style>