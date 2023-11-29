document.addEventListener("DOMContentLoaded", function () {
  localStorage.removeItem("pageNumber");
  const product = document.querySelectorAll(".product");
  var a = [];
  let phones = fetchData("../data/phones.json");
  phones.then((data) => {
    for (var i = 0; i < data.length; i++) {
      const img = document.querySelectorAll(".images");
      const name = document.querySelectorAll(".ProductName");
      product[i].setAttribute("sampleData", i);
      img[i].src = data[i].addImageUrl;
      name[i].innerHTML = data[i].Company + " " + data[i].modelName;
    }
  });

  product.forEach((div) => {
    div.addEventListener("click", () => {
      const itemNumber = div.getAttribute("sampleData");
      localStorage.setItem("indexNumber", itemNumber);
      window.location.replace(`../product/product.html`);
    });
  });
});
