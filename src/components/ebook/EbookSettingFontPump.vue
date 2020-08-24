<template>
  <div class="font-setting-list" v-show="fontFamilyVisible">
    <div class="font-setting-list-title">
      <div class="font-title-icon" @click="hide">
        <span class="icon-down2"></span>
      </div>
      <span class="font-title-text">选择字体</span>
    </div>
    <div class="font-setting-list-wrapper">

    </div>
  </div>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'

  export default {
    name: 'EbookSettingFontPump',
    mixins: [ebookMixin],
    methods: {
      hide () {
        console.log('hide')
        this.setFontFamilyVisible(false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .font-setting-list {
    .font-setting-list-title {
      .font-title-icon {
      }

      .font-title-text {
      }
    }

    .font-setting-list-wrapper {
    }
  }
</style>
