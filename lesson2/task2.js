const buttonEl = document.querySelector("button");
const inputEl = document.querySelector("textarea");
const divEl = document.querySelector(".reviews");
buttonEl.addEventListener("click", () => {
  try {
    if (inputEl.value.length >= 50 && inputEl.value.length <= 500) {
      let newDiv = document.createElement("div");
      newDiv.className = "review";
      newDiv.textContent = inputEl.value;
      divEl.append(newDiv);
    } else {
      throw new Error("Review is incorrect length");
    }
  } catch (err) {
    console.log(err);
    alert(err);
  }
});
