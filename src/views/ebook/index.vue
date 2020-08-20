<template>
    <div>
      <title-bar></title-bar>
      <ebook-reader></ebook-reader>
    </div>
</template>

<script>
  import EbookReader from '../../components/ebook/EbookReader'
  import TitleBar from '../../components/ebook/TitleBar'
  export default {
    name: 'index',
    components: { TitleBar, EbookReader }
  }
</script>

<style lang="scss" scoped>

</style>
