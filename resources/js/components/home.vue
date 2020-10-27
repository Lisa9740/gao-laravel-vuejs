<template>
    <div class="container">
        <button type="button" class="btn btn-primary" @click="showModal">Ajouter PC</button>
        <AddComputer v-show="isModalVisible" @close="closeModal" @createElement="getCreatedElement"/>
        <div class="row">
                <div v-for="computer in computers" v-bind:key="computer.id">
                    <div class="col">
                    <Computer :computer="computer" />
                </div>
            </div>
        </div>
    </div>
</template>
<style>
.modal-fade-enter,
.modal-fade-leave-active {
    opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
    transition: opacity .5s ease
}
</style>
<script src="./home.js"></script>
