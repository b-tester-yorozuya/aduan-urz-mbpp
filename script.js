document.getElementById("complaintForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var fileInput = document.getElementById("imageInput");
    var file = fileInput.files[0];
    var reader = new FileReader();

    reader.onloadend = function() {
        var imageData = reader.result.split(",")[1];

        var data = {
            name: document.getElementById("name").value,
            category: document.getElementById("category").value,
            description: document.getElementById("description").value,
            roadName: document.getElementById("roadName").value,
            image: imageData || null,
            imageName: file ? file.name : null
        };

        fetch("https://script.google.com/macros/s/AKfycbxf2cGtr5TMNqXLSFEuXVcsm1M8Z5tATZhUdwPUPoDI3Rc1gDTtHsN5P9lYFUwv5rGP/exec", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    name: document.getElementById("name").value,
    category: document.getElementById("category").value,
    description: document.getElementById("description").value,
    roadName: document.getElementById("roadName").value,
    imageUrl: "IMAGE_LINK_IF_AVAILABLE"
  })// Removed extra closing parenthesis
.then(response => response.json())
.then(data => alert(data.message))
.catch(error => console.error("Error:", error));
.then(response => response.json()) // Convert response to JSON
.then(data => alert(data.message)) // Show success message
.catch(error => console.error("Error:", error));

    if (file) {
        reader.readAsDataURL(file);
    } else {
        reader.onloadend();
    }
});
