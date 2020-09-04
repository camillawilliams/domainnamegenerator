/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let ext = [".io", ".com", ".org", ".net", ".co"];
  let emptyString = "";
  let emptyArray = [];
  for (let a in pronoun)
    for (let b in adj)
      for (let c in noun)
        for (let d in ext)
          emptyString += pronoun[a] + adj[b] + noun[c] + ext[d] + "<br>";

  document.querySelector("#the-domain").innerHTML = emptyString;
};
