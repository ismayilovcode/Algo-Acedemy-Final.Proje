function renderHTML() {
  let featurelist = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let carlist = JSON.parse(localStorage.getItem("carlist") || "[]");
  let renderCars = ``;
  for (let i = 0; i < carlist.length; i++) {
    let featureHTml = ``;
    let addedFeatureCount = 0;
    for (let a = 0; a < featurelist.length; a++) {
      if (carlist[i].features.includes(String(featurelist[a].id))) {
        featureHTml += `<span>${featurelist[a].name}</span> `;
        addedFeatureCount++;
      }
      if (addedFeatureCount === 4) {
        break;
      }
    }

    renderCars += `
    <div class="carInfo" id="carInfo${carlist[i].id}">
    <a href="details.html#${carlist[i].id}" class="image" style="
    background-image: url(${carlist[i].img});"></a>
     <div class="text">
       <div class="name">
       <span>${carlist[i].brand}</span> <span>${carlist[i].model}</span>  
       </div>
       <div class="engineYear">
       <span>${carlist[i].engine}L</span> <span>${carlist[i].year}</span>
       </div>
       <div class="features">${featureHTml}</div>
       <div class="price"><span>$</span> <span>${carlist[i].price}</span></div>
       <div class="about">
         <span>${carlist[i].millage} millage</span>
         <span>${carlist[i].fuel}</span><span>${carlist[i].transmission}</span>
         <span>${carlist[i].color}</span>
         </div>
         </div>
         ${
           check(carlist[i].id)
             ? `<div class="favs" onclick="addDeleteFavs(${carlist[i].id})"><i class="fa-solid fa-heart"></i></div>`
             : `<div class="favs" onclick="addDeleteFavs(${carlist[i].id})"><i class="fa-regular fa-heart"></i></div>`
         }
            </div> 
            `;
  }
  document.getElementById("home-carsholder").innerHTML =
    renderCars || "The car you were looking for was not found";

  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
  for (let i = 0; i < favsCars.length; i++) {
    document.getElementById("Favorites").innerHTML = `
    <div><i class="fa-solid fa-heart"></i></div>
    <div>Saved (${favsCars.length})</div>
    `;
  }

  let newSlide = ``;
  for (let i = 0; i < Math.min(5, carlist.length); i++) {
    let carlist = JSON.parse(localStorage.getItem("carlist") || "[]");
    let list = document.getElementById("list");
    newSlide += `
     <div class="item">
    <img src="${carlist[i].img}" alt="" />
   </div>
     `;
    list.innerHTML = newSlide;
  }
}
renderHTML();

function addfavs(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  if (!favsCars.includes(id)) {
    favsCars.push(id);
  }

  localStorage.setItem("favsCars", JSON.stringify(favsCars));
  renderHTML();
}

function list() {
  let favorites = document.getElementById("favorites2");
  let menulist = document.getElementById("menu");
  let floor = document.getElementById("floor");
  let floor2 = document.getElementById("floor2");

  if (favorites.style.display == "none") {
    floor.style.display = "block";
    favorites.style.display = "block";
    menulist.style.display = "none";
  } else {
    floor.style.display = "none";
    favorites.style.display = "none";
  }
  if (floor2.style.display == "block") {
    floor.style.display = "none";
  }
  let newfavCars = ``;
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
  let todos = JSON.parse(localStorage.getItem("carlist") || "[]");

  for (let i = 0; i < todos.length; i++) {
    if (favsCars.includes(todos[i].id)) {
      newfavCars += `
      <div class="carParent">
      <div class="favoriteCar">
        <a href="details.html#${todos[i].id}" class="image" style="
        background-image: url(${todos[i].img});"></a>
          <div class="carText">
          <div class="modelName">
              <h3>${todos[i].brand}</h3>
              <h3>${todos[i].model}</h3>
              </div>
            <span>${todos[i].engine}</span> <span>${todos[i].fuel}</span>
            <span>${todos[i].transmission}</span>
            <span>${todos[i].year}</span>
            </div>
        </div>
        <div class="carAbout">
          <span>${todos[i].millage} Millage</span> <div id="button${todos[i].id}" onclick="DeleteFavs(${todos[i].id})" class="buttonType" ><i class="fa-solid fa-heart"></i></div>
          </div>
          </div>
          `;
    }
  }
  document.getElementById("carfavorite").innerHTML =
    newfavCars || "No favorite!";
}

function floor() {
  let floor = document.getElementById("floor");
  let favorites = document.getElementById("favorites2");
  let listmenu = document.getElementById("menu");

  if (listmenu.style.display == "block") {
    floor.style.display = "none";
    listmenu.style.display = "none";
  } else {
    floor.style.display = "none";
    favorites.style.display = "none";
  }
}
function floor2() {
  let floor2 = document.getElementById("floor2");
  let favorites = document.getElementById("favorites2");
  let listmenu = document.getElementById("menu");

  if (listmenu.style.display == "block") {
    floor2.style.display = "none";
    listmenu.style.display = "none";
  } else {
    floor2.style.display = "none";
    favorites.style.display = "none";
  }
}

