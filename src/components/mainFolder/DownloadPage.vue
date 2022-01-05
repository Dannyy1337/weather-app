<template>
  <div class="wrapper">
    <my-header />
    <div class="main">
      <div class="main_text-area">
        <h1>
          Get <br />
          the most <br />
          accurate weather <br />
          forecasts app.
        </h1>
        <button class="download-btn">Download</button>
      </div>
      <div class="main_img-area">
        <img src="../../assets/phone.png" alt="" />
      </div>
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyHeader from "./MyHeader.vue";
import MyFooter from "./MyFooter.vue";

export default {
  components: {
    MyHeader,
    MyFooter,
  },
};
</script>

<style lang="scss">
@import "./scss/adaptive.scss";

.main_text-area {
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.download-btn {
  margin-top: 30px;
  font-size: 30px;
  width: 200px;
}
.main_img-area {
  img {
    width: 240px;
    margin: 40px 0;
  }
}
</style>