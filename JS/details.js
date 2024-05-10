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
    <div class="carInfo">
    <a href="details.html#${foundCar.id}" class="image"><img src="${
      foundCar.img
    }" alt="" /></a>
     <div class="text">
       <div class="name">
       <span>${foundCar.brand}</span><span>${foundCar.model}</span>
       </div> 
       <div class="about">
       <span>${foundCar.engine}</span> • <span>${
      foundCar.millage
    }  miles</span> • <span>${foundCar.fuel}</span>
       </div>
       <div class="features">
      <span>Features 1</span>
      <span>Features 2</span>
      <span>Features 3</span>
      <span>Features 4</span>
       </div>
       <div class="price"><span>$</span> <span>${foundCar.price}</span></div>
         </div>
         </div>  
         ${
           check(foundCar.id)
             ? `<div class="favs" onclick="addDeleteFavs(${foundCar.id})"><i class="fa-solid fa-heart"></i></div>`
             : `<div class="favs" onclick="addDeleteFavs(${foundCar.id})"><i class="fa-regular fa-heart"></i></div>`
         }
         </div>
     `;
  } else {
    document.getElementById("details").innerHTML = "Car not found...";
  }
}

//

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
      <div class="carInfo">
      <a href="details.html#${todos[i].id}" class="image"><img src="${todos[i].img}" alt="" /></a>
       <div class="text">
         <div class="name">
           <span>${todos[i].model}</span>
         </div>
         <div class="engineYear">
           <span>${todos[i].engine}</span> <span>${todos[i].year}</span>
         </div>
         <div class="features">
        <span>Features 1</span>
        <span>Features 2</span>
        <span>Features 3</span>
        <span>Features 4</span>
         </div>
         <div class="price"><span>$</span> <span>${todos[i].price}</span></div>
         <div class="about">
           <span>${todos[i].millage} miles</span>
           <span>${todos[i].fuel}</span><span>${todos[i].transmission}</span>
           <span>${todos[i].color}</span>
           </div>
           </div>
        
     <button type="button" id="button${todos[i].id}" onclick="DeleteFavs(${todos[i].id})" class="buttonType" >Delete</button>
           </div>
     `;
    }
  }
  document.getElementById("favorite-carsHolder").innerHTML = y;
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
  renderHTML();
}

function check(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  return favsCars.includes(id);
}
