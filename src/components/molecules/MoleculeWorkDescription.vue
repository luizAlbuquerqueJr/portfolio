<template>
  <v-row no-gutters>
    <div v-html="descriptionHTML"/>
  </v-row>
</template>

<script>
import utils from "../../utils/index.js"
  window.openLink = (link) => {
    utils.openLink(link)
  }
  export default {
    props:{
      description: {
        type: Array,
        default: () => []
      }
    },
    computed: {
        descriptionHTML() {
            let temp = ''
            let regex = /#link#((?!link).)*#link#/g
            for (const topic of this.description) {
                let backup = topic
                const linksArrays = topic.match(regex)
                if(linksArrays){
                    for (const link of linksArrays) {   
                        let [text ,url] = link.split('|')
                        text = text.replace(/#link#/g,'')
                        url = url.replace(/#link#/g,'')
                        backup = backup.replace(link,`<a class="highlightedColor" onClick="window.openLink('${url}')" >${text}</a>`)
                    }
                }
                temp += `<p class="highlightedColor"><span  class="secondaryColor">&diams;</span> ${backup}</p>`
            }
            return temp
        } 
    }
  }

</script>
<style scoped>

</style>

<style>
.v-application a{
    color: var(--v-secondary-base) !important;
    text-decoration: none;
}
</style>