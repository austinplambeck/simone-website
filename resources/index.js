// Desktop
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



// Mobile
const articleM = document.querySelector("#info-m");

function showMoreM() {
    if (articleM.className == "open") {
      // read less
      articleM.className = "";
      document.querySelector("#show-more-m").innerHTML = "show more";
    } else {
      //read more
      articleM.className = "open";
      document.querySelector("#show-more-m").innerHTML = "show less";
    }
 }


