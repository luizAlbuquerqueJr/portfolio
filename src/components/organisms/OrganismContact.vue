<template>
  <v-row justify-content="center">
    <v-col class="text-start" align-self="start" cols=12>
      <MoleculeTopic number="05" text="Quer saber mais?"/>
    </v-col>
    <v-col class="text-center" >
        <h2 class="accent--text textContact">Entre em contato</h2>
        <p>Tem algum projeto em mente, mas ainda não sabe como começar ?</p>
        <v-btn v-if="!isSendMessage" @click="sendMessage" outlined color="secondary" class="mt-4">
          Enviar mensagem
        </v-btn>
        <div v-else class="contacts">
            <v-icon large color="accent" class="contactIcon px-2" @click="openLink('https://www.linkedin.com/in/luiz-albuquerque-a50ab5178/')"> mdi-linkedin </v-icon>
            <v-icon large color="accent" class="contactIcon px-2" @click="emailHandler()"> mdi-email </v-icon>
            <v-icon large color="accent" class="contactIcon px-2" @click="openLink('https://github.com/luizAlbuquerqueJr')"> mdi-github </v-icon>
            <v-icon large color="accent" class="contactIcon px-2" @click="openLink('https://wa.me/5581983546109')"> mdi-whatsapp </v-icon>
            <v-icon large color="accent" class="contactIcon px-2" @click="openLink('https://www.instagram.com/luizalbuquerquejr')"> mdi-instagram </v-icon>
        </div>
    </v-col>
  </v-row>
</template>

<script>

import MoleculeTopic from "../molecules/MoleculeTopic.vue"
import utils from "../../utils/index.js"
export default {
  components:{
    MoleculeTopic
  },
  data: () => ({
    isSendMessage:false
  }),
  methods:{
    emailHandler(){
      const email = 'luizkoff@gmail.com'
      this.$store.dispatch("addAlert", {message:`O email ${email} foi copiado para sua área de transferência`, color:'#07192d'});
      utils.openLink(`mailto:${email}`)
    },
    openLink(link){
      utils.openLink(link)
    },
    sendMessage(){
      this.isSendMessage = true
    }
  }
  
};
</script>
<style scoped>
.textContact{
    font-size: clamp(30px, 8vw, 50px);
}
.contactIcon:hover{
    background: #30d2b9;
}
</style>
