<script>
export default {
    name: 'ProjectCard',
    props: { project: Object },
    computed: {
        abstract() {
            const abstract = this.project.content.slice(0, 200);
            return abstract + '[...]';
        },
        publicationDate() {
            const date = new Date(this.project.created_at);
            let day = date.getDate();
            let month = date.getMonth();
            const year = date.getFullYear();
            let hours = date.getHours();
            let minutes = date.getMinutes();
            // const seconds = date.getSeconds();

            if (day < 10) day = '0' + day;
            if (month < 10) month = '0' + month;
            if (hours < 10) hours = '0' + hours;
            if (minutes < 10) minutes = '0' + minutes;

            return `${day}/${month}/${year} alle ${hours}:${minutes}`;
        }
    }
};
</script>

<template>
    <div class="card mb-5">
        <div class="card-header p-3 m-0">
            <h5 class="card-title text-center m-0">{{ project.title }}</h5>
        </div>
        <div class="card-body clearfix">
            <img v-if="project.image" :src="project.image" :alt="project.title" class="img-fluid float-start me-3">
            <p class="card-text">{{ abstract }}</p>
        </div>
        <div class="d-flex justify-content-between mx-3">
            <address> By {{ project.author ? project.author.name : 'Anonimo' }}</address>
            <small>Pubblicato il {{ publicationDate }}</small>
        </div>
        <div class="card-footer d-flex justify-content-center">
            <RouterLink class="btn btn-primary" :to="{ name: 'project-detail', params: { id: project.id } }">Scopri di
                più
            </RouterLink>
        </div>
    </div>
</template>

<style></style>