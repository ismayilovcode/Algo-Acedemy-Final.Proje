function favorites() {
    let todos = JSON.parse(localStorage.getItem("carlist") || "[]");
    let x = ``;

  for (let i = 0; i < todos.length; i++) {
    x += `
      <div class="carInfo">
      <div class="image"><img src="${todos[i].img}" alt=""></div>
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
        <div class="price">
          <span>$</span> <span>${todos[i].price}</span>
        </div>
        <div class="about">
          <span>${todos[i].millage} millage</span> <span>${todos[i].fuel}</span> <span>${todos[i].transmission}</span> <span>${todos[i].color}</span>
      </div>
    </div>
  </div>
      `;
    // <button id="button${todos[i].id}" onclick="fav(${todos[i].id})">button</button>
  }
  document.getElementById("bura").innerHTML = x;
}

favorites();

