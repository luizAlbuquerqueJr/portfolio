<template>
  <v-container>
    <v-app-bar
      elevate-on-scroll
      app
      color="#07192e"
      dark
    >
      <!-- <v-app-bar-nav-icon  v-if="collapse"></v-app-bar-nav-icon> -->
      <v-app-bar-nav-icon v-if="collapse" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <div v-if="!collapse" style="width:100%; display:flex; justify-content: space-between; align-items: center;">
        <h2 v-if="!isLoading" class="secondaryColor" @click="goToTarget(0)">Luiz Albuquerque</h2>
        <v-spacer />
        <div class="mr-5" style="width:700px; display:flex; justify-content: space-between; align-items: center">
          <AtomLink number=1 text="Sobre" goTo="#about"/>
          <AtomLink number=2 text="Habilidades" goTo="#mySkill"/>
          <AtomLink number=3 text="Experiências" goTo="#myWorks"/>
          <AtomLink number=4 text="Projetos" goTo="#myProjects"/>
          <AtomLink number=5 text="Contato" goTo="#contact"/>
        </div>
      </div>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      left
      temporary
      class="navigationPortifolio"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item>
            <v-list-item-title><AtomLink number=1 text="Sobre" goTo="#about"/></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><AtomLink number=2 text="Habilidades" goTo="#mySkill"/></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><AtomLink number=3 text="Experiências" goTo="#myWorks"/></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><AtomLink number=4 text="Projetos" goTo="#myProjects"/></v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-title><AtomLink number=5 text="Contato" goTo="#contact"/></v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer> 
    </v-container>
</template>

<script>
import AtomLink from '../atoms/AtomsLink.vue'
export default {
  name: 'OrganismHeader',
  props:{
    isLoading: {
      type: Boolean,
      default: false,
    }
  },
  components: {
    AtomLink
  },

  data() {
    return {
      drawer: false,
      group: null,
      options : {
          duration: 100
      },
    }
  },
  computed: {
    collapse() {
      return this.$vuetify.breakpoint.smAndDown
    } 
  },
  methods:{
    goToTarget(id){
      const options = {
        duration: 1000,
      }
      this.$vuetify.goTo(id, options)
    },
  },
  watch: {
    group () {
      this.drawer = false
    },
  },
};
</script>
<style scoped>
  .navigationPortifolio{
    position: fixed;
    width: 256px;
    top: auto;
    /* left: auto; */
  }
  
  .text-color-primary{
    color: #30d2b9
  }
  .myName{
    color: #30d2b9
  }

  .link-text {
    color: #8692af;
    font-family: 'SF-Mono';
  }

  .link-text:hover{
    color: #30d2b9;
  }
</style>
