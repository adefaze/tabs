const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

about.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  //   console.log(id);
  if (id) {
    btns.forEach((btn) => {
      //remove active from other buttons
      btn.classList.remove("active");
      //add active to current button
      e.target.classList.add("active");
    });
    //hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
