<template>
    <div><button @click="handleClick">点击增加方式一</button></div>
    <div><button @click="handleClickPatch">点击增加方式二($patch 对象)</button></div>
    <div><button @click="handleClickMethod">点击增加方式三($patch 函数)</button></div>
    <div><button @click="handleClickActions">点击增加方式四(action 触发)</button></div>

    <div><button @click="handleClickChangePhone">改变手机号码</button></div>
    <div><button @click="getList">获取List数据</button></div>
</template>

<script setup lang="ts">
import { mainStore } from '../store/mian';

const store = mainStore();

const handleClick = () => {
    store.count++;
}
const handleClickPatch = () => {
    store.$patch({
        count: store.count + 2,
        helloWorld: store.helloWorld === "jspang" ? "HelloWorld" : "jspang",
    })
}
const handleClickMethod = () => {
    store.$patch((state) => {
        state.count++;
        state.helloWorld = state.helloWorld === "jspang" ? "HelloWorld" : "jspang";
    })
}
const handleClickActions = () => {
    store.changeState()
}
const handleClickChangePhone = () => {
    store.phone = '15510007550'
}
const getList = () => {
    let result = store.getList()
    console.log('result:', result)
}
</script>