document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    let passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
  
    if (!emailPattern.test(email)) {
      document.getElementById("formMessage").innerText = "Invalid Email Format!";
      return;
    }
  
    if (!passwordPattern.test(password)) {
      document.getElementById("formMessage").innerText = "Weak Password!";
      return;
    }
  
    document.getElementById("formMessage").innerText = "Form Submitted Successfully!";
  });
  
  function showAlert() {
    alert("Form submitted successfully!");
  }
  
  function showConfirm() {
    let result = confirm("Are you sure you want to delete this item?");
    if (result) alert("Item deleted");
  }
  
  function showPrompt() {
    let name = prompt("Enter your name:");
    if (name) alert(`Hello, ${name}!`);
  }
  
  document.getElementById("hoverButton").addEventListener("mouseover", function () {
    this.style.backgroundColor = "#f0f0f0";
  });
  document.getElementById("hoverButton").addEventListener("mouseout", function () {
    this.style.backgroundColor = "";
  });
  