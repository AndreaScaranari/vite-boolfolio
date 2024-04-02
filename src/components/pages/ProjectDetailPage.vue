<script>
import axios from 'axios';
import AppLoader from '../AppLoader.vue';
import ProjectCard from '../projects/ProjectCard.vue';
const endpoint = 'http://localhost:8000/api/projects/';

export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard, AppLoader },
    data: () => ({
        isLoading: false,
        project: null,
    }),
    methods: {
        getProject() {
            this.isLoading = true
            axios.get(endpoint + this.$route.params.id)
                .then(res => { this.project = res.data })
                .catch(err => { console.error(err) })
                .then(() => { this.isLoading = false })
        }
    },
    created() {
        this.getProject();
    }
}
</script>

<template>
    <h1 class="py-3 text-center">Dettaglio Progetto</h1>
    <AppLoader v-if="isLoading && !project" />
    <ProjectCard v-if="!isLoading && project" :project="project" :isDetail="true" />

</template>

<style></style>