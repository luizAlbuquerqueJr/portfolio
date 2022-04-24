<template>
  <v-row no-gutters class="mx-0" justify="center">
    <v-col xs=10 sm=10 md="6" class="mt-0">
      
        <h1 class='highlightedColor projectCardTitle text-center pa-1'>{{project.title}}</h1>
        <p class='highlightedColor pt-5 pl-7'> {{project.description}}</p>
        <p v-if="project.link" @click="openLink(project.link)" class='secondary--text mb-0 pb-0 pl-7 cursorPoint'> Link para os resultados <v-icon small color="#00d3b9" class="ml-2"> mdi-open-in-new </v-icon></p>
        <p v-if="project.repositoryLink" @click="openLink(project.repositoryLink)" class='secondary--text mb-0 pb-0 pl-7 cursorPoint'> Link para o repositório <v-icon small color="#00d3b9" class="ml-2"> mdi-open-in-new </v-icon></p>
    
    </v-col>
    <v-col xs=12 sm=12 md="6" class="centerItem mt-6 mt-md-0">
      <MoleculeLaptop :imageURL="project.imageURL"/>
    </v-col>
  </v-row>
</template>

<script>
import utils from "../../utils/index.js"
import MoleculeLaptop from "../molecules/MoleculeLaptop.vue"
  export default {
  props:{
    project: {
      type: Object
    },
  },
  components:{
      MoleculeLaptop
  },
  methods:{
    openLink(link){
      utils.openLink(link)
    }
  },
  data: () => ({
  })
};
</script>
<style scoped>
.projectCardTitle{
  /* border: 1px solid #00d3b9 */
  
}
.centerItem{
    display: flex;
    justify-content: center;
  }

</style>