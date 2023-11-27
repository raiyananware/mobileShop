document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("pageNumber", 1);
  const indexNumber = localStorage.getItem("indexNumber");
  let phones = fetchData("../data/phones.json");
  phones.then((data) => {
    const toUnit = "INR",
      imageUrl = document.getElementById("deviceImage2"),
      deviceName = document.getElementById("deviceName"),
      deviceAmount = document.getElementById("deviceAmount"),
      convertedAmount = getAmount(
        data[indexNumber].amount,
        data[indexNumber].base,
        toUnit
      ),
      deviceDescription = document.getElementById("deviceDescription"),
      deviceQuantity = document.getElementById("deviceQuantity");
    imageUrl.src = data[indexNumber].imageUrl;
    deviceName.innerHTML =
      data[indexNumber].Company + " " + data[indexNumber].modelName;
    deviceDescription.innerHTML = data[indexNumber].description;
    deviceQuantity.innerHTML = "Quantity:- " + data[indexNumber].quantity;
    convertedAmount.then((data) => {
      deviceAmount.append("Rs. " + data);
    });
  });
});

function buy() {
  let userData = localStorage.getItem("username");
  if (userData != null) {
    alert("Payment Gate way is not implemented yet and will be added shortly");
  } else if (userData == null) {
    alert("Please Login first to buy the Product");
  }
}
