const API_KEY = '1c308592d719c7668d47adc63622f209';
const optionsTrending = `trending/movie/week`;
const BASE_URL = `https://api.themoviedb.org/3/${optionsTrending}?api_key=${API_KEY}`;

const result = fetch(BASE_URL)
  .then(response => {
    return response.json();
  })
  .then(({ results }) => {
    return results;
  });

const imgEl = document.querySelector('img');
const nameEl = document.querySelector('.name');
const filmEl = document.querySelector('.film');
const numberEl = document.querySelector('.number');

result
  .then(result => {
    const id = result[0].id;
    return id;
  })
  .then(id => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        imgEl.setAttribute('src', `https://image.tmdb.org/t/p/w400${data.poster_path}`);
        nameEl.textContent = `${data.original_title}`;
        const genres = data.genres;
        const array = [];
        genres.forEach(element => {
          array.push(element.name);
        });
        const string = array.join(', ');
        const year = data.release_date;
        filmEl.textContent = string + ' ' + year.slice(0, 4);
        const vote = data.vote_average;
        numberEl.textContent = vote.toFixed(1);
      });
  });

function totalTiles(roomWidth, roomLength, gap) {
  tileWidth = 200;
  tileLength = 300;
  // verticalLayout
  howManyTilesForRoomWidthVer = roomWidth / (tileWidth + gap);
  howManyTilesForRoomLengthVer = roomLength / (tileLength + gap);
  totalTilesForVerticalLayout = howManyTilesForRoomLengthVer * howManyTilesForRoomWidthVer;
  // horizontalLayout
  howManyTilesForRoomWidthHor = roomWidth / (tileLength + gap);
  howManyTilesForRoomLengthHor = roomLength / (tileWidth + gap);
  totalTilesForHorizontalLayout = howManyTilesForRoomLengthHor * howManyTilesForRoomWidthHor;
  // totalTiles
  return console.log(
    `Need ${totalTilesForVerticalLayout} tiles for vertical layout and ${totalTilesForHorizontalLayout} tiles for horizontal layout`
  );
}

totalTiles(2000, 3550, 2);
totalTiles(2000, 3550, 3);
totalTiles(2000, 3550, 4);
totalTiles(2000, 3550, 5);
