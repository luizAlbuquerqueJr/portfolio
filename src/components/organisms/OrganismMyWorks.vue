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
          <div>
            <h2 @click="openLink(work.link)" :class="`headline font-weight-light mb-n1 secondary--text text-center cursorPoint` ">
              {{work.company}}
            </h2>
            <span
              style="display:block; font-size: clamp(10px, 4vw, 18px);"
              class='mb-4 secondary--text text-center'
            >
              {{work.startTime}} - {{work.endTime}}
            </span>
          </div>
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
import utils from "../../utils/index.js"
export default {
  components:{
  MoleculeTopic,
  MoleculeWorkDescription
},
  data: () => ({
    works:[
      {
        company: "Beyond Co",
        text: [
          "Promovido ao cargo Cloud Developer",
          "Atualmente estou trabalhando em um projeto chamado <i>Marketplace</i>. Esse projeto permite o compartilhamento de uma extensão (telas web) entre organizações parceiras.",
          ],
        startTime: 'Março de 2022',
        endTime: 'Atualmente',
        link: 'https://beyondcompany.com.br/'
      },
      {
        company: "GEMU",
        text: [
          "Responśavel por criar algumas telas das plataformas #link#Ranker|https://rankers.gg/#link# e #link#GEMU|https://gemu.app#link#.",
          "As tecnologias utilizadas foram <i>Vue</i>, <i>Figma</i>, <i>Graphql</i> <i>GitKraken</i> e <i>AWS service</i>."
          ],
        startTime: 'Abril de 2021',
        endTime: 'Setembro de 2021',
        link: 'https://gemu.app'
      },
      {
        company: "Beyond Co",
        text: [
          
          "Responsável por construir uma interface para automatizar processos jurídicos em sistemas como o Projudi, PJE e TRT. Veja mais em #link#Legis|https://legis-landing-main-d4xh7utrwq-uc.a.run.app/#link#.",
          "Usamos <i>Git Hub</i>, <i>Vue</i>, <i>Node</i>, <i>Sequelize</i> e meotodologia <i>SCRUM</i> para organizar nossas atividades."
          ],
        startTime: 'Setembro de 2020',
        endTime: 'Março de 2022',
        link: 'https://beyondcompany.com.br/'
      },
      {
        company: "LIVE",
        text: [
          "Pesquisador e desenvolvedor do produto #link#ALIVE|http://live.cin.ufpe.br/project/2/#link#.",
          "Alive é um projeto de estudo que permite ao usuário ler em tempo real os dados como aceleração, velocidade e todos os demmais dados disponível na OBD-II . O dispositivo ainda conta com um GPS, acelerômetro e espaço para armazenamento dos dados. Com o Alive é possivel criar rotinas de viagem e assim gravar todos os dados para estudo posterior resultando em algoritmos eficazes de detercção de anomalias, perfil de condutores e cerca virtual.",
          

          ],
        startTime: 'Novembro de 2018',
        endTime: 'Dezembro de 2020',
        link: 'https://live.cin.ufpe.br/'
      },
      {
        company: "IFPE",
        text: [
          "Como pesquisador bolsista do CNPQ atuei no projeto Pupilometer que tinha como principal objetivo auxiliar oftalmologista a medir precisamente a distância entre as pupilas de seus pacientes. Tal medida é de extrema importância durante o processo de fabricação de óculos.",
          "Durante esse projeto foi utilizado a tecnologia <i>C++</i> com a biblioteca <i>OPENCV</i>."

          ],
        startTime: 'Março de 2017',
        endTime: 'Agosto de 2018',
        link: 'https://www.ifpe.edu.br/campus/recife'
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
  methods: {
    openLink(link){
      utils.openLink(link)
    }
  }
}
</script>
<style scoped>
.theme--light.v-timeline:before {
    background: #cad7f5;
}
</style>
