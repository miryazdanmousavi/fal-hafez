const button = document.getElementById("btn");
const title = document.getElementById("title");
const text = document.getElementById("text");
const tip = document.getElementById("tip");

title.classList.add("hidden");
text.classList.add("hidden");

let isShown = false;

button.addEventListener("click", () => {
  title.classList.remove("hidden");
  text.classList.remove("hidden");
  tip.classList.add("hidden");
  isShown = true;

  generateFal();
});

async function generateFal() {
  const falPath = "./fal.json";
  const randomFalNumber = Math.floor(Math.random() * 200);
  try {
    const response = await fetch(falPath);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();

    title.innerHTML = json[randomFalNumber].title;
    text.innerHTML = json[randomFalNumber].interpreter;

    if (isShown === true) {
      button.innerHTML = "گرفتن فال مجدد";
    }
  } catch (error) {
    console.error(error.message);
  }
}
