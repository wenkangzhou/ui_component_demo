<template>
  <div class="doc-header">
    <div class="header-logo">
      <a class="logo-link" href="#"></a>
      <span class="logo-border"></span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'doc-header',
  setup() {
  }
});
</script>

<style lang="scss">
.doc {
  &-header {
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
    right: 0;
    min-width: 1300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 64px;
    line-height: 64px;
    text-align: left;
    padding: 0 50px;
    font-size: 20px;
    background-color:white;
    color: #fff;
  }
}
.header {
  &-logo {
    position: relative;
    display: inline-block;
    width: 240px;
    height: 64px;
    .logo-link {
      display: inline-block;
      width: 120px;
      height: 46px;
      vertical-align: middle;
      position: absolute;
      top: 50%;
      margin-top: -23px;
      background: url(../../assets/images/logo.png) no-repeat center/100%;
    }
    .logo-border {
      display: inline-block;
      width: 1px;
      height: 26px;
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -13px;
    }
  }
}
</style>
