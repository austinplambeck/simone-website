// Desktop
const article = document.querySelector("#info-d");
const div = document.querySelector("#container");

function showMore() {
    if (article.className == "open") {
      // read less
      article.className = "";
      div.className = "";
      document.querySelector("#show-more-d").innerHTML = "show more";
    } else {
      //read more
      article.className = "open";
      div.className = "open";
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


