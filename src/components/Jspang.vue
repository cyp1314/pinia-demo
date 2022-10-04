<template>
    <h2>{{ helloWorld }}</h2>
    <h2>{{ count }}</h2>
    <h2>1:{{ phoneHidden }}</h2>
    <h2>2:{{ phoneHidden }}</h2>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { mainStore } from "../store/mian";
const store = mainStore();
const { helloWorld, count, phoneHidden } = storeToRefs(store);
</script>
