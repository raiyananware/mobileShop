var deg = 0;

function signUpCard() {
  let signIn_card = document.getElementById("signIn"),
    signUp_card = document.getElementById("signUp"),
    forgetPass = document.getElementById("forgetPass"),
    card = document.getElementById("card"),
    subCard = document.getElementById("subCard");
  deg += 180;
  card.style = `transform: rotateY(${deg}deg);  transition: transform 1s`;
  subCard.style = `transform: rotateY(${deg}deg);  transition: transform 1s;transform-style: preserve-3d;`;

  setTimeout(() => {
    signIn_card.setAttribute("hidden", "hidden");
    forgetPass.setAttribute("hidden", "hidden");
    signUp_card.removeAttribute("hidden");
  }, 400);
}

function signInCard() {
  let signIn_card = document.getElementById("signIn"),
    signUp_card = document.getElementById("signUp"),
    forgetPass = document.getElementById("forgetPass"),
    card = document.getElementById("card"),
    subCard = document.getElementById("subCard");
  deg += 180;
  card.style = `transform: rotateY(${deg}deg);  transition: transform 1s`;
  subCard.style = `transform: rotateY(${deg}deg);  transition: transform 1s;transform-style: preserve-3d;`;

  setTimeout(() => {
    signUp_card.setAttribute("hidden", "hidden");
    forgetPass.setAttribute("hidden", "hidden");
    signIn_card.removeAttribute("hidden");
  }, 400);
}

function forgetPass() {
  let signIn_card = document.getElementById("signIn"),
    signUp_card = document.getElementById("signUp"),
    forgetPass = document.getElementById("forgetPass"),
    card = document.getElementById("card"),
    subCard = document.getElementById("subCard");
  deg += 180;
  card.style = `transform: rotateY(${deg}deg);  transition: transform 1s`;
  subCard.style = `transform: rotateY(${deg}deg);  transition: transform 1s;transform-style: preserve-3d;`;

  setTimeout(() => {
    signIn_card.setAttribute("hidden", "hidden");
    signUp_card.setAttribute("hidden", "hidden");
    forgetPass.removeAttribute("hidden");
  }, 400);
}

async function findUser(username) {
  const data = await fetchData("../data/users.json");
  const foundUser = data.users.find((user) => user.username === username);
  return foundUser || null;
}

async function logIn() {
  let username = document.getElementById("username1").value,
    password = document.getElementById("password1").value;
  const foundUser = await findUser(username);

  if (foundUser == null) {
    alert("User not Found");
  } else if ((foundUser != null) & (foundUser["password"] != password)) {
    alert("invalid Password");
  } else if ((foundUser != null) & (foundUser["password"] == password)) {
    loggedIn(username);
  }
}

async function getPass() {
  let username = document.getElementById("username3").value,
    text = document.getElementById("answer").value,
    ans = document.getElementById("passAns");
  const foundUser = await findUser(username);

  if ((foundUser != null) & (text == "Text")) {
    ans.innerText = "Password is:- " + foundUser["password"];
  }
}

function createAcc() {
  alert("Currently Sign-Up is not working this feature will be added shortly");
}
