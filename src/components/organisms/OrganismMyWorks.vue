<template>
  <v-row>
    <v-col class="text-start" align-self="start" cols=12>
      <MoleculeTopic number="03" text="Lugares que já trabalhei"/>
    </v-col>
    <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(work, i) in works"
      :key="i"
      color="secondary"
      small
      light
    >
      <template v-slot:opposite>
        <span
          :class="`headline font-weight-bold secondary--text`"
          v-text="work.startTime"
        ></span>
      </template>
      <div class="py-4">
        <v-card class="bg-primaryColor pa-2" >
          <h2 :class="`headline font-weight-light mb-4 secondary--text text-center`">
            {{work.company}}
          </h2>
          <div class="highlightedColor">
            <MoleculeWorkDescription :description="work.text"/>
            <!-- {{work.text}} -->
          </div>
        </v-card>
      </div>
    </v-timeline-item>
  </v-timeline>
  </v-row>
</template>


<script>
import MoleculeTopic from "../molecules/MoleculeTopic.vue"
import MoleculeWorkDescription from "../molecules/MoleculeWorkDescription.vue"
export default {
  components:{
  MoleculeTopic,
  MoleculeWorkDescription
},
  data: () => ({
    works:[
      {
        company: "GEMU",
        text: [],
        startTime: '2 de Novembro de 2022',
        endTime: '2 de Novembro de 2022',
        link: 'www.google.com'
      },
      {
        company: "Beyond Co",
        text: [
          "Atualmente estou trabalhando em um projeto chamado <i>Marketplace</i>. Esse projeto permite o compartilhamento de uma extensão (telas web) entre organizações parceiras.",
          "Usamos <i>Git Hub</i>, <i>Vue</i>, <i>Node</i>, <i>Sequelize</i> e meotodologia <i>SCRUM</i> para organizar nossas atividades"
          ],
        startTime: '2 de Novembro de 2022',
        endTime: '2 de Novembro de 2022',
        link: 'www.google.com'
      },
      {
        company: "LIVE",
        text: [
          "Atualmente estou trabalhando em um projeto chamado Marketplace. Esse projeto permite o compartilhamento de uma extensão (telas web) entre organizações parceiras.",
          "Usamos Git Hub, Vue, Node, Sequelize e meotodologia SCRUM para organizar nossas tasks"

          ],
        startTime: '2 de Novembro de 2022',
        endTime: '2 de Novembro de 2022',
        link: 'www.google.com'
      },
      {
        company: "IFPE",
        text: [
          "Atualmente estou trabalhando em um projeto chamado Marketplace. Esse projeto permite o compartilhamento de uma extensão (telas web) entre organizações parceiras.",
          "Usamos Git Hub, Vue, Node, Sequelize e meotodologia SCRUM para organizar nossas tasks"

          ],
        startTime: '2 de Novembro de 2022',
        endTime: '2 de Novembro de 2022',
        link: 'www.google.com'
      }
    ],
    years: [
      {
        color: 'cyan',
        year: '1960',
      },
      {
        color: 'green',
        year: '1970',
      },
      {
        color: 'pink',
        year: '1980',
      },
      {
        color: 'amber',
        year: '1990',
      },
      {
        color: 'orange',
        year: '2000',
      },
    ],
  }),
}
</script>
<style scoped>
.theme--light.v-timeline:before {
    background: #cad7f5;
}
</style>
