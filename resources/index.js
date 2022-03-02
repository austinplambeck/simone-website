const article = document.querySelector("#info-d");

function showMore() {
    if (article.className == "open") {
      // read less
      article.className = "";
      document.querySelector("#show-more-d").innerHTML = "show more";
    } else {
      //read more
      article.className = "open";
      document.querySelector("#show-more-d").innerHTML = "show less";
    }
 }

