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
        <v-btn outlined color="secondary" class="mt-4 mr-5" @click="goToResume">
          Baixar currículo
        </v-btn>
        <v-dialog
        max-width="600"
      >
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" outlined color="secondary" class="mt-4">
            Ver Artigos publicados
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card class="bg-themeSecondaryColor">
            <v-toolbar
              class="bg-themeSecondaryColor"
              dark
            >Artigos publicados</v-toolbar>
            <v-card-text>
              <div class="pa-3 mt-7">
                <p @click="openLink('https://www.frontiersin.org/articles/10.3389/fpubh.2020.580815/full')" class="highlightedColor link-cursor" color="accent">Ver Artigo no Frontier <v-icon small color="accent" class="ml-2"> mdi-open-in-new </v-icon></p>
                <p @click="openLink('https://medium.com/@luizAlbuquerqueJr')" class="highlightedColor link-cursor" color="accent">Ver Artigo no Medium <v-icon small color="accent" class="ml-2"> mdi-open-in-new </v-icon></p>
              </div>
            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="dialog.value = false"
                color="accent"
              >Voltar</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>
      </v-col>
    </v-row>
</template>

<script>
import utils from '../../utils/index.js'
export default {
  components:{
  },
  data: () => ({
  }),
  methods:{
    openLink(url){
      utils.openLink(url)
    },
    goToResume(){
      this.openLink('https://drive.google.com/drive/folders/16Mz7rruNDqfTzEFYerklRIXjwQ8zKcxu?usp=sharing')
    }
  }
};
</script>

<style scoped>
  .link-cursor:hover{
    cursor: pointer;
  }
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

