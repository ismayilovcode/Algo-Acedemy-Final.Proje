function addvertCar() {
  input1 = Boolean(String(document.getElementById("input1").value).trim())
    ? document.getElementById("input1")
    : false;
  input2 = Boolean(String(document.getElementById("input2").value).trim())
    ? document.getElementById("input2")
    : false;
  input3 = Boolean(String(document.getElementById("input3").value).trim())
    ? document.getElementById("input3")
    : false;
  input4 = Boolean(String(document.getElementById("input4").value).trim())
    ? document.getElementById("input4")
    : false;
  input5 = Boolean(String(document.getElementById("input5").value).trim())
    ? document.getElementById("input5")
    : false;
  input6 = Boolean(String(document.getElementById("input6").value).trim())
    ? document.getElementById("input6")
    : false;
  input7 = Boolean(String(document.getElementById("input7").value).trim())
    ? document.getElementById("input7")
    : false;
  input8 = Boolean(String(document.getElementById("input8").value).trim())
    ? document.getElementById("input8")
    : false;
  input9 = Boolean(String(document.getElementById("input9").value).trim())
    ? document.getElementById("input9")
    : false;
  input10 = Boolean(String(document.getElementById("input10").value).trim())
    ? document.getElementById("input10")
    : false;
  input11 = Boolean(String(document.getElementById("input11").value).trim())
    ? document.getElementById("input11")
    : false;
  input12 = Boolean(String(document.getElementById("input12").value).trim())
    ? document.getElementById("input12")
    : false;

  addedFeatures = [];
  let carlist = JSON.parse(localStorage.getItem("carlist") || "[]");
  let maxId = 0;
  for (let i = 0; i < carlist.length; i++) {
    if (carlist[i].id > maxId) {
      maxId = carlist[i].id;
    }
  }

  for (let i = 0; i < input12.length; i++) {
    if (input12[i].selected) {
      addedFeatures.push(input12[i].value);
    }
  }

  let featurelist = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let newtodo = {
    id: maxId + 1,
    brand: input1.value,
    model: input2.value,
    engine: input3.value,
    year: input4.value,
    bodyType: input5.value,
    color: input6.value,
    millage: input7.value,
    fuel: input8.value,
    transmission: input9.value,
    img: input10.value,
    price: input11.value,
    features: addedFeatures,
  };

  carlist.push(newtodo);

  if (
    Boolean(
      input1 &&
        input2 &&
        input3 &&
        input4 &&
        input5 &&
        input6 &&
        input7 &&
        input8 &&
        input9 &&
        input10 &&
        input11 &&
        input12
    )
  ) {
    localStorage.setItem("carlist", JSON.stringify(carlist));
  } else {
    alert("Could not be created");
  }

  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  input5.value = "";
  input6.value = "";
  input7.value = "";
  input8.value = "";
  input9.value = "";
  input10.value = "";
  input11.value = "";
  input12.value = "";
}

function addedFeature() {
  let feature = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let option = document.getElementById("input12");
  newFeature = ``;

  for (i = 0; i < feature.length; i++) {
    newFeature += `
      <option value="${feature[i].id}">${feature[i].name}</option>
      `;
    option.innerHTML = newFeature;
  }

  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
  for (let i = 0; i < favsCars.length; i++) {
    document.getElementById("Favorites").innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (${favsCars.length})</div>
      `;
  }
}
addedFeature();

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
  let floor2 = document.getElementById("floor2");
  if (floor2.style.display == "block") {
    floor2.style.display = "none";
  }
  addedFeature();
  list();
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

function listMenu() {
  let listmenu = document.getElementById("menu");
  let favorites = document.getElementById("favorites2");
  let floor = document.getElementById("floor");

  if (listmenu.style.display == "none") {
    listmenu.style.display = "block";
    floor.style.display = "block";
    favorites.style.display = "none";
  } else {
    floor.style.display = "none";
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
