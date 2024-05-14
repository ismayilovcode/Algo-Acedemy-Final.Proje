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

  input1.value = "";

  todos.push(newtodo);

  localStorage.setItem("featurelist", JSON.stringify(todos));
  renderFeatureHTML();
}

function renderFeatureHTML() {
  let todos = JSON.parse(localStorage.getItem("featurelist") || "[]");
  let x = ``;
  for (let i = 0; i < todos.length; i++) {
    x += `
    <div id="feature">
    <h1>${todos[i].name}</h1>
    <div class="buttons">
    <button type="button" class="addfeature" onclick="deletFeature(${todos[i].id})">delete <i class="fa-solid fa-trash"></i></button>
    <button type="button" class="editfeature">edit <i class="fa-regular fa-pen-to-square"></i></button>
    </div>
    </div>
    `;
  }
  document.getElementById("features").innerHTML = x;
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
