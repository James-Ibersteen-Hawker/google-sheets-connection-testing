const ENDPOINT =
  "https://script.google.com/macros/s/AKfycby8rg83ZMgLbj94vJBPpc2YrB5CYSpSxmdBruP1BbmtKyusm11uNBKObMTEU3TcSEaR/exec";

async function loadData() {
  const elem = document.querySelector("#output");
  elem.setAttribute("style", "background-color: rgb(255,0,0);");
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    elem.textContent = JSON.stringify(data, null, 2);
    elem.insertAdjacentHTML("beforeend", `<img src="${data[0].IMAGES}" />`);
  } catch (err) {
    elem.textContent = `Error: ${err}`;
  }
  elem.setAttribute("style", "background-color: rgb(0,255,0);");
}
