function renderHTML() {
  let todos = JSON.parse(localStorage.getItem("carlist") || "[]");
  let FeaturesJson = JSON.parse(localStorage.getItem("Features") || "[]");
  let x = ``;
  // onclick="aboutCarsHolder"
  //

  // for

  //
  for (let i = 0; i < todos.length; i++) {
    x += `
    <a href="#CarsAbout${todos[i].id}">
    <div class="carInfo">
     <div class="image"><img src="${todos[i].img}" alt="" /></div>
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
         <span>${todos[i].millage} millage</span>
         <span>${todos[i].fuel}</span><span>${todos[i].transmission}</span>
         <span>${todos[i].color}</span>
       </div>
     </div>
     <div class="favs" onclick="favs(${todos[i].id})"><i class="${
      check(todos[i].id) ? "fa-solid" : "fa-regular"
    } fa-heart"></i></div>
     </div>
     <a/>
     `;
  }
  document.getElementById("home-carsholder").innerHTML = x;
}
renderHTML();

function favs(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  if (!favsCars.includes(id)) {
    favsCars.push(id);
  }

  localStorage.setItem("favsCars", JSON.stringify(favsCars));
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
    <a href="#">
      <div class="carInfo">
       <div class="image"><img src="${todos[i].img}" alt="" /></div>
       <div class="text">
         <div class="name">
           <span>${todos[i].model}</span>
         </div>
         <div class="engineYear">
           <span>${todos[i].engine}</span> <span>${todos[i].year}</span>
         </div>
         <div class="features">
           <span>Feature1</span>
           <span>Feature2</span>
           <span>Feature3</span>
           <span>Feature4</span>
         </div>
         <div class="price"><span>$</span> <span>${todos[i].price}</span></div>
         <div class="about">
           <span>${todos[i].millage} millage</span>
           <span>${todos[i].fuel}</span><span>${todos[i].transmission}</span>
           <span>${todos[i].color}</span>
         </div>
       </div>
     <button type="button" id="button${todos[i].id}" onclick="deletFavs(${todos[i].id})" class="buttonType" >Delete</button>
      </div> 
    </a>`;
    }
  }
  document.getElementById("favorite-carsHolder").innerHTML = y;
}

function deletFavs(id) {
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  if (localStorage.getItem("favsCars").includes(id)) {
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
renderHTML();

function check(id) {
  // favorit listini gotur
  // id-nin siyahida olub olmamasina bax
  // tru veya false olaraq cavab qaytar
  let favsCars = JSON.parse(localStorage.getItem("favsCars") || "[]");

  for (let i = 0; i < favsCars.length; i++) {
    if (favsCars.includes(id)) {
      return true;
    } else {
      return false;
    }
  }
}
