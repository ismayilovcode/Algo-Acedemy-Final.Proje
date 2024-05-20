function addvertCar() {
  input1 = document.getElementById("input1");
  input2 = document.getElementById("input2");
  input3 = document.getElementById("input3");
  input4 = document.getElementById("input4");
  input5 = document.getElementById("input5");
  input6 = document.getElementById("input6");
  input7 = document.getElementById("input7");
  input8 = document.getElementById("input8");
  input9 = document.getElementById("input9");
  input10 = document.getElementById("input10");
  input11 = document.getElementById("input11");

  let todos = JSON.parse(localStorage.getItem("carlist") || "[]");
  let maxId = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > maxId) {
      maxId = todos[i].id;
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
  };

  todos.push(newtodo);

  localStorage.setItem("carlist", JSON.stringify(todos));
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

  renderHTML();
}

function addedFeature() {
  let feature = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let option = document.getElementById("input12");
  x = ``;

  for (i = 0; i < feature.length; i++) {
    x += `
    <option value="${feature[i].id}">${feature[i].name}</option>
    `;
    option.innerHTML = x;
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

function listMenu() {
  let x = document.getElementById("menu");

  if (x.style.display == "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
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
  addedFeature();
  list();
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
    } else {
      y += `
      <h3>You haven't liked any car yet</h3>
      `;
      break;
    }
  }
  document.getElementById("carfavorite").innerHTML = y;
}
