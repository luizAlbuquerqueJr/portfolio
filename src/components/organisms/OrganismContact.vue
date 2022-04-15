<template>
  <v-row justify-content="center">
    <v-col class="text-start" align-self="start" cols=12>
      <MoleculeTopic number="05" text="Quer saber mais?"/>
    </v-col>
    <v-col class="text-center" >
        <h2 class="accent--text textContact">Entre em contato</h2>
        <p>Tem alguma projeto em mente mas ainda não sabe como começar ?</p>
        <v-btn v-if="!isSendMessage" @click="sendMessage" outlined color="secondary" class="mt-4">
          Enviar mensagem
        </v-btn>
        <div v-else class="contacts">
            <v-icon large color="accent" class="contactIcon pr-6"> mdi-github </v-icon>
            <v-icon large color="accent" class="contactIcon px-5"> mdi-instagram </v-icon>
            <v-icon large color="accent" class="contactIcon px-5"> mdi-linkedin </v-icon>
            <v-icon large color="accent" class="contactIcon px-5"> mdi-email </v-icon>
            <v-icon large color="accent" class="contactIcon px-5"> mdi-medium </v-icon>
            <v-icon large color="accent" class="contactIcon"> mdi-whatsapp </v-icon>
        </div>
    </v-col>
  </v-row>
</template>

<script>

import MoleculeTopic from "../molecules/MoleculeTopic.vue"
export default {
  components:{
    MoleculeTopic
  },
  data: () => ({
    isSendMessage:false
  }),
  async created(){
    console.log("Criando componente about");
  },
  methods:{
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
.contacts{
    
    /* display: flex;
    justify-content: center; */
    
}
.contactIcon:hover{
    background: #30d2b9
}
</style>
