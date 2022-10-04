<script setup lang="ts">
import Jspang from './components/Jspang.vue';
import CountButton from "./components/CountButton.vue";
import useStore from './store';

const { user, jspang, main } = useStore()
user.getLists()
</script>

<template>
  <Jspang></Jspang>
  <CountButton></CountButton>
  <h3>电话:{{main.phone}}</h3>
  <h3>电话hid:{{main.phoneHidden}}</h3>
  <h3>jspang长度：{{jspang.list.length}}</h3>
  <div>
    <ul>
      <li v-for="item in user.userList">
        姓名：{{ item.name }} ---- 年龄：{{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>
