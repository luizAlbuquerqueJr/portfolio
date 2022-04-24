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
        title:'O Jogo Mais Difícil do Mundo',
        description: "Durante a cadeira de Bio inspirada ofertada no Centro de Informática (CIn) - UFPE resolvi colocar a mão na massa e desenvolvi minha própria versão do Jogo Mais Difícil do Mundo. Implementado com um algoritmo genético o nosso querido quadradinho azul foi capaz de passar entre os diversos mapas considerado impossível para qualquer pessoa.",
        repositoryLink: "https://github.com/luizAlbuquerqueJr/world-s-hardest-game",
        link:"https://drive.google.com/drive/folders/1t_B1_hozscsB_Fqv8Nqg3RZxZgMQck4K?usp=sharing",
        imageURL: "https://drive.google.com/uc?id=1yAl4vTnkBzPO9ryuJ55haIJ1o6JGBpb7&export=download"
      },
      {
        title:'Vein Acquisition Model Probe | V.A.M.P',
        description: "O V.A.M.P é equipamento desenvolvido durante meu PIBIC no IFPE - campus Recife. Sua principal finalidade é auxiliar enfermeiras durante o processo de punção venosa. O V.A.M.P emite luz ultravioleta que ao encontrar as hemácias presente no sangue é refletido e capturado pela câmera. Em seguida um séria de filtro é aplicada sobre a imagem para facilitar a visualização das veias mais escondidas.",
        imageURL: "https://drive.google.com/uc?id=144mciBn3zn5U62E6NbNYGj-SCmZ0twR3&export=download",
        link: "https://drive.google.com/drive/folders/19kU47T6TAljhyhBrjR5SquoaLqEUbSgl?usp=sharing",
      }
    ],
  })
};
</script>
<style scoped>
.project{
  margin: 100px 50px; 
  /* background: red; */
}
</style>
