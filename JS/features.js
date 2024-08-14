function features() {
  input1 = Boolean(String(document.getElementById("input1").value).trim())
    ? document.getElementById("input1")
    : false;

  let featurelist = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let maxId = 0;
  for (let i = 0; i < featurelist.length; i++) {
    if (featurelist[i].id > maxId) {
      maxId = featurelist[i].id;
    }
  }

  let newtodo = {
    id: maxId + 1,
    name: input1.value,
  };

  featurelist.push(newtodo);

  if (Boolean(input1)) {
    localStorage.setItem("featurelist", JSON.stringify(featurelist));
  } else {
    alert("Could not be created");
  }

  input1.value = "";
  renderFeatureHTML();
}

function renderFeatureHTML() {
  let featurelist = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let feature = ``;
  for (let i = 0; i < featurelist.length; i++) {
    feature += `
    <div class="feature">
    <h1>${featurelist[i].name}</h1>
    <div class="buttons">
    <div class="addfeature" onclick="deletFeature(${featurelist[i].id})">Delete <i class="fa-solid fa-trash"></i></div>
    </div>
    </div>
    `;
  }

  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
  for (let i = 0; i < favsCars.length; i++) {
    document.getElementById("Favorites").innerHTML = `
    <div><i class="fa-solid fa-heart"></i></div>
    <div>Saved (${favsCars.length})</div>
    `;
  }
  document.getElementById("featuresParent").innerHTML = feature;
}
renderFeatureHTML();

function deletFeature(id) {
  let feature = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let newFeature = [];

  for (let i = 0; i < feature.length; i++) {
    if (feature[i].id != id) {
      newFeature.push(feature[i]);
    }
  }
  localStorage.setItem("featurelist", JSON.stringify(newFeature));

  renderFeatureHTML();
}
renderFeatureHTML();

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

  let newFavCars = ``;
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
  let carlist = JSON.parse(localStorage.getItem("carlist") || "[]");

  for (let i = 0; i < carlist.length; i++) {
    if (favsCars.includes(carlist[i].id)) {
      newFavCars += `
      <div class="carParent">
        <div class="favoriteCar">
        <a href="details.html#${carlist[i].id}" class="image" style="
        background-image: url(${carlist[i].img});"></a>
          <div class="carText">
            <div class="modelName">
              <h3>${carlist[i].brand}</h3>
              <h3>${carlist[i].model}</h3>
            </div>
            <span>${carlist[i].engine}</span> <span>${carlist[i].fuel}</span>
            <span>${carlist[i].transmission}</span>
            <span>${carlist[i].year}</span>
          </div>
        </div>
        <div class="carAbout">
          <span>${carlist[i].millage} Millage</span> <div id="button${carlist[i].id}" onclick="DeleteFavs(${carlist[i].id})" class="buttonType" ><i class="fa-solid fa-heart"></i></div>
        </div>
      </div>
     `;
    }
  }
  document.getElementById("carfavorite").innerHTML =
    newFavCars || "No favorite!";
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
  renderFeatureHTML();
  addDeleteListFavs();
  list();
}

function listMenu() {
  let listmenu = document.getElementById("menu");
  let favorites = document.getElementById("favorites2");
  let floor2 = document.getElementById("floor2");

  if (listmenu.style.display == "none") {
    listmenu.style.display = "block";
    favorites.style.display = "none";
    floor2.style.display = "block";
  } else {
    floor2.style.display = "none";
    listmenu.style.display = "none";
  }
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
