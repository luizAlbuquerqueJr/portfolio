<template>
  <v-row >
      <v-col class="text-start" align-self="start" cols=12>
        <MoleculeTopic number="02" text="Minhas ferramentas"/>
      </v-col>
      <v-col cols="12" > 
        <v-tabs 
          v-if="$vuetify.breakpoint.smAndUp"
          vertical 
          color='secondary'
          background-color="primary"
          v-model="tab"
          style="border: 1px solid #30d2b9"
          class="pa-2"> 
          <v-tab 
          v-for="item in items"
          :key="item.title">
            {{item.title}}
          </v-tab>
          <v-tabs-slider color="secondary"></v-tabs-slider>
          <v-tabs-items  v-model="tab" style="background: #07192e">
            <v-tab-item
            v-for="(item,i) in items"
            :key="i">
              <p class="ml-4">
                {{item.description}}
              </p>
            </v-tab-item>
          </v-tabs-items>
        </v-tabs>
        <v-row v-else>
          <v-col v-for="(item,i) in items" :key="i" cols=12>
            <h3 class="secondaryColor">{{item.title}}</h3>
            <p>{{item.description}}</p>
          </v-col>
        </v-row>
      </v-col>
  </v-row>
</template>

<script>
import MoleculeTopic from "../molecules/MoleculeTopic.vue"
export default {
  components:{
    MoleculeTopic
  },
  data () {
      return {
        tab: null,
        items: [
          {
            title:'Node',
            description: "Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz "
          },
          {
            title:'JavaScript',
            description: "Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz "
          },
          {
            title:'Python3',
            description: "Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz "
          },
          {
            title:'CSS',
            description: "Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz "
          },
          {
            title:'HTML',
            description: "Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz "
          },
          {
            title:'Vue',
            description: "Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz Luiz "
          },
        ],
        text: 'Lorem ipsum',
      }
  },
  async created(){
    console.log("Criando componente about");
  },
  
};
</script>


<style scoped>
  
.active-item{
  background-color: black;
}
  
</style>

