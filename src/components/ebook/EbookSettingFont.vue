<template>
  <div>
    <transition name="slide-up">
      <div class="setting-wrapper" v-show="menuVisible && settingVisible===0">
        <div class="setting-font-size">
          <div class="preview" :style="{fontSize: fontSizeList[0].fontSize + 'px'}">A</div>
          <div class="select">
            <div class="select-wrapper" v-for="(item, index) in fontSizeList" :key="index"
                 @click="setFontSize(item.fontSize)">
              <div class="line"></div>
              <div class="point-wrapper">
                <div class="point" v-show="defaultFontSize === item.fontSize">
                  <div class="small-point"></div>
                </div>
              </div>
              <div class="line"></div>
            </div>
          </div>
          <div class="preview" :style="{fontSize: fontSizeList[fontSizeList.length - 1].fontSize + 'px'}">A</div>
        </div>
        <div class="setting-font-family" @click="showFontFamilyPopup">
          <div class="setting-font-family-text-wrapper">
            <span class="setting-font-family-text">{{this.defaultFontFamily}}</span>
          </div>
          <div class="setting-font-family-icon-wrapper">
            <span class="icon-forward"></span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
  import { ebookMixin } from '../../utils/mixin'
  import { FONT_SIZE_LIST } from '../../utils/book'

  export default {
    name: 'EbookSettingFont',
    mixins: [ebookMixin],
    data () {
      return {
        fontSizeList: FONT_SIZE_LIST
      }
    },
    methods: {
      setFontSize (fontSize) {
        console.log(fontSize)
        this.setDefaultFontSize(fontSize)
        this.currentBook.rendition.themes.fontSize(`${fontSize}px`)
      },
      showFontFamilyPopup(){
       this.setFontFamilyVisible(true)
        console.log('showFontFamilyPopup')
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import 'src/assets/styles/global';

  .setting-wrapper {
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 13.33vw;
    left: 0;
    z-index: 101;
    width: 100%;
    height: 25vw;
    background: white;
    box-shadow: 0 -2.22vw 2.22vw rgba(0, 0, 0, .15);


    .setting-font-size {
      flex: 2;
      display: flex;
      height: 100%;

      .preview {
        flex: 0 0 11.11vw;
        @include center;
      }

      .select {
        display: flex;
        flex: 1;

        .select-wrapper {
          flex: 1;
          display: flex;
          align-items: center;

          &:first-child {
            .line {
              &:first-child {
                border-top: none;
              }
            }
          }

          &:last-child {
            .line {
              &:last-child {
                border-top: none;
              }
            }
          }

          .line {
            flex: 1;
            height: 0;
            border-top: 0.28vw solid #ccc;
          }

          .point-wrapper {
            position: relative;
            flex: 0 0 0;
            width: 0;
            height: 1.94vw;
            border-left: 0.28vw solid #ccc;

            .point {
              position: absolute;
              top: -2.22vw;
              left: -2.78vw;
              width: 5.56vw;
              height: 5.56vw;
              border-radius: 50%;
              background: white;
              border: px2rem(1) solid #ccc;
              box-shadow: 0 1.11vw 1.11vw rgba(0, 0, 0, .15);
              @include center;

              .small-point {
                width: 1.39vw;
                height: 1.39vw;
                background: black;
                border-radius: 50%;
              }
            }
          }
        }
      }
    }

    .setting-font-family {
      flex: 1;
      font-size: 3.89vw;
      @include center;

      .setting-font-family-text-wrapper {
        @include center
      }

      .setting-font-family-icon-wrapper {
        @include center
      }
    }
  }

</style>
