// Smooth Scroll to Sections
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  }
  
  // Open Appointment Modal
  function openAppointmentForm() {
    document.getElementById("appointment-modal").style.display = "flex";
  }
  
  // Close Appointment Modal
  function closeAppointmentForm() {
    document.getElementById("appointment-modal").style.display = "none";
  }
  
  // Submit Appointment Form
  document.getElementById("appointment-form").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const mobile = document.getElementById("mobile").value;
  
    // Send data to server (replace with actual backend URL)
    fetch("http://localhost:3000/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, mobile }),
    })
      .then((res) => res.json())
      .then((data) => alert("Appointment booked successfully!"))
      .catch((err) => alert("Error booking appointment"));
  });
  