<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
import ContactUsPage from './components/pages/ContactUsPage.vue';
import AppLoader from './components/AppLoader.vue';
import { store } from './data/store';

export default {
    name: 'vite-boolfoglio',
    components: { AppHeader, HomePage, ContactUsPage, AppLoader },
    data: () => ({
        store
    })
}
</script>

<template>
    <AppHeader />
    <main class="container">
        <AppLoader v-if="store.isLoading" />
        <RouterView />
    </main>
</template>

<style></style>