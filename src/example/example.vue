<template>
  <div>
    <text class="text">{{info}}</text>
  </div>
</template>

<style scoped>
.text {
  font-size: 60px;
  color: #666666;
  text-align: center;
}
</style>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component
export default class YExample extends Vue {
  info = "hello world!";
}
</script>

