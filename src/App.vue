<template>
  <v-app style="background: #07192e">
    <AtomTextLogo v-if="isLoading" text="Luiz Albuquerque"/>
     <OrganismHeader  v-if="!isLoading" />
    <v-main
      class="py-0"
       v-if="!isLoading"
    >
      <v-row justify="center" class="mx-1">
        <v-col cols="12" xs=12 sm=10 md=9 lg=8 xl=7>
          <OrganismIntroduction class="screen"/>
          <OrganismAbout class="screen" id="about"/>
          <OrganismMySkills class="screen" id="mySkill"/>
          <OrganismMyWorks class="screen" id="myWorks"/>
          <OrganismMyProjects class="screen" id="myProjects"/>
          <OrganismContact class="screen" id="contact"/>
        </v-col>
      </v-row>
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
import OrganismIntroduction from './components/organisms/OrganismIntroduction.vue';
import OrganismMySkills from './components/organisms/OrganismMySkills.vue';
import OrganismMyProjects from './components/organisms/OrganismMyProjects.vue'
import OrganismAbout from './components/organisms/OrganismAbout.vue';
import OrganismMyWorks from './components/organisms/OrganismMyWorks.vue';
import OrganismContact from './components/organisms/OrganismContact.vue';
import AtomTextLogo from './components/atoms/textLogo.vue'
  export default {
  name: 'App',
  components:{
    OrganismHeader,
    AtomTextLogo,
    OrganismIntroduction,
    OrganismMySkills,
    OrganismMyProjects,
    OrganismAbout,
    OrganismMyWorks,
    OrganismContact
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
    }, 1000)
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
.screen{
  min-height:100vh
}
.centerElements{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
