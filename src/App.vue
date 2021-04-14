<template>
  <h1>HelloWorld</h1>
  <Avatar size="large" src="https://img12.360buyimg.com/imagetools/jfs/t1/143702/31/16654/116794/5fc6f541Edebf8a57/4138097748889987.png"
></Avatar>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Avatar } from './jlglui';

export default defineComponent({
  name: 'App',
  components: {
    Avatar
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>