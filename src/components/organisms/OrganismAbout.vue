<template>
    <v-row justify-content="center">
        <v-col class="text-start" align-self="start"  cols=12>
          <MoleculeTopic number="01" text="Sobre min"/>
        </v-col>
        <v-col cols="12" md="7">
          <p>Olá gente! Conforme dito na seção acima, meu nome é Luiz e <span class="highlightedColor">me considero um apaixonado por tecnologia</span>. Existem 2 bons motivos para isso. </p>
            <span class="secondaryColor">01. Ajudar o próximo</span> <p> Acredito que a tecnologia( especialmente a programação) é a forma mais acessível para um indivíduo resolver algum problema de maneira escalável.
            Com alguns dias de desenvolvimento e relativamente pouco investimento financeiro já é possível criar um projeto que ajude dezenas, centenas ou milhares de pessoas.
            Observe, porém, que em nenhum momento eu disse que essa é uma tarefa fácil. <span  class="highlightedColor"> Por essa razão sempre estou em constante aprendizagem</span></p>
            <span class="secondaryColor">02. Engenhocas</span> 
            <p>Sim, você não leu errado. Sempre fui a criança que desmontava seus próprios brinquedos e uma vez desmontado nunca mais voltava ao normal... 
            Tempo passou, eu cresci, hoje me debruço sobre os diversos códigos e engenhocas encontradas na internet. Tenho espírito <i>maker</i>, ou seja, 
            <span  class="highlightedColor">sempre tenho um projeto pessoal em mente.</span> </p>

        </v-col>
        <v-col cols="12" md="5" class="centerItem">
          <div class="image-draw-border draw ma-0"/>
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
    //
    skills: undefined
  }),
  async created(){
    console.log("Criando componente about");
  },
  
};
</script>


<style scoped>
  text
  .capa:hover{
    background:rgb(48, 210, 185,0);
  }
  .inner:hover {
    opacity: 0;
  }
  .aboutExternal{
    margin-top: 10%;
  }
  .aboutMyName{
    font-size: clamp(30px, 8vw, 50px);
  }
  .aboutTitle{
    font-size: clamp(30px, 8vw, 50px);
  }
  .centerItem{
    display: flex;
    justify-content: center;
  }
  .image-draw-border {
    border: 0;
    box-sizing: border-box;
    margin: 1em;
    padding: 1em 2em;
    box-shadow: inset 0 0 0 4px #8692af;
    color: #8692af;
    position: relative;
    vertical-align: middle;
    width: 200px;
    z-index: 0;
  }
  .image-draw-border::before, .image-draw-border::after {
    content: '';
    position: absolute;
  }
  .draw {
    position:relative;
    width:200px; 
    height:200px;
    background:rgb(48, 210, 185,0.5);
    z-index: 0;
    transition: color 0.25s;
    /* background-image: url('../../assets/laptop2.png'); */
    background-image: url('../../assets/me.jpeg');
    background-size: cover;
    opacity: 0.8
  }
  .draw::before, .draw::after {
    border: 2px solid transparent;
    width: 0;
    height: 0;
  }
  .draw::before {
    top: 0;
    left: 0;
  }
  .draw::after {
    bottom: 0;
    right: 0;
  }
  .draw:hover {
    color: #60daaa;
    opacity: 1;
  }
  .draw:hover::before, .draw:hover::after {
    width: 100%;
    height: 100%;
  }
  .draw:hover::before {
    border-top-color: #60daaa;
    border-right-color: #60daaa;
    transition: width 0.25s ease-out, height 0.25s ease-out 0.25s;
    
  }
  .draw:hover::after {
    border-bottom-color: #60daaa;
    border-left-color: #60daaa;
    transition: border-color 0s ease-out 0.5s, width 0.25s ease-out 0.5s, height 0.25s ease-out 0.75s;
  }
  
 
  
</style>

