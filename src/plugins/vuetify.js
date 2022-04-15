import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    icons: {
      iconfont: 'mdi', // default - only for display purposes
    },
    theme: {
        options: {
            customProperties: true,
        },
        customVariables: ["../styles/variables.scss"],
        treeShake: true,
        dark: false,
        themes: {
            light: {
                primary: "#8692af",
                secondary: "#30d2b9",
                accent: "#cad7f5",
                error: "#F91A42",
                info: "#2196F3",
                success: "#15B843",
                warning: "#FFB82F",
                backgroundTheme: "#07192e"
            },
            dark: {
                primary: {
                    base: "#2BED90",
                },
                secondary: "#6C39FF", 
                accent: "#82B1FF",
                error: "#F91A42",
                info: "#2196F3",
                success: "#15B843",
                warning: "#FFB82F",
            },
        },
    },
});
