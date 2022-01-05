<template>
  <div class="header">
    <ul>
      <li>SKY WEATHER.</li>
      <li><a href="/"> Home</a></li>
      <li><a href="/download"> Download</a></li>
    </ul>
  </div>
</template>

<style lang="scss">
.header {
  background: rgb(124, 194, 252);
  opacity: 0.4;
  min-height: 50px;
  min-width: 100%;
  display: flex;
  & ul {
    display: flex;
    justify-content: space-around;
    min-width: 100%;
    align-items: center;
    & a {
      color: white;
      &:hover {
        color: rgb(0, 204, 255);
        text-shadow: 2px 1px blue;
        border-bottom: 2px solid blue;
        transition: 0.25s ease;
      }
    }
  }
}
</style>