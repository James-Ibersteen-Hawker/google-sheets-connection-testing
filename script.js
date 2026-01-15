const ENDPOINT =
  "https://script.google.com/macros/s/AKfycby8rg83ZMgLbj94vJBPpc2YrB5CYSpSxmdBruP1BbmtKyusm11uNBKObMTEU3TcSEaR/exec";

async function loadData() {
  console.time("load start");
  const elem = document.querySelector("#output");
  elem.setAttribute("style", "background-color: rgb(255,0,0);");
  const img = document.querySelector("#imgOutput");
  elem.textContent = "output loading";
  img.src = "";
  try {
    const response = await fetch(ENDPOINT);
    const data = await response.json();
    console.log(data);
    console.timeEnd("load start");
    // elem.setAttribute("style", "background-color: rgb(0,255,0);");
    elem.textContent = JSON.stringify(data, null, 2);
    const { DATE, NAME, TEST, BG, IMAGE } = data[0];
    elem.setAttribute(
      "style",
      `background: ${
        (() => {
          if (BG.includes("http")) return `url(${BG})`;
          else return BG;
        })() || "rgb(255,0,255)"
      }`
    );
    img.src = IMAGE;
  } catch (err) {
    elem.textContent = `Error: ${err}`;
  }
}
