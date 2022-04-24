<template>
  <v-row no-gutters class="mx-0 mb-5" justify="start">
    <v-col cols="12">
        <h2 class="text-center mb-2 highlightedColor" >{{name}}</h2>
        <div class="topicLine mb-4"></div>
        <v-row align-content="center" justify="center">
          <AtomsBox class="ma-2"
            v-for="(tool, i) in tools"
            :key="i" 
            :text="tool.title"
          />
        </v-row>
      </v-col>
  </v-row>
</template>

<script>
import AtomsBox from "../atoms/AtomsBox.vue"
  export default {
  props:{
      name: {
          type: String
      },
      tools: {
        type: Array
      },
  },
  components:{
      AtomsBox
  },
  data: () => ({
  }),
  
};
</script>
<style scoped>
.centerItem{
  display: flex;
  justify-content: center;
}
</style>