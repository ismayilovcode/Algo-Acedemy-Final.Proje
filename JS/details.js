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
      document.getElementById("details").innerHTML += `
      <div class="carInfos">
      <a href="details.html#${foundCar.id}" class="image"><img src="${
        foundCar.img
      }" alt="" /></a>
      <div class="text">
      <div class="nameModel">
      <span>${foundCar.brand}</span><span>${foundCar.model}</span>
      </div> 
      <span>${foundCar.engine}</span> 
      <div class="about">
      <span>${foundCar.year}</span> • <span>${
        foundCar.millage
      }   Miles</span> • <span>${foundCar.fuel}</span>
      </div>
      <div class="price"><span>$</span> <span>${foundCar.price}</span></div>
          </div>
          ${
            check(foundCar.id)
              ? `<div class="favorite" onclick="addDeleteFavs(${foundCar.id})"><i class="fa-solid fa-heart"></i></div>`
              : `<div class="favorite" onclick="addDeleteFavs(${foundCar.id})"><i class="fa-regular fa-heart"></i></div>`
          }
          </div> 
          `;

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
  //
  let carArr = JSON.parse(localStorage.getItem("carlist") || "[]");
  for (let i = 0; i < carArr.length; i++) {
    let carArr = JSON.parse(localStorage.getItem("carlist") || "[]");
    let x = ``;
    x += `
    <div class="image">
    <img src="${carArr[i].img}" alt="" />
  </div>
  <div class="text">
    <div class="name">
      <h2>Brand: ${carArr[i].brand}</h2>
      <h2>Model: ${carArr[i].model}</h2>
    </div>
    <div class="engine">
      <span>Engine: ${carArr[i].engine}</span>
    </div>
    <div class="about">
      <span>Year: ${carArr[i].year}</span> <span>•</span>
      <span>Millage: ${carArr[i].millage}</span> <span>•</span>
      <span>Fuel: ${carArr[i].fuel}</span>
    </div>
    <div id="features">
      <span>feature 1</span><span>feature 2</span><span>feature 3</span
      ><span>feature 4</span>
    </div>
    <div class="price">
      <span>Price: ${carArr[i].price}</span>
      </div>
      ${
        check(carArr[i].id)
          ? `<div class="favorite" onclick="addDeleteFavs(${carArr[i].id})"><i class="fa-solid fa-heart"></i></div>`
          : `<div class="favorite" onclick="addDeleteFavs(${carArr[i].id})"><i class="fa-regular fa-heart"></i></div>`
      }
  </div>
    `;
    document.getElementById("details").innerHTML = x;
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
  } else {
    favsCars.push(id);
    localStorage.setItem("favsCars", JSON.stringify(favsCars));
  }
  renderDetailsHtml();
}
list();

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
  }
  renderDetailsHtml();
  list();
}
//
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
      <div class="carfavorite">
      <div class="saved">
        <span>Saved</span>
        <span onclick="DeleteFavs(id)"><i class="fa-solid fa-xmark"></i></span>
      </div>
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
          <span>${todos[i].millage} Millage</span>
          <div id="button${todos[i].id}" onclick="DeleteFavs(${todos[i].id})" class="buttonType" ><i class="fa-solid fa-heart"></i></div>
        </div>
      </div>
    </div>
     `;
    }
  }
  document.getElementById("favorites2").innerHTML = y;
}
