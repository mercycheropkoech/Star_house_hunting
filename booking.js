document.getElementById("bookingForm").addEventListener("submit", function(e) {
  e.preventDefault();

  alert(" Appointment booked successfully!");

  this.reset();
});