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
        <span>Price: ${foundCar.price}</span>
        </div>
        ${
          check(foundCar.id)
            ? `<div class="favorite" onclick="addDeleteFavs(${foundCar.id})"><i class="fa-solid fa-heart"></i></div>`
            : `<div class="favorite" onclick="addDeleteFavs(${foundCar.id})"><i class="fa-regular fa-heart"></i></div>`
        }
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
            <span>${featurelist[a].name}</span>
              `;
          }
        }

        let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
        for (let i = 0; i < favsCars.length; i++) {
          document.getElementById("Favorites").innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (${favsCars.length})</div>
      `;
        }
      }
      document.getElementById("features").innerHTML = carsFeatures;

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
    let x = [];
    for (let i = 0; i < favsCars.length; i++) {
      if (favsCars[i] != id) {
        x.push(favsCars[i]);
      }
    }
    localStorage.setItem("favsCars", JSON.stringify(x));

    for (let i = 0; i < favsCars.length; i++) {
      document.getElementById("Favorites").innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (0)</div>
      `;
    }
  } else {
    favsCars.push(id);
    localStorage.setItem("favsCars", JSON.stringify(favsCars));
    for (let i = 0; i < favsCars.length; i++) {
      document.getElementById("Favorites").innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (${favsCars.length})</div>
      `;
    }
  }
  renderDetailsHtml();
}

function DeleteFavs(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  if (favsCars.includes(id)) {
    let x = [];
    for (let i = 0; i < favsCars.length; i++) {
      if (favsCars[i] != id) {
        x.push(favsCars[i]);
      }
    }
    localStorage.setItem("favsCars", JSON.stringify(x));

    for (let i = 0; i < favsCars.length; i++) {
      document.getElementById("Favorites").innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (0)</div>
      `;
    }
  }
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
  let x = document.getElementById("favorites2");

  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  let y = ``;
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
  let todos = JSON.parse(localStorage.getItem("carlist") || "[]");

  for (let i = 0; i < todos.length; i++) {
    if (favsCars.includes(todos[i].id)) {
      y += `
      <div class="carParent">
        <div class="favoriteCar">
          <div class="image">
            <img src="${todos[i].img}" alt="error" />
          </div>
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
  document.getElementById("carfavorite").innerHTML = y;
}

function listMenu() {
  let x = document.getElementById("menu");

  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
