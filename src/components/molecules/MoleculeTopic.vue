<template>
  <v-row no-gutters v-intersect.once="onIntersect">
    <h2 class="topicFontSize secondaryColor topicText bg-themePrimaryColor">{{number}}</h2>
    <h2 class="topicFontSize highlightedColor topicText bg-themePrimaryColor px-5" >{{text}}</h2>
  </v-row>
</template>

<script>
  import utils from "../../utils/index.js"
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
    methods: {
      onIntersect(entries, observer, isIntersect){
        if(isIntersect){
          utils.amplitudeEmit({eventType:`user viewed ${this.text}`})
        }
      }
    }
  }
</script>
<style>
.topicLine{
  width: 100%;
  height: 1px;
  background-color:#233552
}
</style>
<style scoped>
.topicText{
  font-size: clamp(20px, 5.333vw, 32px);
  width: fit-content;
  height: 100%;
  display: inline;
}
/* .topicLine{
  width: 100%;
  height: 1px;
  background-color:#233552
} */
</style>