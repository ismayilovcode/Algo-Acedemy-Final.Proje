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

  let todos = JSON.parse(localStorage.getItem("carlist") || "[]");
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
    // features: input12.value,
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
  // input12.value = "";
}

