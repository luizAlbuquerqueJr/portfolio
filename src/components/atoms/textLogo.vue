<template>
  <div class="patterns">
    <svg width="100%" height="100%">
        <rect x="0" y="0" width="100%" height="100%" fill="url(#polka-dots)"> </rect>   
        <text x="50%" y="50%"  text-anchor="middle">
            {{text}}
        </text>
    </svg>
 </div>
</template>

<script>
export default {
  name: 'textLogo',
  props: {
      text: {
        type: String,
        default: ''
      }
  },
  created() {
    console.log(this.collapse)
    console.log(this.$vuetify.breakpoint.smAndDown)
  },

  data() {
    return {
      drawer: false,
      group: null,
      options : {
          duration: 100,
          // offset: this.offset,
          // easing: this.easing,
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

    logout() {
      this.$store.dispatch("setLogged", false);
      this.$store.dispatch("setUser", null);
      this.goToLogin();
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
 .patterns {
  height: 100vh;
}



svg text {
  font-family: Lora;
  letter-spacing: 10px;
  stroke: #00d3b9;
  font-size: 20px;
  font-size: clamp(15px,8vw,150px);
  font-weight: 700;
  stroke-width: 5;
  animation: textAnimate 8s;
}
.textEffect{
    width: 200px;
}

@keyframes textAnimate {
  0% {
    stroke-dasharray: 0 50%;
    stroke-dashoffset:  20%;
    fill: #cad7f5;

  }

  /* 50% {
    stroke-dasharray: 50% 0;
    stroke-dashoffstet: -20%;
    fill: #00d3b9;
    font-size: clamp(15px,8vw,150px);
  }
  
  75% {
    stroke-dasharray: 50% 0;
    stroke-dashoffstet: -20%;
    fill: #00d3b9;
  } 
  */

  100% {
    stroke-dasharray: 50% 0;
    stroke-dashoffstet: -20%;
    fill: #00d3b9;
    /* font-size:20px; */
  }
  
}
</style>