function addDeleteFavs(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
  if (favsCars.includes(id)) {
    let addDeleteFavCars = [];
    for (let i = 0; i < favsCars.length; i++) {
      if (favsCars[i] != id) {
        addDeleteFavCars.push(favsCars[i]);
      }
    }
    localStorage.setItem("favsCars", JSON.stringify(addDeleteFavCars));

    let favorites = document.getElementById("Favorites");
    let listFavorite = document.getElementById("listFavorite");
    for (let i = 0; i < favsCars.length; i++) {
      favorites.innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (0)</div>
      `;

      listFavorite.innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (0)</div>
      `;
    }
  } else {
    favsCars.push(id);
    localStorage.setItem("favsCars", JSON.stringify(favsCars));
  }
  renderHTML();
  addDeleteListFavs();
}
renderHTML();

function DeleteFavs(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  if (favsCars.includes(id)) {
    let favCars = [];
    for (let i = 0; i < favsCars.length; i++) {
      if (favsCars[i] != id) {
        favCars.push(favsCars[i]);
      }
    }
    for (let i = 0; i < favsCars.length; i++) {
      document.getElementById("Favorites").innerHTML = `
          <div><i class="fa-solid fa-heart"></i></div>
          <div>Saved (0)</div>
          `;
    }
    localStorage.setItem("favsCars", JSON.stringify(favCars));
  }
  let floor2 = document.getElementById("floor2");
  if (floor2.style.display == "block") {
    floor2.style.display = "none";
  }
  renderHTML();
  addDeleteListFavs();
  list();
}

function check(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  return favsCars.includes(id);
}

function listMenu() {
  let listmenu = document.getElementById("menu");
  let favorites = document.getElementById("favorites2");
  let floor = document.getElementById("floor2");

  if (listmenu.style.display == "none") {
    listmenu.style.display = "block";
    favorites.style.display = "none";
    floor.style.display = "block";
  } else {
    floor.style.display = "none";
    listmenu.style.display = "none";
  }
}

function searchCars() {
  let carlist = JSON.parse(localStorage.getItem("carlist") || "[]");
  let featurelist = JSON.parse(localStorage.getItem("featurelist") || "[]");

  let carsModel = document.getElementById("carsModel");
  let carsBrand = document.getElementById("carsBrand");
  let carsEngine = document.getElementById("carsEngine");

  let foundCars = ``;
  for (let i = 0; i < carlist.length; i++) {
    let featureHTml = ``;
    let addedFeatureCount = 0;
    for (let a = 0; a < featurelist.length; a++) {
      if (carlist[i].features.includes(String(featurelist[a].id))) {
        featureHTml += `<span>${featurelist[a].name}</span> `;
        addedFeatureCount++;
      }
      if (addedFeatureCount === 4) {
        break;
      }
    }
    if (
      carlist[i].model.toLowerCase().includes(carsModel.value.toLowerCase()) &&
      carlist[i].brand.toLowerCase().includes(carsBrand.value.toLowerCase()) &&
      carlist[i].engine.toLowerCase().includes(carsEngine.value.toLowerCase())
    ) {
      foundCars += `<div class="carInfo" id="carInfo${carlist[i].id}">
          <a href="details.html#${carlist[i].id}" class="image" style="
          background-image: url(${carlist[i].img});"></a>
          <div class="text">
          <div class="name">
          <span>${carlist[i].brand}</span> <span>${carlist[i].model}</span>
          </div>
          <div class="engineYear">
          <span>${carlist[i].engine}L</span> <span>${carlist[i].year}</span>
          </div>
          <div class="features">${featureHTml}</div>
          <div class="price"><span>$</span> <span>${
            carlist[i].price
          }</span></div>
            <div class="about">
            <span>${carlist[i].millage} millage</span>
            <span>${carlist[i].fuel}</span><span>${
        carlist[i].transmission
      }</span>
              <span>${carlist[i].color}</span>
              </div>
              </div>
              ${
                check(carlist[i].id)
                  ? `<div class="favs" onclick="addDeleteFavs(${carlist[i].id})">
                <i class="fa-solid fa-heart"></i>
                </div>`
                  : `<div class="favs" onclick="addDeleteFavs(${carlist[i].id})">
                <i class="fa-regular fa-heart"></i>
                </div>`
              }
                </div> `;
    }
  }
  document.getElementById("home-carsholder").innerHTML =
    foundCars || "The car you were looking for was not found";
}
function addDeleteListFavs(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
  if (!favsCars.includes(id)) {
    let favorites = document.getElementById("Favorites");
    let listFavorite = document.getElementById("listFavorite");
    for (let i = 0; i < favsCars.length; i++) {
      favorites.innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (${favsCars.length})</div>
      `;

      listFavorite.innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (${favsCars.length})</div>
      `;
    }
  }
}
addDeleteListFavs();
