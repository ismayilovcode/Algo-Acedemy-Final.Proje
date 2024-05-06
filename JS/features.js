function addvertFeatures() {
  input1 = document.getElementById("input1");
  input2 = document.getElementById("input2");
  input3 = document.getElementById("input3");
  input4 = document.getElementById("input4");
  input5 = document.getElementById("input5");
  input6 = document.getElementById("input6");
  input7 = document.getElementById("input7");
  input8 = document.getElementById("input8");

  let todos = JSON.parse(localStorage.getItem("Features") || "[]");
  let maxId = 0;
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id > maxId) {
      maxId = todos[i].id;
    }
  }

  let newtodo = {
    id: maxId + 1,
    city: input1.value,
    doors: input2.value,
    gear: input3.value,
    banType: input4.value,
    seatHeating: input5.value,
    parkingCamera: input6.value,
    parkingRadar: input7.value,
    wingMirror: input8.value,
  };

  todos.push(newtodo);

  localStorage.setItem("Features", JSON.stringify(todos));
  input1.value = "";
  input2.value = "";
  input3.value = "";
  input4.value = "";
  input5.value = "";
  input6.value = "";
  input7.value = "";
  input8.value = "";

  renderHTML();
}
