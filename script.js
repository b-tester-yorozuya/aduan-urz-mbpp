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

        fetch("https://script.google.com/macros/s/AKfycbz5W0YhzKa6cTPMBFbhgLHKuPCVMbxrJvB0dulbRSzQ948bAqvssVY0RbOCk55Aazxu/exec", {
            method: "POST",
            body: formData,
            mode: "no-cors" //Prevents CORS blocking
                
        .then(() => alert("Berjaya"))
        .catch(error => console.error("Error:" error));
            document.getElementById("complaintForm").reset();
        })
        .catch(error => console.error("Error:", error));
    };

    if (file) {
        reader.readAsDataURL(file);
    } else {
        reader.onloadend();
    }
});
