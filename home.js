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
const apiData = async () => {
  let data = await fetch(url);
  let songs = await data.json();
  console.log("apiData--->", songs);
  let song = songs.data;
  let songsArray = [];
  songsArray.push(song);
  console.log("array", songsArray);

  console.log("sdkcbsdkjv:", songsArray);

  console.log("song dat---->", song);
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
  console.log(songs.data);
  let song = songs.data;
  for (s of song) {
    row2.innerHTML += `<div class="col ">
                    <div class="mb-3">
                    <div class="row no-gutters cardHorizontal">
                      <div class="col-md-4 ">
                        <img src="${s.album.cover}" style="max-width: 100%;" alt="...">
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
window.onload = () => {
  apiData();
  apiDataTwo();
};
