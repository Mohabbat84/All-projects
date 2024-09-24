document.getElementById("btn").addEventListener("click", function () {
  const length = parseInt(document.getElementById("inp").value);
  const includeUpperCase = document.getElementById("ucl").checked;
  const includeLowerCase = document.getElementById("lcl").checked;
  const includeNumbers = document.getElementById("nums").checked;
  const includeSymbols = document.getElementById("symbol").checked;

  const password = generatePassword(
    length,
    includeUpperCase,
    includeLowerCase,
    includeNumbers,
    includeSymbols
  );
  document.getElementById("password").textContent = password;
});

function generatePassword(
  length,
  includeUpperCase,
  includeLowerCase,
  includeNumbers,
  includeSymbols
) {
  const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()-_=+";

  let chars = "";
  if (includeUpperCase) chars += upperCaseChars;
  if (includeLowerCase) chars += lowerCaseChars;
  if (includeNumbers) chars += numberChars;
  if (includeSymbols) chars += symbolChars;

  if (chars === "") {
    return "Please select at least one character type.";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  return password;
}