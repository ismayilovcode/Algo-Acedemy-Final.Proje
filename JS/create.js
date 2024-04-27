// let aboutCar = [
//   {
//     id: "number",
//     brand: "string",
//     model: "string",
//     engine: "number",
//     year: "number",
//     color: "string",
//     bodyType: "string",
//     milage: "number",
//     fuel: "string",
//     transmission: "string",
//     features: "array",
//     price: "number",
//   },
// ];

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

  let todos = JSON.parse(localStorage.getItem("todolist") || "[]");
  let maxId = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > maxId) {
      maxId = todos[i].id;
    }
  }

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

  localStorage.setItem("todolist", JSON.stringify(todos));
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
  renderHTML();
}

function renderHTML() {
  let todos = JSON.parse(localStorage.getItem("todolist") || "[]");
  let x = ``;
  // <img src="${todos[i].img}" alt="error">  
  
  for (let i = 0; i < todos.length; i++) {
    x += `
    <div class="parent">
    <div class="imgParent">
    <span class="imga">
    <img src="fotos/logo/logo2.jpg" alt="error">
    </span>
    </div>
    <span class="text">
    <h1>${todos[i].brand}</h1>
    <p>${todos[i].model},${todos[i].engine},
    ${todos[i].year},${todos[i].bodyType},${todos[i].color},
    ${todos[i].millage},${todos[i].fuel},${todos[i].transmission},
    ${todos[i].price}</p>
    </span>
    </div>
    `;
    // <button id="button${todos[i].id}" onclick="fav(${todos[i].id})">button</button>
  }
  document.getElementById("cars").innerHTML = x;
}

renderHTML();
