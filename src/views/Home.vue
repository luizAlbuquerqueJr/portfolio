<template>
  <v-row justify="center" no-gutters>
    <v-col cols="12" xs="12" sm="11" md="10" lg="9" xl="8" class="px-5">
    <!-- <v-col cols="12" :style="$vuetify.breakpoint.smAndUp? 'padding-left:15%; padding-right:15%' : 'padding-left:0; padding-right:0'"> -->
      <OrganismIntroduction style="min-height:100vh"/>
      <OrganismAbout style="min-height:100vh" id="about"/>
      <OrganismMySkills  style="min-height:100vh" id="mySkill"/>
      <OrganismMyWorks style="min-height:100vh" id="myWorks"/>
      <OrganismMyProjects style="min-height:100vh" id="myProjects"/>
      <OrganismContact style="min-height:100vh"  id="contact"/>
    </v-col>
  </v-row>
</template>

<script>

import OrganismIntroduction from "../components/organisms/OrganismIntroduction.vue"
import OrganismAbout from "../components/organisms/OrganismAbout.vue"
import OrganismMySkills from "../components/organisms/OrganismMySkills.vue"
import OrganismMyWorks from "../components/organisms/OrganismMyWorks.vue"
import OrganismMyProjects from "../components/organisms/OrganismMyProjects.vue"
import OrganismContact from "../components/organisms/OrganismContact.vue"

export default {
  name: 'Home',
  components:{
    OrganismIntroduction,
    OrganismAbout,
    OrganismMySkills,
    OrganismMyWorks,
    OrganismMyProjects,
    OrganismContact
  },
  data: () => ({
  }),
  async created(){
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
