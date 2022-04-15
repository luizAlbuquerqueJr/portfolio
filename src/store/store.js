import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import amplitude from 'amplitude-js';
// import router from '../router';

// Import the plugin module here

const initialState = () => ({
    isLogged: false,
    user: null,
    testando: 'hello world',
    showAlert: false,
    messageAlert: "Sua skill foi criada",
    colorAlert: "Sucess",
    showDialogCollaborator: false,
    showDialogSkill: false,
});

Vue.use(Vuex);
const vuexLocal = new  VuexPersistence ({
    storage: window.localStorage,
    // storage: window.localStorage,
    reducer: (state) => ({
        isLogged: state.isLogged,
        user: state.user,
    }),
});

export const store = new Vuex.Store({
    plugins: [vuexLocal.plugin],
    getters: {
        
    },
    state: initialState,
    // first call action
    actions: {
        initAmplitude(context) {
          context.commit("initializeAmplitude")
        },
        amplitudeEmit(context,value){
          context.commit("amplitudeEvent", value)
        },
        setLogged(context, value) {
          context.commit("updateLogged", value);
        },
        setUser(context, value) {
          context.commit("updateUser", value);
        },
        addAlert(context, value){
            context.commit("updateAlert", value);
        },
        setShowDialogCollaborator(context,value){
          context.commit("updateShowDialogCollaborator", value);
        },
        setShowDialogSkill(context,value){
          context.commit("updateShowDialogSkill", value);
        }
    },
    //after call mutation
    mutations: {
        initializeAmplitude(state){
          const key = process.env.VUE_APP_AMPLITUDE_KEY
          state.amplitude = amplitude.getInstance()
          state.amplitude.init(key)
        },
        async amplitudeEvent(state, value){
          try {
            if(process.env.VUE_APP_NODE_ENV !== 'development'){
              await state.amplitude.logEvent(value.eventType, value.data)
            }  
          } catch (error) {
            console.error(error)
          }
          
        },
        updateLogged(state, value) {
          state.isLogged = value;
        },
        updateUser(state, value) {
          state.user = {...value};
        },
        updateAlert(state, value) {
            console.log(value);
            state.messageAlert = value.message;
            state.colorAlert = value.color;
            state.showAlert = true
        },
        updateShowDialogCollaborator(state,value){
          state.showDialogCollaborator = value
        },
        updateShowDialogSkill(state,value){
          state.showDialogSkill = value
        }
    },
});
