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

  //No values
  const dividendEl = document.querySelector("input[name='dividend']");
  const dividerEl = document.querySelector("input[name='divider']");

  if (dividendEl.value == "" || dividerEl.value == "") {
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
  }
});
