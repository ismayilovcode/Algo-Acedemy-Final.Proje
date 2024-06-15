function renderDetailsHtml() {
  let hash = location.hash;
  if (hash.length) {
    let hashId = Number(hash.slice(1, hash.length));
    let carArr = JSON.parse(localStorage.getItem("carlist") || "[]");
    let foundCar = null;

    for (let i = 0; i < carArr.length; i++) {
      if (carArr[i].id == hashId) {
        foundCar = carArr[i];
        break;
      }
    }

    if (foundCar) {
      document.getElementById("details").innerHTML = `
      <div class="image" style="background-image: url(${foundCar.img});">
    </div>
    <div class="text">
      <div class="name">
        <h2>Brand: ${foundCar.brand}</h2>
        <h2>Model: ${foundCar.model}</h2>
      </div>
      <div class="engine">
        <span>Engine: ${foundCar.engine}</span>
      </div>
      <div class="about">
        <span>Year: ${foundCar.year}</span> <span>•</span>
        <span>Millage: ${foundCar.millage}</span> <span>•</span>
        <span>Fuel: ${foundCar.fuel}</span>
      </div>
      
      <div id="features"></div>
      <div class="price">
        <span>Price: ${foundCar.price}$</span>
        </div>
        ${
          check(foundCar.id)
            ? `<div class="favorite" onclick="addDeleteFavs(${foundCar.id})"><i class="fa-solid fa-heart"></i></div>`
            : `<div class="favorite" onclick="addDeleteFavs(${foundCar.id})"><i class="fa-regular fa-heart"></i></div>`
        }
        <div class="deleteButton" onclick="DeleteCar(${
          foundCar.id
        })"><i class="fa-solid fa-trash"></i></div>
        </div>
    </div>
          `;
      let carlist = JSON.parse(localStorage.getItem("carlist") || "[]");
      let featurelist = JSON.parse(localStorage.getItem("featurelist") || "[]");
      let carsFeatures = ` `;
      for (i = 0; i < foundCar.features.length; i++) {
        for (a = 0; a < featurelist.length; a++) {
          if (featurelist[a].id == foundCar.features[i]) {
            carsFeatures += `
            <span> ${featurelist[a].name}  </span>
              `;
          }
        }
        document.getElementById("features").innerHTML = carsFeatures;

        let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
        for (let i = 0; i < favsCars.length; i++) {
          document.getElementById("Favorites").innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (${favsCars.length})</div>
      `;
        }
      }

      document.getElementById("tableParent").innerHTML = `
      <div class="bgParent">
      <div class="bg">
        <h2>Car details</h2>
        <div class="parent">
          <div class="left">
            <table>
              <tr>
                <th>Brand:</th>
                <td>${foundCar.brand}</td>
              </tr>
              <tr class="selected">
                <th>Model:</th>
                <td>${foundCar.model}</td>
              </tr>
              <tr>
                <th>Year:</th>
                <td>${foundCar.year}</td>
              </tr>
              <tr class="selected">
                <th>Engine:</th>
                <td>${foundCar.engine}</td>
              </tr>
              <tr>
                <th>Color:</th>
                <td>${foundCar.color}</td>
              </tr>
            </table>
          </div>
          <div class="right">
            <table>
              <tr>
                <th>Fuel:</th>
                <td>${foundCar.fuel}</td>
              </tr>
              <tr class="selected">
                <th>Millage:</th>
                <td>${foundCar.millage}</td>
              </tr>
              <tr>
                <th>BodyType:</th>
                <td>${foundCar.bodyType}</td>
              </tr>
              <tr class="selected">
                <th>Transmission:</th>
                <td>${foundCar.transmission}</td>
              </tr>
              <tr>
                <th>Price:</th>
                <td>${foundCar.price}</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="responsivTable">
      <h2>Car details</h2>
      <table>
        <tr class="selected">
          <th>Brand:</th>
          <td>${foundCar.brand}</td>
        </tr>
        <tr>
          <th>Model:</th>
          <td>${foundCar.model}</td>
        </tr>
        <tr class="selected">
          <th>Year:</th>
          <td>${foundCar.year}</td>
        </tr>
        <tr>
          <th>Engine:</th>
          <td>${foundCar.engine}</td>
        </tr>
        <tr class="selected">
          <th>Color:</th>
          <td>${foundCar.color}</td>
        </tr>
        <tr>
          <th>Fuel:</th>
          <td>${foundCar.fuel}</td>
        </tr>
        <tr class="selected">
          <th>Millage:</th>
          <td>${foundCar.millage}</td>
        </tr>
        <tr>
          <th>BodyType:</th>
          <td>${foundCar.bodyType}</td>
        </tr>
        <tr class="selected">
          <th>Transmission:</th>
          <td>${foundCar.transmission}</td>
        </tr>
        <tr>
          <th>Price:</th>
          <td>${foundCar.price}</td>
        </tr>
      </table>
    </div>
            `;
    } else {
      document.getElementById("details").innerHTML = "Car not found...";
    }
  }
}
renderDetailsHtml();

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
  renderDetailsHtml();
  addDeleteListFavs();
}
renderDetailsHtml();

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
  renderDetailsHtml();
  addDeleteListFavs();
  list();
}

function check(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  return favsCars.includes(id);
}

function addfavs(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  if (!favsCars.includes(id)) {
    favsCars.push(id);
  }

  localStorage.setItem("favsCars", JSON.stringify(favsCars));
  renderDetailsHtml();
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

function DeleteCar(id) {
  let carlist = JSON.parse(localStorage.getItem("carlist") || "[]");
  let newCarInfo = [];

  for (let i = 0; i < carlist.length; i++) {
    if (carlist[i].id != id) {
      newCarInfo.push(carlist[i]);
    }
  }
  localStorage.setItem("carlist", JSON.stringify(newCarInfo));
  renderDetailsHtml();
  location.reload();

  //
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  if (favsCars.includes(id)) {
    let favCars = [];
    for (let i = 0; i < favsCars.length; i++) {
      if (favsCars[i] != id) {
        favCars.push(favsCars[i]);
      }
    }
    localStorage.setItem("favsCars", JSON.stringify(favCars));
  }
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
