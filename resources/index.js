// Desktop
const article = document.querySelector("#info-d");
const div = document.querySelector("#container");

function showMore() {
    if (article.className == "open") {
      // read less
      article.className = "";
      div.className = "";
      document.querySelector("#show-more-d").innerHTML = "show more";
      //document.querySelector("#p-test-d").innerHTML = " ";
    } else {
      //read more
      article.className = "open";
      div.className = "open";
      document.querySelector("#show-more-d").innerHTML = "show less";
      //document.querySelector("#p-test-d").innerHTML = "Curabitur at justo augue. Nam euismod, felis et vestibulum varius, urna eros aliquet nisl, nec blandit massa lorem id mauris. Nulla aliquet risus ante, nec dapibus mauris eleifend vel. Vestibulum eget rutrum enim. Phasellus tincidunt tortor ornare tortor eleifend, et rhoncus sem interdum. Ut pulvinar a mi sed dapibus. Etiam varius lectus lectus, quis laoreet diam venenatis auctor. Nullam ex sapien, suscipit sit amet vehicula nec, mollis at orci.";
    }
 }



// Mobile
const articleM = document.querySelector("#info-m");
const divM = document.querySelector("#container-m");

function showMoreM() {
    if (articleM.className == "open") {
      // read less
      articleM.className = "";
      divM.className = "";
      document.querySelector("#show-more-m").innerHTML = "show more";
    } else {
      //read more
      articleM.className = "open";
      divM.className = "open";
      document.querySelector("#show-more-m").innerHTML = "show less";
    }
 }


