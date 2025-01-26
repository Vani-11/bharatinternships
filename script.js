function alertMessage() {
    alert("Thank you for your interest in VK Academy! Stay tuned for more updates.");
}
// Function to toggle the visibility of subjects
function toggleSubjects(card) {
    const subjectsList = card.querySelector(".subjects");
    if(!subjectsList) return;
    const isVisible = subjectsList.style.display === "block";

    // Hide all other subject lists
    document.querySelectorAll(".course-card .subjects").forEach((list) => {
        list.style.display = "none";
    });

    // Toggle current card's subjects
    subjectsList.style.display = isVisible ? "none" : "block";
}


function alertMessage() {
    alert("Thank you for your interest in VK Academy! Stay tuned for more updates.");
}

