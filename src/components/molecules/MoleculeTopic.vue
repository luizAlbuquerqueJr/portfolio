<template>
  <v-row no-gutters>
    <h2 class="topicFontSize secondaryColor topicText bg-themePrimaryColor">{{number}}</h2>
    <h2 class="topicFontSize highlightedColor topicText bg-themePrimaryColor px-5" >{{text}}</h2>
    <div class="topicLine"></div>
    
  </v-row>
</template>

<script>
  export default {
    props:{
      number: {
        type: String,
        default: ''
      },
      text: {
        type: String,
        default: ''
      }
    },
  }
</script>
<style scoped>
.topicFontSize {
  /* width: fit-content; */
  font-size:32px;
}
.topicText{
  font-size:32px;
  width: fit-content;
  height: 100%;
  display: inline;
}
.topicLine{
  width: 100%;
  height: 1px;
  background-color:#233552
}

</style>