function renderHTML() {
  let todos = JSON.parse(localStorage.getItem("carlist") || "[]");
  let x = ``;

  for (let i = 0; i < todos.length; i++) {
    x += `
    <div class="carInfo">
    <a href="details.html#${todos[i].id}" class="image"><img src="${
      todos[i].img
    }" alt="" /></a>
     <div class="text">
       <div class="name">
       <span>${todos[i].brand}</span> <span>${todos[i].model}</span>
       </div>
       <div class="engineYear">
         <span>${todos[i].engine}</span> <span>${todos[i].year}</span>
       </div>
       <div id="features">
      <span>Features 1</span>
      <span>Features 2</span>
      <span>Features 3</span>
      <span>Features 4</span>
       </div>
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
         </div> 
     `;
  }
  document.getElementById("home-carsholder").innerHTML = x;
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
          <span>${todos[i].millage} Millage</span> <div id="button${todos[i].id}" onclick="DeleteFavs(${todos[i].id})" class="buttonType" ><i class="fa-solid fa-heart"></i></div>
        </div>
      </div>
    </div>
     `;
    }
  }
  document.getElementById("favorites2").innerHTML = y;
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
  } else {
    favsCars.push(id);
    localStorage.setItem("favsCars", JSON.stringify(favsCars));
  }
  renderHTML();
}
list();
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
    localStorage.setItem("favsCars", JSON.stringify(x));
  }
  renderHTML();
  list();
}

function check(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  return favsCars.includes(id);
}
