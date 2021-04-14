<template>
  <doc-header></doc-header>
  <div class="doc-content">
    <div class="doc-content-index">
      <div class="content-left">
        <div class="content-title"> JLGLUI 1.0 </div>
        <div class="content-smile"> </div>
        <div class="content-subTitle">叽里呱啦轻量级移动端 Vue 组件库</div>
        <div class="content-button">
          <div class="leftButton" @click="toIntro">
            <div class="leftButtonText">开始使用</div>
          </div>
        </div>
      </div>
    </div>
    <div class="doc-content-features">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">平台特色</h4>
      </div>
    </div>
    <div class="doc-content-cases">
      <div class="doc-content-hd">
        <h4 class="doc-content-title">赋能案例</h4>
      </div>
    </div>
  </div>
  <doc-footer></doc-footer>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import Header from '@/sites/doc/components/Header.vue';
import Footer from '@/sites/doc/components/Footer.vue';
import router from '../router';
export default defineComponent({
  name: 'main',
  components: {
    [Header.name]: Header,
    [Footer.name]: Footer
  },
  setup() {
    function toIntro() {
      router.push({ path: '/index' });
    }
    return {
      toIntro,
    };
  }
});
</script>
<style lang="scss">
.doc-content-index {
  .content-left {
    .content-button {
      position: relative;
      display: flex;
      margin-top: 40px;
      .leftButton {
        display: flex;
        .leftButtonText {
          align-self: center;
          margin: auto;
          font-size: 14px;
          color: rgba(255, 255, 255, 1);
        }
        width: 150px;
        height: 40px;
        background: linear-gradient(
          135deg,
          rgba(250, 25, 44, 1) 0%,
          rgba(250, 39, 40, 1) 45%,
          rgba(250, 56, 31, 1) 83%,
          rgba(250, 63, 25, 1) 100%
        );
        border-radius: 29px;
        cursor: pointer;
      }
    }
  }
}
</style>
<style lang="scss" scoped>
.doc-content {
  &-hd {
    height: 52px;
    line-height: 52px;
    margin-bottom: 50px;
    text-align: center;
    position: relative;
  }
  &-title {
    display: inline-block;
    font-size: 26px;
  }
  &-features {
    width: 1200px;
    margin: 0 auto 90px;
  }
  &-cases {
    width: 1200px;
    margin: 0 auto 90px;
  }
}
.doc-content-index {
  display: flex;
  height: 926px;
  margin-bottom: 70px;
  background-color: #070505;
  min-width: 1200px;
  .content-left {
    padding: 15% 0 0 8.8%;
    // margin: auto 0;
    flex: 1;
    min-width: 550px;
    .content-title {
      // line-height: 36px;
      font-size: 42px;
      color: rgba(255, 255, 255, 1);
    }
    .content-smile {
      margin-top: 10px;
      width: 44px;
      height: 17px;
      background: url(https://storage.360buyimg.com/imgtools/09516173b9-9b32b9d0-3864-11eb-9a56-0104487ad2b0.png)
        no-repeat;
      background-size: cover;
    }
    .content-subTitle {
      margin-top: 12px;
      font-size: 20px;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
