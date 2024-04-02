<script>
import ProjectCard from './ProjectCard.vue';
export default {
    name: 'ProjectList',
    components: { ProjectCard },
    props: { projects: Array }
};
</script>

<template>
    <section id="project_list">
        <div v-if="projects.length">
            <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <h4 v-else>Non ci sono progetti da mostrare</h4>
    </section>

</template>

<style></style>