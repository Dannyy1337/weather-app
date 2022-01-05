<template>
  <div class="wrapper">
    <my-header />
    <div class="main">
      <div class="text-area">
        <h1>
          Weather of any city <br />
          in Ukraine <br />
          in your device
        </h1>
      </div>

      <ul>
        <li>
          <my-card />
        </li>
      </ul>
    </div>
    <my-footer />
  </div>
</template>

<script>
import MyCard from "./MyCard.vue";
import MyHeader from "./MyHeader.vue";
import MyFooter from "./MyFooter.vue";

export default {
  data() {
    return {};
  },
  components: {
    MyCard,
    MyHeader,
    MyFooter,
  },
  methods: {},
};
</script>

<style lang="scss">
@import "./scss/adaptive.scss";
@import "./scss/nullstyle.scss";
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap");

.wrapper {
  min-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  background: url("../../assets/back.jpg") no-repeat center;
  background-size: cover;
  min-height: 100vh;
  font-family: "Noto Sans", sans-serif;
  color: white;

  & .main {
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: 100%;
    min-height: 100%;
    flex-wrap: wrap;
    & h1 {
      font-size: 50px;
    }
    & ul {
      min-height: 450px;
      margin-top: 100px;
    }
  }
  button {
    color: white;
    background: rgba(79, 199, 255, 0.3);
    padding: 5px;
    border: 2.5px solid white;
    border-radius: 10px;
    &:hover {
      background: rgba(79, 199, 255);
      text-shadow: 2px 1px rgba(0, 0, 255, 0.5);
      transition: 0.4s ease;
      border: 2.5px solid rgba(0, 0, 255, 0.2);
    }
  }
}
</style>