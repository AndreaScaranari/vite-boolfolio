<script>
export default {
    name: 'ProjectCard',
    props: { project: Object, isDetail: Boolean },
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
            <span class="badge" :style="{ backgroundColor: project.type?.color }">{{ project.type?.label }}</span>
            <p class="card-text">{{ isDetail ? project.content : abstract }}</p>
        </div>
        <div class="d-flex justify-content-end gap-2 mb-3 px-3" v-if="project.technologies?.length">
            <span class="badge rounded-pill" :class="`text-bg-${tech.color}`" v-for="tech in project.technologies"
                :key="tech.id">{{ tech.label }}</span>
        </div>
        <div class="d-flex justify-content-between mx-3">
            <address> By {{ project.author ? project.author.name : 'Anonimo' }}</address>
            <small>Pubblicato il {{ publicationDate }}</small>
        </div>
        <div class="card-footer d-flex justify-content-center" v-if="!isDetail">
            <RouterLink class="btn btn-primary" :to="{ name: 'project-detail', params: { slug: project.slug } }">Scopri
                di
                più
            </RouterLink>
        </div>
    </div>
</template>

<style></style>