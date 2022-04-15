<template>
    <a class="text-color-primary" @click="goToTarget(goTo)">{{number}}.
        <a class="link-text ml-1">{{text}}</a>
    </a>
</template>

<script>
  export default {
    props:{
      number: {
        type: String,
        default: "1"
      },
      text: {
        type: String,
        default: ''
      },
      goTo:{
        type: String,
        default: ''
      }
    },
    methods : {
      goToTarget(id){
        const options = {
          duration: 1000,
        }
        this.$vuetify.goTo(id, options)
      }
    }
  }
</script>
<style scoped>
  .text-color-primary{
    color: #30d2b9
  }

  .link-text {
    color: #8692af;
    font-family: 'SF-Mono';
  }

  .link-text:hover{
    color: #30d2b9;
  }
</style>