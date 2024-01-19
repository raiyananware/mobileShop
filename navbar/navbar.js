function sidePanel(page_name) {
  const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
  const styleData = getStyle(document.getElementById("sidePanel"), "height");
  const currentSidePanelName =
    document.getElementById("sidePanelName").textContent;

  if (styleData == "0px") {
    document.getElementById("sidePanel").style.height = "50%";
    document.getElementById("sidePanelName").innerHTML = page_name;
    const navbarOptions = fetchData("../data/navBar.json");
    navbarOptions.then((data) => {
      document.getElementById("content").innerHTML = data[page_name];
    });
  } else if ((styleData != "0px") & (currentSidePanelName != page_name)) {
    document.getElementById("sidePanel").style.height = "0%";
    setTimeout(() => {
      document.getElementById("sidePanel").style.height = "50%";
      document.getElementById("sidePanelName").innerHTML = page_name;
      const navbarOptions = fetchData("../data/navBar.json");
      navbarOptions.then((data) => {
        document.getElementById("content").innerHTML = data[page_name];
      });
    }, 700);
  } else if ((styleData != "0px") & (currentSidePanelName == page_name)) {
    document.getElementById("sidePanel").style.height = "0px";
  }
}

function closePanel() {
  document.getElementById("sidePanel").style.height = "0px";
}

function signInPage() {
  window.location.replace(`../signIn/signIn.html`);
}

function signOut() {
  sessionStorage.clear();
  window.location.href = "../home/home.html";
}

document.addEventListener("DOMContentLoaded", () => {
  let username = sessionStorage.getItem("username"),
    loginBtn = document.getElementById("loginbtn2"),
    usernamePresent = document.getElementById("ifusername");

  if (username == null) {
    loginBtn.removeAttribute("hidden");
    usernamePresent.setAttribute("hidden", "hidden");
  } else {
    usernamePresent.removeAttribute("hidden");
    loginBtn.setAttribute("hidden", "hidden");
    usernamePresent.innerHTML = username;
  }
});
