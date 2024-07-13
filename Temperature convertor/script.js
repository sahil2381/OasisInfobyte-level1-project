const inputs = document.querySelectorAll(".panel input");
const cel = document.querySelector("#celsius");
const fr = document.querySelector("#fahrenheit");
const kv = document.querySelector("#kelvin");

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    const unit = e.target.id;
    const val = parseInt(e.target.value);

    if (unit === "celsius") {
      fr.value = parseFloat(val * 1.8 + 32).toFixed(4) * 1;
      kv.value = parseFloat(val + 273.15).toFixed(4) * 1;
    }
     else if (unit === "fahrenheit") {
      cel.value = parseFloat((val - 32) * 5 / 9).toFixed(4) * 1;
      kv.value = parseFloat(((val - 32) * 5 / 9) + 273.15).toFixed(4) * 1;
    }
     else if (unit === "kelvin") {
      cel.value = parseFloat(val - 273.15).toFixed(4) * 1;
      fr.value = parseFloat((val - 273.15) * 9 / 5 + 32).toFixed(4) * 1;
    }

  });
});
