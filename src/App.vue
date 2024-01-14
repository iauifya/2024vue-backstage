<script setup>
// import HelloWorld from "./components/HelloWorld.vue";
import WatchTest from "./components/watchTest.vue";
import Parent from "./components/Parent.vue";
import { ref } from 'vue';
const toggle = ref(true);

function faClose(){
  console.log('click');
  toggle.value = !toggle.value;
}
</script>

<template>
  <div class="mask open" v-if='toggle'>
    <div class="modal">
      <div class="imgExit" @click="faClose()">
        x
      </div>
      <h3 class="mt-2">區域性障礙通知</h3>
      <hr />
      <div class="contentItem">
        <div class="content row">
          <div class="col-12 col-md-6">
            <img src="" alt="" />
          </div>
          <div class="col-12 col-md-6">
            <p class="text">
              親愛的用戶您好，
              因外面線路有臨時性的故障，造成部分路段電視頻道及網路無法使用，工程已在緊急搶修中，造成您的不便敬請見諒!
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <button class="btn" @click="faClose()">打開modal</button>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
  <WatchTest />
  <Parent />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.mask.open {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;
  background: #333;
}
@media (max-width: 912px) {
  .mask.open .modal {
    width: 80% !important;
    max-height: 35vh !important;
 }
}
@media (max-width: 540px) {
  .mask.open .modal {
    width: 90% !important;
    max-height: 63vh !important;
 }
}
.mask.open .modal {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-flow: column nowrap;
  margin-top: 150px;
  width: 55%;
  max-height: 62vh;
  border-radius: 8px;
  background-color: #fbfbfb;
  padding: 2rem;
  text-align: center;
}
.mask.open .modal .imgExit {
  position: absolute;
  top: 5%;
  right: 5%;
  cursor: pointer;
}
.mask.open .modal .imgExit img {
  width: 44px;
  height: 44px;
}
.mask.open .modal h3 {
  font-weight: 600;
}
.mask.open .modal hr {
  margin-top: 18px;
  margin-bottom: 4px;
  width: 100%;
}
.mask.open .modal .contentItem {
  overflow-y: scroll;
  overflow-x: hidden;
}
.mask.open .modal .content {
  text-align: left;
  padding: 1rem;
}
.mask.open .modal .content img {
  width: 80%;
  display: block;
  margin: 0 auto;
}
.mask.open .modal .content .text {
  line-height: 1.5;
  font-size: 18px;
  text-align: justify;
  margin-top: 3rem;
  margin-right: 2rem;
  margin-left: -2rem;
}
@media (max-width: 540px) {
  .mask.open .modal .content .text {
    margin: 1rem;
 }
}
.mask.open .modal .btnBox .btn {
  margin: 0.5rem;
}

</style>
