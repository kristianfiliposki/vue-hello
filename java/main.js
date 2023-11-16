
const { createApp } = Vue;

const opzioni = {
    data(){
        return {
            titoloFoto: `inserisci il nome dell'animale`,
            foto: "https://wildcard.codestuff.io/dog/250/250",


        }
    }
};createApp(opzioni).mount('#app')
