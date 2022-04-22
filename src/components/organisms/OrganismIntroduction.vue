<template>
    <v-row no-gutters>
      <v-col class="text-start" align-self="center">
        <p class="secondaryColor">Olá, meu nome é</p>
        <h1 class="highlightedColor introductionMyName">Luiz Albuquerque.</h1>
        <h2 class="introductionTitle">Uso a tecnologia para melhorar <br/> a vida das pessoas.</h2>
        <v-col xs=12 sm=8 md=5 lg=3 class="pa-0 mt-4">
          <p>Sou Engenheiro da Computação focado em resolver problemas reais com soluções objetivas e, principalmente, escaláveis.
             Fico extremamente feliz quando meus <i>commits</i> afetam diretamente a vida de milhares de pessoas.</p>
        </v-col>
        <v-btn outlined color="secondary" class="mt-4" @click="goToResume">
          Baixar currículo
        </v-btn>
      </v-col>
    </v-row>
</template>

<script>

export default {
  components:{
  },
  data: () => ({
  }),
  async created(){
    console.log("Criando componente introduction");
  },
  methods:{
    goToResume(){
      window.open('https://drive.google.com/drive/folders/16Mz7rruNDqfTzEFYerklRIXjwQ8zKcxu?usp=sharing')
    }
  }
};
</script>

<style scoped>
  .introductionExternal{
    margin-top: 10%;
  }
  .introductionMyName{
    font-size: clamp(30px, 8vw, 50px);
  }
  .introductionTitle{
    font-size: clamp(30px, 8vw, 50px);
  }
</style>

