<template>
  <v-row>
    <v-col class="text-start" align-self="start" cols=12>
      <MoleculeTopic number="04" text="Meus projetos"/>
    </v-col>
    
    <MoleculeProject class="project"
      v-for="project in projects"
     :key="project.title" :project="project"/>
    
  </v-row>
</template>

<script>

import MoleculeTopic from "../molecules/MoleculeTopic.vue"
import MoleculeProject from "../molecules/MoleculeProject.vue"
export default {
  components:{
    MoleculeTopic,
    MoleculeProject
  },
  data: () => ({
    //
    projects: [
      {
        title:'Node',
        description: "Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz ",
        img: 'http://sadasdasdsa'
      },
      {
        title:'Node1',
        description: "Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz ",
        img: 'http://sadasdasdsa'
      },
      {
        title:'Node2',
        description: "Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz ",
        img: 'http://sadasdasdsa'
      },
    ],
  }),
  async created(){
    console.log("Criando componente about");
  },
  
};
</script>
<style scoped>
.project{
  margin: 100px 50px; 
  /* background: red; */
}
</style>
