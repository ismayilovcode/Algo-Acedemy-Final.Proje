function features() {
  input1 = Boolean(String(document.getElementById("input1").value).trim())
    ? document.getElementById("input1")
    : false;

  let todos = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let maxId = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > maxId) {
      maxId = todos[i].id;
    }
  }

  let newtodo = {
    id: maxId + 1,
    name: input1.value,
  };

  todos.push(newtodo);

  if (Boolean(input1)) {
    localStorage.setItem("featurelist", JSON.stringify(todos));
  } else {
    alert("yaradila bilmedi");
  }

  input1.value = "";
  renderFeatureHTML();
}

function renderFeatureHTML() {
  let todos = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let x = ``;
  for (let i = 0; i < todos.length; i++) {
    x += `
    <div class="feature">
    <h1>${todos[i].name}</h1>
    <div class="buttons">
    <div class="addfeature" onclick="deletFeature(${todos[i].id})">Delete <i class="fa-solid fa-trash"></i></div>
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
  document.getElementById("featuresParent").innerHTML = x;
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
  renderFeatureHTML();
  list();
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
