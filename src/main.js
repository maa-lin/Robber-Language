const vowels = ["a", "e", "i", "o", "u", "y", "å", "ä", "ö"];

const omvandla = () => {
  const input = prompt("Omvandla text till rövarspråk.").toLowerCase();

  let result = "";

  for (let i = 0; i < input.length; i++) {
    // const indexOfVowel = vowels.indexOf(input[i]);

    // if (indexOfVowel >= 0) {
    //   result += input[i];
    // } else {
    //   result += input[i] + "o" + input[i];
    // }

    let foundVowel = false;
    for (let j = 0; j < vowels.length; j++) {
      if (input[i] === vowels[j]) {
        foundVowel = true;
        break;
      }
    }

    if (foundVowel || input[i] === " ") {
      result += input[i];
    } else {
      result += input[i] + "o" + input[i];
    }
  }
  const inputRS = document.createElement("p");
  inputRS.className = "text";
  inputRS.innerHTML = result;
  document.getElementById("app").appendChild(inputRS);
};

omvandla();
