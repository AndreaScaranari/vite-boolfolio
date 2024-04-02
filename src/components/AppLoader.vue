<script>
export default {
    name: 'AppLoader',
};
</script>

<template>
    <div class="loader-overlay">
        <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
        </div>
    </div>
</template>

<style lanc="scss" scoped>
.loader-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(192, 185, 185, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;

    .spinner-border {
        width: 150px;
        height: 150px;
    }
}
</style>