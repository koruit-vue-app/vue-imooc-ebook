<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      |
      <router-link to="/about">About</router-link>
      <span class="text">ABCDEFGHIJKLMN</span>
      <span class="test">測試px to rem</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
  export default {
    mounted () {
      this.$store.dispatch('setTest',10).then(()=>{
        console.log(this.$store.state.book.test)
      })
    }
  }
</script>

<style lang="scss">
  @import "assets/styles/global";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }


  .text {
    font-family: "Axure Handwriting";
    font-size: 5.56vw;
  }

  .test {
    font-size: px2rem(20);
    color: #42b983;
  }


</style>
