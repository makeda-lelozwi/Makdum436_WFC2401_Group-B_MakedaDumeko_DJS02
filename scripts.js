const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  //Whole division
  result.innerText = dividend / divider;

  //Division that results in a decimal
  let answer = dividend / divider;

  if (dividend % divider !== 0) {
    result.innerText = Math.floor(answer);
  }

  
});
