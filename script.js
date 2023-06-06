var input = document.getElementById("input");
var list = document.getElementById("list");

function addTask() {
  if (input.value == "") {
    alert("You must write something");
  } else {
    var li = document.createElement("li");
    var liVal = document.createTextNode(input.value);
    li.appendChild(liVal);
    list.appendChild(li);

    //Edit button
    var editBtn = document.createElement("button");
    var editVal = document.createTextNode("Edit");
    editBtn.appendChild(editVal);
    editBtn.setAttribute("class", "edit");
    editBtn.setAttribute("onclick", "edit(this)");
    li.appendChild(editBtn);

    // Delete button
    var delBtn = document.createElement("button");
    var delVal = document.createTextNode("Delete");
    delBtn.appendChild(delVal);
    delBtn.setAttribute("class", "delete");
    delBtn.setAttribute("onclick", "del(this)");
    li.appendChild(delBtn);

    input.value = "";
  }
}

function edit(btn) {
  btn.parentNode.firstChild.nodeValue = prompt("Enter your task...");
}

function del(btn) {
  btn.parentNode.remove();
}
