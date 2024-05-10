const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  //the input fields in HTML don't have classes or IDs
  const dividendEl = document.querySelector("input[name='dividend']").value;
  const dividerEl = document.querySelector("input[name='divider']").value;

  let answer = Math.floor(dividend / divider);

  try {
    if (dividend % divider !== 0) {
      result.innerText = answer;
    }
    if (dividendEl == "" || dividerEl == "") {
      throw new Error(
        "Division not performed. Both values are required in inputs. Try again."
      );
    } else if (dividerEl == 0) {
      throw new Error(
        "Division not performed. Invalid number provided. Try again."
      );
    } else if (isNaN(dividendEl) || isNaN(dividerEl)) {
      throw new Error(
        (document.body.innerText =
          "Something critical went wrong. Please reload the page")
      );
    } else result.innerText = answer;
  } catch (error) {
    result.innerText = error.message;
  }

  console.log(result.innerText);
});
