<template>
  <div class="footer">
    <a href="#"><img src="../../assets/social/teleg.png" alt="" /></a>
    <a href="#"><img src="../../assets/social/inst.png" alt="" /></a>
    <a href="#"><img src="../../assets/social/link.png" alt="" /></a>
  </div>
</template>

<style lang="scss">
.footer {
  background: rgb(124, 194, 252);
  opacity: 0.4;
  min-height: 50px;
  min-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40%;
  height: 20px;
  & a {
    margin-left: 10px;
    display: flex;
    justify-content: center;

    border: 2px solid rgb(70, 212, 255);

    border-radius: 50%;
    &:hover {
      border: 2px solid white;
      background: white;
      & img {
        width: 31px;
        height: 31px;
        transition: 0.2s ease;
      }
    }
    & img {
      width: 30px;
      height: 30px;
      color: blue;
    }
  }
}
</style>