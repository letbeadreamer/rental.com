// Add this script at the end of your HTML file or in a separate .js file
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.value;
    // You can perform a search action here, like redirecting to search results page or displaying search results on the same page.
    alert("You searched for: " + searchTerm);
});

// Optionally, you can also handle form submission if you want to submit the search when the user presses Enter:
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        event.preventDefault(); // Prevent form submission
        searchButton.click(); // Trigger the search button click event
    }
});


// Add this script at the end of your HTML file or in a separate .js file
const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
});
