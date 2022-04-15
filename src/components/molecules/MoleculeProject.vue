<template>
  <v-row no-gutters class="mx-0" justify="center">
    <v-col xs=10 sm=10 md="6" class="mt-5">
      <div class=''>
          <h1 class='highlightedColor projectCardTitle text-center pa-1'>{{project.title}}</h1>
          <p class='highlightedColor mt-5 pa-5'> {{project.description}}</p>
      </div>
    </v-col>
    <v-col xs=12 sm=12 md="6" class="centerItem">
      <MoleculeLaptop/>
    </v-col>
  </v-row>
</template>

<script>
import MoleculeLaptop from "../molecules/MoleculeLaptop.vue"
  export default {
  props:{
      project: {
        type: Object
      },
  },
  components:{
      MoleculeLaptop
  },
  data: () => ({
  }),
  async created(){
    console.log("Criando componente introduction");
  },
  
};
</script>
<style scoped>
.projectCardTitle{
  /* border: 1px solid #00d3b9 */
  
}
.centerItem{
    display: flex;
    justify-content: center;
  }

</style>