var myDate = new Date();
var hrs = myDate.getHours();

var greet;

if (hrs < 12) greet = "Good Morning";
else if (hrs >= 12 && hrs <= 17) greet = "Good Afternoon";
else if (hrs >= 17 && hrs <= 24) greet = "Good Evening";

document.getElementById("greet").innerHTML = "<b>" + greet;

const changeSidebarSelected = function (event) {
  let currentlySelectedItem = document.querySelector(".selctedSidebarItem");
  currentlySelectedItem.classList.remove("selctedSidebarItem");
  event.target.classList.add("selctedSidebarItem");
};

url = "https://striveschool-api.herokuapp.com/api/deezer/search?q=akon";
row = document.getElementById("songs");
url2 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";
row2 = document.getElementById("songs-2");
url3 = "https://striveschool-api.herokuapp.com/api/deezer/search?q=Drake";
row3 = document.getElementById("songs-3");
const apiData = async () => {
  let data = await fetch(url);
  let songs = await data.json();
  console.log("apiData--->", songs);
  let song = songs.data;
  let songsArray = [];
  songsArray.push(song);
  //console.log("array", songsArray);

  //console.log("sdkcbsdkjv:", songsArray);

  //console.log("song dat---->", song);
  for (s of song) {
    row.innerHTML += `<div class="col ">
                    <div class="mb-3">
                    <div class="row no-gutters cardHorizontal">
                      <div class="col-md-4 ">
                        <img src="${s.album.cover_medium}" style="max-width: 100%;" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body ">
                          <h6 style="margin-bottom: 0;" class="cardText card-title ">${s.album.title}</h6>
                            
                        </div>
                      </div>
                    </div>
                    </div>
                  </div>`;
  }
};

const apiDataTwo = async () => {
  let data = await fetch(url2);
  let songs = await data.json();
  //console.log(songs.data);
  let song = songs.data;
  for (s of song) {
    row2.innerHTML += `<div class="col">
                      <div class="card w-100 h-100 cardVertical ">
                        <img src="${s.album.cover_medium}" class="card-img-top" style=" box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  alt="...">
                          <div class="Verticalcard-body">
                              <h6 class="text-left card-title pt-3">${s.artist.name}</h6>
                              <p style="font-size: small; text-align: left;" class="text-muted cardText card-text">Enjoy your favourite songs.</p>
                                  <div  class="verticalCardHoverBody">
                                  <div class="contentHover">
                                    <p>${s.album.title}</p>
                                  </div>
                            </div>
                            </div>
                      </div>
                      </div>
`;
  }
};

const apiDataThree = async () => {
  let data = await fetch(url3);
  let songs = await data.json();
  console.log("section-3", songs.data);
  let song = songs.data;
  for (s of song) {
    row3.innerHTML += `<div class="col">
                        <div class="card w-100 h-100 cardVertical ">
                                <img src="${s.album.cover_medium}" style="border-radius: 15%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  alt="...">
                            <div class="card-body">
                                <a class="card-title" href="artist.html">${s.artist.name} 
                                <p class="cardText card-text"></p>
                            </div>
                        </div>
                    </div>`;
  }
};
let field;
const handlesearch = (e) => {
  field = e.target.value.toLowerCase();
};
const loadsearchImages = (query) => {
  fetching(query);
};
const fetching = async (str) => {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${str}`)
    .then((response) => response.json())
    .then((songs) => {
      dataArray = songs.data;
      loadsongs(dataArray);
      //playlist(dataArray);
      console.log(dataArray);
    });
};
// function playlist(dataArray) {
// let _dataArray = dataArray;
// console.log(songs.data.duration);
//}
const loadsongs = (arr) => {
  if (row !== null) {
    row.innerHTML = "";
    let song = arr;
    for (s of song) {
      row.innerHTML += `<div class="col">
                          <div class="card w-100 h-100 cardVertical ">
                                  <img src="${s.album.cover_medium}" style="border-radius: 15%; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"  alt="...">
                              <div class="card-body">
                              <a class="card-title" href="artist.html">${s.artist.name}</a>
                                  <a class="cardText card-text" href="album.html">${s.album.title}</a>
                              </div>
                          </div>
                      </div>`;
    }
  }
};
window.onload = () => {
  apiData();
  apiDataTwo();
  apiDataThree();
};
