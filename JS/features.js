function features() {
  input1 = document.getElementById("input1");

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

  localStorage.setItem("featurelist", JSON.stringify(todos));
  renderHTML();
}

function renderHTML() {
  let todos = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let x = ``;
  for (let i = 0; i < todos.length; i++) {
    x += `
    <div id="feature">
    <h1>${todos[i].name}</h1>
    <button type="button" class="addCar" onclick="addedCar()">Added Car</button>
    <div class="buttons">
    <button type="button" onclick="deletFeature(${todos[i].id})">delete</button>
    <button type="button">edit</button>
    </div>
    </div>
    `;
  }
  document.getElementById("features").innerHTML = x;
}
renderHTML();

function deletFeature(id) {
  let feature = JSON.parse(localStorage.getItem("feature") || "[]");
  
  if (localStorage.getItem("feature").includes(id)) {
    let x = [];
    for (let i = 0; i < feature.length; i++) {
      if (feature[i] != id) {
        x.push(feature[i]);
      }
    }
    localStorage.setItem("feature", JSON.stringify(x));
  } else {
    feature.push(id);
    localStorage.setItem("feature", JSON.stringify(feature));
  }
  renderHTML();
}
renderHTML();
