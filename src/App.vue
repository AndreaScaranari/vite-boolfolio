<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/pages/HomePage.vue';
import ContactUsPage from './components/pages/ContactUsPage.vue';

export default {
    name: 'vite-boolfoglio',
    components: { AppHeader, HomePage, ContactUsPage }
}
</script>

<template>
    <AppHeader />
    <main class="container">
        <HomePage />
        <!-- <ContactUsPage /> -->
    </main>
</template>

<style></style>