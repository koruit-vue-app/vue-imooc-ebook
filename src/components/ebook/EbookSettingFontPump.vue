<template>
  <transition name="popup-slide-up">
    <div class="font-setting-list" v-show="fontFamilyVisible">
      <div class="font-setting-list-title">
        <div class="font-title-icon" @click="hide">
          <span class="icon-down2"></span>
        </div>
        <span class="font-title-text">{{ $t('book.selectFont')}}</span>
      </div>
      <div class="font-setting-list-wrapper">
        <div class="ebook-popup-item" v-for="(item,index) in fontFamilyList" :key="index"
             @click="fontFamilyClick(item)">
          <div class="ebook-pipup-item-text" :class="{'selected':isSelected(item)}">{{item.font}}</div>
          <div class="ebook-popup-item-icon" v-show="isSelected(item)">
            <span class="icon-check"></span>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import { FONT_FAMILY_LIST } from '../../utils/book'
  import {setFontFamily} from '../../utils/localStorage'

  export default {
    name: 'EbookSettingFontPump',
    mixins: [ebookMixin],
    data () {
      return {
        fontFamilyList: FONT_FAMILY_LIST
      }
    },
    methods: {
      hide () {
        this.setFontFamilyVisible(false)
      },
      isSelected (item) {
        return item.font === this.defaultFontFamily
      },
      fontFamilyClick (item) {
        this.setDefaultFontFamily(item.font)
        this.currentBook.rendition.themes.font(item.font)
        setFontFamily(this.fileName,item.font)
      }
    },
    mounted () {

    }
  }
</script>

<style lang="scss" scoped>
  @import "src/assets/styles/mixin";

  .font-setting-list {
    background-color: white;
    position: absolute;
    z-index: 300;
    width: 100%;
    bottom: 0;
    left: 0;
    box-shadow: 0 -1.11vw 1.67vw rgba(0, 0, 0, .1);

    .font-setting-list-title {
      position: relative;
      padding: 4.17vw;
      box-sizing: border-box;
      text-align: center;
      border-bottom: 0.28vw solid #b8b9bb;
      @include center;

      .font-title-icon {
        position: absolute;
        left: 4.17vw;
        top: 0;
        height: 100%;
        font-size: 4.44vw;
        font-weight: bold;
        @include center;
      }

      .font-title-text {
        @include center;
        font-size: 3.89vw;
      }
    }

    .font-setting-list-wrapper {
      .ebook-popup-item {
        display: flex;
        padding: 2.78vw;

        .ebook-pipup-item-text {
          flex: 1;
          text-align: left;
          font-size: 3.89vw;
          /*表示与item-text平级*/
          &.selected {
            color: #346cb9;
            font-weight: bold;
          }
        }

        .ebook-popup-item-icon {
          flex: 1;
          text-align: right;
          font-size: 3.89vw;
          font-weight: bold;
          color: #346cb9;

        }
      }
    }
  }
</style>
