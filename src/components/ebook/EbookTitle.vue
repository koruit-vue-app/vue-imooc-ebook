<template>
  <transition name="slide-down">
    <div class="title-wrapper" v-show="this.menuVisible">
      <div class="left" @click="back">
        <span class="icon-back"></span>
      </div>
      <div class="right">
        <div class="icon-wrapper">
          <span class="icon-shelf"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-cart"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-more"></span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '@/utils/mixin'

  export default {
    mixins: [ebookMixin],
    methods: {
      back () {
        console.log('back')
      }
    },

  }

</script>

<style lang='scss' scoped>

  @import "src/assets/styles/global";

  .title-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 101;
    display: flex;
    width: 100%;
    height: 13.33vw;
    background: white;
    box-shadow: 0 2.22vw 2.22vw rgba(0, 0, 0, .15);

    .left {
      font-size: 5.56vw;
      padding: 0 4.17vw;
      @include center;
    }

    .right {
      flex: 1;
      display: flex;
      justify-content: flex-end;

      .icon-wrapper {
        flex: 0 0 11.11vw;
        /*min-width: 11.11vw;*/
        @include center;

        span {
          font-size: 5.56vw;
        }
      }
    }
  }
</style>
