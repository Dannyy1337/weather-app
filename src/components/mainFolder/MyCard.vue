<template>
  <div class="card">
    <div class="card-content">
      <h2>{{ cityUrl | upperCase }}</h2>
      <p>{{ country }}</p>
      <img :src="imgUrl" alt="" />
      <p>{{ temp }}&deg;</p>
      <p>{{ description | upperCase }}</p>
      <button class="show-btn" @click="isActive = !isActive">
        {{ changeBtnText }}
      </button>
      <div class="card-content_btn" v-show="isActive">
        <div class="button-area">
          <button
            @click="changeCity(cityKyiv), intervalData($event)"
            @close="isActive = !isActive"
          >
            Kyiv
          </button>
          <button @click="changeCity(cityLviv), intervalData($event)">
            Lviv
          </button>
          <button @click="changeCity(cityKharkiv), intervalData($event)">
            Kharkiv
          </button>
          <button @click="changeCity(cityOdessa), intervalData($event)">
            Odessa
          </button>
        </div>
        <span>
          <button class="close-btn" @click="isActive = !isActive">X</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      temp: "",
      city: "",
      icon: "",
      country: "",
      description: "",
      cityUrl: "Odessa",
      interval: 100,
      cityKyiv: "Kyiv",
      cityLviv: "Lviv",
      cityKharkiv: "Kharkiv",
      cityOdessa: "Odessa",
      isActive: false,
    };
  },
  computed: {
    imgUrl() {
      return "https://www.weatherbit.io/static/img/icons/" + this.icon + `.png`;
    },
    changeBtnText() {
      if (this.isActive) {
        return "Close window";
      } else {
        return "Show all cities";
      }
    },
  },
  filters: {
    upperCase(value) {
      return value.toUpperCase();
    },
  },
  methods: {
    changeCity(value) {
      this.cityUrl = value;
      console.log(this.cityUrl);
    },
    callApi() {
      axios
        .get(
          `https://api.weatherbit.io/v2.0/current?&city=${this.cityUrl}&country=Ukraine&key=616fc4d3cc9941879a06ce3932b50f69&include=minutely`
        )
        .then((response) => {
          (this.temp = response.data.minutely[59].temp),
            (this.city = response.data.data[0].city_name),
            (this.icon = response.data.data[0].weather.icon),
            (this.country = response.data.data[0].country_code),
            (this.description = response.data.data[0].weather.description);
        })
        .catch((error) => {
          console.error(error);
        });
    },
    intervalData() {
      setTimeout(() => this.callApi(), 1000);
      console.log("timeout");
    },
  },
  mounted() {
    this.callApi();
  },
};
</script>

<style lang="scss">
@import "./scss/adaptive.scss";

.card {
  min-width: 300px;
  min-height: 300px;
  display: flex;
  justify-content: center;
  &-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    min-height: 300px;
    min-width: 223.26px;
    padding: 10px;
    border: 2.5px solid white;
    border-radius: 30px;
    background: rgba(79, 199, 255, 0.5);
    & img {
      width: 70px;
    }
    p {
      margin: 5px;
    }
    & button {
      margin-top: 20px;
    }
    &_btn {
      display: flex;
      flex-wrap: wrap;
      position: absolute;
      background: rgba(79, 199, 255, 0.88);
      border: 1px solid rgba(255, 255, 255, 0.295);
      border-radius: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
      top: 63%;
      box-shadow: 2px 1px rgba(0, 0, 0, 0.308);
      & button {
        width: 40%;
        margin: 10px;
        margin-bottom: 0px;
      }
      & span {
        margin-left: -30px;
        margin-top: -7px;
        & .close-btn {
          font-size: 12px;
          padding: 0px 0px;
          border: none;
          text-shadow: 1px 1px rgba(0, 0, 0, 0.608);
          &:hover{
            border: none;
          }
        }
      }
    }
  }
}
</style>
