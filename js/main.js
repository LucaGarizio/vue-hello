const { createApp } = Vue

createApp({
  data() {
    return {
    // messaggio iniziale e classe 
      message: 'Vue JS è bellissimo0o0o0o0o0o!!!!111!!!',
      titleClass: "title",
    //   classe contenitore e immagine relativa
      contImg: "class-cont-img",
      foto: "wallpaperflare.com_wallpaper(4).jpg",
      imgClass: "img"
    }
  },
// bonus
  mounted() {
    setTimeout(() => {
        this.contImg = "show";
    },3000);
  }
}).mount('#app')