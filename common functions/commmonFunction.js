function loggedIn(username) {
  sessionStorage.setItem(`username`, username);
  const pageNumber = sessionStorage.getItem("pageNumber");
  if (pageNumber == null) {
    window.location.href = "../home/home.html";
  } else if (pageNumber != null) {
    window.location.href = "../product/product.html";
  } else {
    window.location.href = "../home/home.html";
  }
}

async function fetchData(location) {
  const response = await fetch(location);
  const jsonData = await response.json();
  return jsonData;
}

async function getRates(base) {
  let response = new Promise((resolve) =>
    fetch(`https://api.exchangerate-api.com/v4/latest/${base}`).then((res) => {
      resolve(res.json());
    }),
  );
  return response;
}
async function getAmount(amount, from, to) {
  let rates = await getRates(from);
  return rates.rates[to] * amount;
}
