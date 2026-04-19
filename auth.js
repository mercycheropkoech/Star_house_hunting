// SWITCH FORMS
function showLogin() {
  document.getElementById("loginForm").classList.add("active");
  document.getElementById("signupForm").classList.remove("active");

  document.getElementById("loginBtn").classList.add("active");
}

function showSignup() {
  document.getElementById("signupForm").classList.add("active");
  document.getElementById("loginForm").classList.remove("active");

  document.getElementById("loginBtn").classList.remove("active");
}

// SIMPLE FORM HANDLING
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Login successful! (Demo only)");
});

document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Account created!(Demo only)");
});