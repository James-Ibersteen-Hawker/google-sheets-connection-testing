const ENDPOINT =
  "https://script.google.com/macros/s/AKfycby8rg83ZMgLbj94vJBPpc2YrB5CYSpSxmdBruP1BbmtKyusm11uNBKObMTEU3TcSEaR/exec";

async function loadData() {
  const elem = document.querySelector("#output");
  elem.setAttribute("style", "background-color: rgb(255,0,0);");
  const img = document.querySelector("#imgOutput");
  elem.textContent = "output loading";
  img.src = "";
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    elem.textContent = JSON.stringify(data);
    const { IMAGE1, BG } = data[0];
    const makeBG = (BG) => {
      if (BG.includes("http")) return `url(${BG})`;
      else return BG || "rgb(0,255,0)";
    };
    elem.setAttribute("style", `background: ${makeBG(BG)}`);
    img.src = IMAGE1;
  } catch (err) {
    elem.textContent = `Error: ${err}`;
  }
}
