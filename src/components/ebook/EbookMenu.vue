<template>
  <div>
    <transition name="slide-up">
      <div class="menu-wrapper" :class="{'hide-box-shadow': !menuVisible || settingVisible>=0}"
           v-show="menuVisible">
        <div class="icon-wrapper">
          <span class="icon-menu " @click="showSetting(3)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-progress " @click="showSetting(2)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-bright " @click="showSetting(1)"></span>
        </div>
        <div class="icon-wrapper">
          <span class="icon-A" @click="showSetting(0)"></span>
        </div>
      </div>
    </transition>
    <ebook-setting-font></ebook-setting-font>
    <ebook-setting-font-pump></ebook-setting-font-pump>

  </div>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import EbookSettingFont from './EbookSettingFont'
  import EbookSettingFontPump from './EbookSettingFontPump'

  export default {
    name: 'EbookMenu',
    components: { EbookSettingFontPump, EbookSettingFont },
    mixins: [ebookMixin],
    methods: {
      showSetting (value) {
        console.log(value)
        this.setSettingVisible(value)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/global";

  .menu-wrapper {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 102;
    display: flex;
    width: 100%;
    height: 13.33vw;
    background: white;
    box-shadow: 0 -2.22vw 2.22vw rgba(0, 0, 0, .15);

    &.hide-box-shadow {
      box-shadow: none;
    }

    .icon-wrapper {
      flex: 1;
      @include center;

      .icon-progress {
        font-size: 6.67vw;
      }

      .icon-bright {
        font-size: 6.11vw;
      }
    }
  }


</style>
