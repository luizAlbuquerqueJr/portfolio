<template>
  <v-app style="background: #07192e">
    <AtomTextLogo v-if="isLoading" text="Luiz Albuquerque"/>
     <OrganismHeader  v-if="!isLoading" />
    <v-main
      class=""
       v-if="!isLoading"
    >
      <v-snackbar
        v-model="$store.state.showAlert"
        top
        :color="$store.state.colorAlert"
      >
        {{ $store.state.messageAlert }}

        <template v-slot:action="{ attrs }">
          <v-btn
            color="#9f3dee"
            text
            v-bind="attrs"
            @click="$store.state.showAlert = false"
          >
            OK
          </v-btn>
        </template>
      </v-snackbar>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import router from "./router";
import OrganismHeader from './components/organisms/OrganismHeader.vue';
import AtomTextLogo from './components/atoms/textLogo.vue'
  export default {
  name: 'App',
  components:{
    OrganismHeader,
    AtomTextLogo
  },

  data: () => ({
    drawer: false,
    group: null,
    isLoading: true,
    //
  }),
  created(){
    setTimeout(() => 
    {
      console.log("aeeeeeeeeeeeee")
      this.isLoading = false
    }, 6000)
  },
  methods:{
    goToLogin(){
      router.push("/login");
    }
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>
<style scoped>
.centerElements{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
