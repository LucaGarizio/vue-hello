const { createApp } = Vue

createApp({
  data() {
    return {
    // messaggio iniziale e classe 
      message: 'Vue JS è bellissimo0o0o0o0o0o!!!!111!!!',
      titleClass: "title",
    // classe contenitore e immagine relativa
      contImg: "class-cont-img",
      foto: "wallpaperflare.com_wallpaper(4).jpg",
      imgClass: "img"
    }
  },
// bonus con lifecycle hooks (mounted)
// esegue la funzione dopo che tutti i componenti iniziali sono stati caricati
  mounted() {
    // mostra l'immagine dopo 3 secondi
    setTimeout(() => {
        this.contImg = "show";
    },3000);
  }
}).mount('#app')