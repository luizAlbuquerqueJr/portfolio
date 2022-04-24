<template>
  <div class="box text-center">
    <h3 class="text-color-primary">{{text}}</h3>
  </div>
    
</template>

<script>
import utils from '../../utils/index'
  export default {
    props:{
      text: {
        type: String,
        default: ''
      }
    },
    methods : {
      goToTarget(id){
        if(id){
          utils.amplitudeEmit({eventType:`user clicked to ${id}`})
          const options = {
            duration: 1000,
          }
          this.$vuetify.goTo(id, options)
        }
      }
    }
  }
</script>
<style scoped>
  .box{
    width: clamp(100px, 26.6666vw, 150px);
    background-color: #8692af;
    border-radius: 20px;
  }
  .box:hover{
    background-color: transparent;
    /* box-shadow: 2px #30d2b9 !important; */
    box-shadow: 0 0 0 2px #30d2b9;
    /* border: 1px solid #30d2b9 */
  }
  .text-color-primary{
    color: #30d2b9;
    font-size: clamp(15px,4vw,18px);
  }

  .link-text {
    color: #8692af;
    font-family: 'SF-Mono';
  }

  .link-text:hover{
    color: #30d2b9;
  }
</style>