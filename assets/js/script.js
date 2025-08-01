let filterLinks = document.querySelectorAll(".list-item a");
let images = document.querySelectorAll(".gallery .img");

for (let i = 0; i < filterLinks.length; i++) {
  filterLinks[i].addEventListener("click", function(e) {
    e.preventDefault();

    for (let j = 0; j < filterLinks.length; j++) {
      filterLinks[j].classList.remove("active");
    }
    this.classList.add("active");

    let filter = this.getAttribute("data-filter");

    for (let k = 0; k < images.length; k++) {
      let category = images[k].getAttribute("data-category");

      if (filter === "all" || filter === category) {
        images[k].style.display = "block";
      } else {
        images[k].style.display = "none";
      }
    }
  });
}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();
  let subject = document.getElementById("subject").value.trim();
  let message = document.getElementById("message").value.trim();

  let nameEmpty = document.getElementById("nameErrorEmpty");
  let nameLength = document.getElementById("nameErrorLength");
  let emailEmpty = document.getElementById("emailErrorEmpty");
  let emailInvalid = document.getElementById("emailErrorInvalid");
  let subjectEmpty = document.getElementById("subjectErrorEmpty");
  let messageEmpty = document.getElementById("messageErrorEmpty");

  nameEmpty.style.display = "none";
  nameLength.style.display = "none";
  emailEmpty.style.display = "none";
  emailInvalid.style.display = "none";
  subjectEmpty.style.display = "none";
  messageEmpty.style.display = "none";

  let hasError = false;

  if (name === "") {
    nameEmpty.style.display = "block";
    hasError = true;
  } else if (name.length < 4) {
    nameLength.style.display = "block";
    hasError = true;
  } else if (!/^[a-zA-Zآ-ی\s]+$/.test(name)) {
    nameInvalid.style.display = "block";
    hasError = true;
  }

  if (email === "") {
    emailEmpty.style.display = "block";
    hasError = true;
  } else if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailInvalid.style.display = "block";
    hasError = true;
  }

  if (subject === "") {
    subjectEmpty.style.display = "block";
    hasError = true;
  }

  if (message === "") {
    messageEmpty.style.display = "block";
    hasError = true;
  }

  if (!hasError) {
    alert("message sent");
  }
});
