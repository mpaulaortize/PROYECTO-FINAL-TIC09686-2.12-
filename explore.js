let favSongsContainer = document.querySelector(".favsong");
let favSongsContainer1 = document.querySelector(".favsong1");

class Song {
  //pasar propiedades
  constructor(title, artist, image) {
    //crear propiedades
    this.title = title;
    this.artist = artist;
    this.image = image;
  }
}

class Song1 {
  //pasar propiedades
  constructor(title, artist, image) {
    //crear propiedades
    this.title = title;
    this.artist = artist;
    this.image = image;
  }
}


let songs = [
  new Song(
    "Medicine",
    "Havelin",
    "https://i1.sndcdn.com/artworks-3VjYtEu1uoIh-0-t500x500.jpg"
  ),
  new Song(
    "Birthdat",
    "Selena",
    "https://www.lololyrics.com/img/cover/23935.jpeg"
  ),

  //completar mas objetos
];

let songs1 = [
  new Song1(
    "Acting",
    "Sia",
    "http://cdn.shopify.com/s/files/1/0385/1232/8844/products/CDSia-ThisIsActing1_1024x.jpg?v=1631984663"
  ),
  new Song1(
    "Dance",
    "Selena",
    "https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/dxsyemours2gozcwpfjo/best-drake-album-cover-art-dark-lane-demo-tapes?fimg-client-default"
  ),
  //completar mas objetos
];



for (let index = 0; index < songs.length; index++) {
  let element = `
          <li class="songitem">
                    <div class="izquierda">
                        <img src="${songs[index].image}" alt="">
                        <h5>${songs[index].title}<br> 
                            <div class="subtittle">${songs[index].artist}</div>
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


for (let index = 0; index < songs1.length; index++) 
{
  let element = `
              <li class="songitem">
                
              <div class="izquierda">
                  <img src="${songs[index].image}" alt="">

                  <h5>${songs[index].title} <br> 
                      <div class="subtittle">${songs[index].artist}</div>
                  </h5>
              </div>
              
              <div class="derecha">
                  <span class="material-symbols-rounded" id="1">
                      favorite
                  </span>
              </div>
            </li>
          `;

  favSongsContainer1.innerHTML += element;
}

