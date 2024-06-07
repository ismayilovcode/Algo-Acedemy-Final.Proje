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
    alert("yaradıla bilmədi");
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

  if (favorites.style.display == "none") {
    floor.style.display = "block";
    favorites.style.display = "block";
    menulist.style.display = "none";
  } else {
    floor.style.display = "none";
    favorites.style.display = "none";
  }

  let favCars = ``;
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
  let todos = JSON.parse(localStorage.getItem("carlist") || "[]");

  for (let i = 0; i < todos.length; i++) {
    if (favsCars.includes(todos[i].id)) {
      favCars += `
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
  document.getElementById("carfavorite").innerHTML = favCars || "No favorite!";
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
    localStorage.setItem("favsCars", JSON.stringify(favCars));

    for (let i = 0; i < favsCars.length; i++) {
      document.getElementById("Favorites").innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (0)</div>
      `;
    }
  }
  renderFeatureHTML();
  list();
}

function listMenu() {
  let listmenu = document.getElementById("menu");
  let favorites = document.getElementById("favorites2");
  let floor = document.getElementById("floor");

  if (listmenu.style.display == "none") {
    listmenu.style.display = "block";
    favorites.style.display = "none";
    floor.style.display = "block";
  } else {
    floor.style.display = "none";
    listmenu.style.display = "none";
  }
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
