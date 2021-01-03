let input = document.querySelector("input");
let btn = document.querySelector("button");
let list = document.querySelector(".list");

btn.addEventListener("click", function () {
  if (input.value.length == 0) {
    console.log("empty");
  } else {
    //create elements
    let li = document.createElement("li");
    let span = document.createElement("span");

    //give elements values
    li.textContent = input.value;
    span.textContent = " X";

    //append elements
    list.appendChild(li);
    li.appendChild(span);
    // line through
    // span.addEventListener("click", function (e) {
    //   if (e.target.parentElement.style.textDecoration == "line-through") {
    //     e.target.parentElement.style.textDecoration = "none";
    //   } else {
    //     e.target.parentElement.style.textDecoration == "line-through";
    //   }
    // });

    //remove the <li>
    span.addEventListener("click", function (e) {
      list.removeChild(e.target.parentElement);
    });

    //reset input box
    input.value = "";
  }
});
