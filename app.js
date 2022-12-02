// clases (.example) and ids (#example)
let movieListContainer = document.querySelector(".movie-list-wrapper");
let favSongsContainer = document.querySelector(".favsong");
let reproductorContainer = document.querySelector(".reproductormainadentro");

//MANEJO DEL DOM

// SONG
class Song {
   //pasar propiedades
   constructor(title, artist, image) {
      //crear propiedades
      this.title = title;
      this.artist = artist;
      this.image = image;
   }
}

//get api

fetch("https://i2thub.icesi.edu.co:5443/deezer/search")
   .then(resp => resp.json())
   .then(resp => {
      const songs = resp.data;

      for (let index = 0; index < songs.length; index++) {
         let element = `
               <li class="songitem">
                         <div class="izquierda">
                             <img src="${songs[index].album.cover}" alt="">
                             <h5>${songs[index].title}<br> 
                                 <div class="subtittle">${songs[index].artist.name}</div>
                             </h5>
                         </div>
                         <div class="derecha">
                             <span class="material-symbols-rounded" id="1">
                                 favorite
                             </span>
                         </div>
               </li>
               `;

         favSongsContainer.innerHTML += element;
      }
   });

fetch("https://i2thub.icesi.edu.co:5443/deezer/search?q=one%20direction")
   .then(resp => resp.json())
   .then(resp => {
      const albums = resp.data;
      console.log(albums);
      //recorrer un array

      for (let index = 0; index < albums.length; index++) {
         let element = `
       <div class="movie-list-item">
             <img class="movie-list-item-img" src="${albums[index].album.cover_big}" alt="">
             <h1>${albums[index].title}</h1>
             <p>${albums[index].artist.name}</p>
         </div>`;

         movieListContainer.innerHTML += element;
      }
   });

let elementReproductor = new Song(
   "Fine Line",
   "Harry Styles",
   "https://i.pinimg.com/originals/ec/5d/0a/ec5d0a4fcb33ce271bb272f0fc9a9417.jpg"
);

let elementReproductorHtml = `            
<a href="#" class="fineline"
><img
  class="fineline"
  width="190px"
  src="${elementReproductor.image}"
/></a>
<h1>${elementReproductor.title}</h1>
<p>${elementReproductor.artist}</p>

<div class="progresscontainerbottom">
<div class="progressbarbottom">
  <div class="progressbottom"></div>
</div>
</div>

<!-- start of player controls -->
<div class="playercontrols">
<div class="aleatorio">
  <span class="material-symbols-rounded"> shuffle </span>
</div>

<div class="anterior">
  <span class="material-symbols-rounded"> skip_previous </span>
</div>

<div class="play">
  <span class="material-symbols-rounded"> play_arrow </span>
</div>

<div class="siguiente">
  <span class="material-symbols-rounded"> skip_next </span>
</div>

<div class="repetir">
  <span class="material-symbols-rounded"> replay </span>
</div>
</div>
</div>`;

reproductorContainer.innerHTML = elementReproductorHtml;
