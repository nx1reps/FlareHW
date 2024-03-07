// JavaScript for upload.html

// Function to handle form submission
document.getElementById("uploadForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get the file input element
    var fileInput = document.getElementById("fileInput");

    // Get the uploaded file
    var file = fileInput.files[0];

    // Create a new list item to display the file
    var listItem = document.createElement("li");

    // Set the text content of the list item to the file name
    listItem.textContent = file.name;

    // Append the list item to the gallery section
    document.getElementById("gallery").appendChild(listItem);

    // Clear the file input
    fileInput.value = "";
});
