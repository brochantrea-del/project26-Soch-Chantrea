function addSubject() {
  var subject = document.getElementById("subject").value.trim();
  var listSubject = document.getElementById("subject");

  if (subject === "") {
    alert("Please Enter Your Subject!");
    return;
  } else {
    if (isDuplicate(subject)) {
      alert("This subject already exists!");
      listSubject.focus();
      listSubject.value = "";
      return;
    }

    var li = document.createElement("li");
    li.className = "list-item";

    var span = document.createElement("span");
    span.textContent = subject;

    var editBtn = document.createElement("button");
    var deleteBtn = document.createElement("button");
    editBtn.textContent = "EDIT";
    deleteBtn.textContent = "DELETE";

    editBtn.onclick = function () {
      var newSubject = prompt("Edit subject: ", span.textContent);
      if (newSubject != null && newSubject.trim() !== "") {
        if (isDuplicate(newSubject)) {
          alert("This subject already exists!");
          return;
        }
        span.textContent = newSubject;
      }
    };

    deleteBtn.onclick = function () {
      if (confirm("Are you sure you want to delete this subject?")) li.remove();
    };

    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(deleteBtn);

    document.getElementById("listsubject").appendChild(li);
    document.getElementById("subject").value = "";
  }
}

function isDuplicate(subject) {
  var listItems = document.querySelectorAll("#listsubject li span");
  for (var i = 0; i < listItems.length; i++) {
    if ( listItems[i].textContent.toLowerCase() === subject.toLowerCase().trim() ) {
      return true;
    }
  }
  return false;
}
