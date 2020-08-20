<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
  import { ebookMixin } from '@/utils/mixin'
  import Epub from 'epubjs'

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
        this.render = this.book.renderTo('read', {
          width: innerWidth,
          height: innerHeight,
          method: 'default',
          manager: 'continuous'
        })
        this.render.display()
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
        console.log(bookUrl)
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
      },
      hideMenuAndTitle () {
        this.setMenuVisible( false)
      }
    },
    mounted () {
      this.getUrlOfBook()
    },

  }
</script>

<style lang="less" scoped>

</style>
