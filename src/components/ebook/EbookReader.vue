<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
  import { ebookMixin } from '@/utils/mixin'
  import Epub from 'epubjs'
  import { setFontFamily, getFontFamily, setFontSize, getFontSize } from '../../utils/localStorage'

  global.epub = Epub
  export default {
    name: 'EbookReader',
    mixins: [ebookMixin],
    methods: {
      getUrlOfBook () {
        let filename = this.$route.params.filename.split('|').join('/')
        this.setFileName(filename).then(() => {
          this.initEpubReader()
        })
      },
      /**
       *初始化
       */
      initEpubReader () {
        let baseUrl = 'http://211.149.164.87:82/epub/'
        let bookUrl = `${baseUrl}${this.fileName}.epub`
        this.book = new Epub(bookUrl)
        this.setCurrentBook(this.book)
        this.render = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default',
          manager: 'continuous'
        })

        this.render.display().then(() => {
          this.initFontFamily()
          this.initFontSize()
        })
        this.render.on('touchstart', event => {
          this.startX = event.changedTouches[0].clientX
          this.startTime = event.timeStamp
        })

        this.render.on('touchend', event => {
          this.endX = event.changedTouches[0].clientX
          this.endTime = event.timeStamp
          let offsetX = this.endX - this.startX
          let timeOffset = this.endTime - this.startTime
          console.log(offsetX, timeOffset)

          if (timeOffset < 500 && offsetX > 40) {
            this.prevPage()
          } else if (timeOffset < 500 && offsetX < -40) {
            this.nextPage()
          } else {
            this.toggleMenuAndTitle()
          }
          event.preventDefault()
          event.stopPropagation()
        })
        this.render.hooks.content.register(contents => {

          Promise.all([
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/cabin.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/daysOne.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/montserrat.css`),
            contents.addStylesheet(`${process.env.VUE_APP_RES_URL}/fonts/tangerine.css`)
          ]).then(() => {
            console.log('字体全部加载完毕')
          })

        })
        console.log(bookUrl)
      },

      initFontFamily () {
        let fontFamily = getFontFamily(this.fileName)
        if (!fontFamily) {
          fontFamily = this.defaultFontFamily
        }
        setFontFamily(this.fileName, fontFamily)
        this.setDefaultFontFamily(fontFamily)
        this.currentBook.rendition.themes.font(fontFamily)
      },

      initFontSize(){
        let fontSize = getFontSize(this.fileName)
        if (!fontSize) {
          fontSize = this.defaultFontSize
        }
        setFontSize(this.fileName, fontSize)
        this.setDefaultFontSize(fontSize)
        this.currentBook.rendition.themes.fontSize(`${fontSize}px`)

      },
      prevPage () {
        console.log('上一页')
        if (this.render) {
          this.render.prev()
        }
        if (this.menuVisible) {
          this.hideMenuAndTitle()
        }
      },
      nextPage () {
        console.log('下一页')
        if (this.render) {
          this.render.next()
        }
        if (this.menuVisible) {
          this.hideMenuAndTitle()
        }
      },
      toggleMenuAndTitle () {
        console.log('显示菜单和头')
        this.setMenuVisible(!this.menuVisible)
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
      },
      hideMenuAndTitle () {
        this.setMenuVisible(false)
        this.setSettingVisible(-1)
        this.setFontFamilyVisible(false)
      }
    },
    mounted () {
      this.getUrlOfBook()
    },

  }
</script>

<style lang="less" scoped>

</style>
