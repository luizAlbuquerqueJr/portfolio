<template>
  <v-row >
      <v-col class="text-start" align-self="start" cols=12>
        <MoleculeTopic number="02" text="Minhas ferramentas"/>
      </v-col>
      <v-col cols="12">
        <MoleculeTools name="Front-end" :tools="toolsFrontEnd"/>
        <MoleculeTools class="my-10" name="Back-end" :tools="toolsBackEnd"/>
        <MoleculeTools class="my-10" name="Ciência dos dados e Inteligência Artificial" :tools="toolsIA"/>
        <MoleculeTools class="my-10" name="Sistemas Embarcados" :tools="toolsEmbedded"/>
        <MoleculeTools class="my-10" name="Testes" :tools="toolsTests"/>
      </v-col>
        
  </v-row>
</template>

<script>
import MoleculeTopic from "../molecules/MoleculeTopic.vue"
import MoleculeTools from "../molecules/MoleculeTools.vue"
export default {
  components:{
    MoleculeTopic,
    MoleculeTools
  },
  data () {
      return {
        toolsTests: [
          {
            title:" Mocha js"
          },
          {
            title:" Sinon"
          },
        ],
        toolsBackEnd: [
          {
            title:'Node',
          },
          {
            title:'NestJS',
          },
          {
            title:'TypeScript',
          },
          {
            title:'Python 3',
          },
          {
            title:'Sequelize',
          },
          {
            title:'MYSQL',
          },
          {
            title:'Firebase',
          },
        ],
        toolsEmbedded: [
          {
            title:'Arduino',
          },
          {
            title:'Raspberry',
          },
          {
            title:'C++'
          },
          {
            title:'Sigfox'
          },
        ],
        toolsIA : [
          {
            title:'Python'
          },
          {
            title:'SK Learn'
          },
          {
            title:'Pandas'
          },
          {
            title:'Keras'
          },
          {
            title:'Numpy'
          }
        ],
        toolsFrontEnd: [
          {
            title:'Vue'
          },
          {
            title:'Vuetify'
          },
          {
            title:'Cordova'
          },
          {
            title:'React'
          },
          {
            title:'JavaScript'
          },
          {
            title:'CSS'
          },
          {
            title:'HTML'
          },
        ],
        text: 'Lorem ipsum',
      }
  }
};
</script>

<style scoped>
  
.active-item{
  background-color: black;
}
  
</style>

