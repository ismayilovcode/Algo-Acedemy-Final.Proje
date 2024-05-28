function renderHTML() {
  let todos = JSON.parse(localStorage.getItem("carlist") || "[]");
  let x = ``;
  for (let i = 0; i < todos.length; i++) {
    x += `
    <div class="carInfo" id="carInfo${todos[i].id}">
    <a href="details.html#${todos[i].id}" class="image" style="
    background-image: url(${todos[i].img});"></a>
     <div class="text">
       <div class="name">
       <span>${todos[i].brand}</span> <span>${todos[i].model}</span>
       </div>
       <div class="engineYear">
       <span>${todos[i].engine}</span> <span>${todos[i].year}</span>
       </div>
       <div id="features"></div>
       <div class="price"><span>$</span> <span>${todos[i].price}</span></div>
       <div class="about">
         <span>${todos[i].millage} millage</span>
         <span>${todos[i].fuel}</span><span>${todos[i].transmission}</span>
         <span>${todos[i].color}</span>
         </div>
         </div>
         ${
           check(todos[i].id)
             ? `<div class="favs" onclick="addDeleteFavs(${todos[i].id})"><i class="fa-solid fa-heart"></i></div>`
             : `<div class="favs" onclick="addDeleteFavs(${todos[i].id})"><i class="fa-regular fa-heart"></i></div>`
         }
         <div class="deleteButton" onclick="DeleteCar(${
           todos[i].id
         })"><i class="fa-solid fa-xmark"></i></div>
            </div> 
            `;
  }
  document.getElementById("home-carsholder").innerHTML = x;

  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");
  for (let i = 0; i < favsCars.length; i++) {
    document.getElementById("Favorites").innerHTML = `
    <div><i class="fa-solid fa-heart"></i></div>
    <div>Saved (${favsCars.length})</div>
    `;
  }
}
renderHTML();

// function carsFeaturesRenderHTML() {
//   let todos = JSON.parse(localStorage.getItem("carlist") || "[]");
//   let featurelist = JSON.parse(localStorage.getItem("featurelist") || "[]");

//   for (let i = 0; i < todos.length; i++) {
//     for (let a = 0; a < 4; a++) {
//       if (todos[i].features.id == featurelist[a].id) {
//         document.getElementById("features").innerHTML += `
//         <span>${featurelist[a].name}</span>
//         `;
//       } else {
//         console.log("prablem");
//       }
//     }
//   }

//   renderHTML();
// }
// carsFeaturesRenderHTML();

function addfavs(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  if (!favsCars.includes(id)) {
    favsCars.push(id);
  }

  localStorage.setItem("favsCars", JSON.stringify(favsCars));
  renderHTML();
}

function list() {
  let x = document.getElementById("favorites2");
  let c = document.getElementById("menu");

  if (x.style.display == "none") {
    x.style.display = "block";
    c.style.display = "none";
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
  document.getElementById("carfavorite").innerHTML = y;
}

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
  renderHTML();
}
renderHTML();

function DeleteFavs(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  if (favsCars.includes(id)) {
    let x = [];
    for (let i = 0; i < favsCars.length; i++) {
      if (favsCars[i] != id) {
        x.push(favsCars[i]);
      }
    }
    for (let i = 0; i < favsCars.length; i++) {
      document.getElementById("Favorites").innerHTML = `
      <div><i class="fa-solid fa-heart"></i></div>
      <div>Saved (0)</div>
      `;
    }
    localStorage.setItem("favsCars", JSON.stringify(x));
  }
  renderHTML();
  list();
}

function DeleteCar(id) {
  let todos = JSON.parse(localStorage.getItem("carlist") || "[]");
  let newCarInfo = [];

  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id != id) {
      newCarInfo.push(todos[i]);
    }
  }
  localStorage.setItem("carlist", JSON.stringify(newCarInfo));
  renderHTML();
}

function check(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  return favsCars.includes(id);
}

function listMenu() {
  let x = document.getElementById("menu");
  let c = document.getElementById("favorites2");

  if (x.style.display == "none") {
    x.style.display = "block";
    c.style.display = "none";
  } else {
    x.style.display = "none";
  }
}
