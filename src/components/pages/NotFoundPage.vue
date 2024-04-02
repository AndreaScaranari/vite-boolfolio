<script>
export default {
    name: 'NotFoundPage',
};
</script>

<template>
    <div class="vh-100 d-flex flex-column align-items-center justify-content-center">
        <h3 class="text-white text-center mb-3">404 | Page not found</h3>
        <div class=" d-flex justify-content-between gap-3">
            <RouterLink class="btn btn-primary" to="/">Torna alla Home</RouterLink>
            <button class="btn btn-secondary" @click="$router.back()">Torna Indietro</button>
        </div>
    </div>
</template>

<style></style>