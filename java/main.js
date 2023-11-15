const fotosrc="https://wildcard.codestuff.io/dog/250/250";

const { createApp } = Vue;

const opzioni = {
    data: function (){
        return {
            titoloFoto: `inserisci il nome dell'animale`,
            foto: fotosrc

        }
    }
};createApp(opzioni).mount('#app')
