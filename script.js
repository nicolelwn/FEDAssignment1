//index
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("video-container");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

function scrollToSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth'
        });
    }
}

// Function to initialize the continuous slideshow
function initContinuousAnnouncementSlideshow() {
    let slideIndex = 0;
    const announcementImages = document.querySelectorAll('#announcements .announcement-container img');
    
    // Set an interval to change the poster every 5 seconds
    setInterval(function () {
        showAnnouncement(slideIndex);
        slideIndex++;

        // Reset to the first image if at the end, repeat display
        if (slideIndex >= announcementImages.length) {
            slideIndex = 0;
        }
    }, 5000);
}

// Function to display the current poster
function showAnnouncement(index) {
    const announcementImages = document.querySelectorAll('#announcements .announcement-container img');
    
    for (let i = 0; i < announcementImages.length; i++) {
        announcementImages[i].style.display = 'none';
    }

    announcementImages[index].style.display = 'block';
}

// Call the function to initialize the continuous slideshow when the page loads
initContinuousAnnouncementSlideshow();



//booking.html
function validateForm() {
    var name = document.getElementById("name").value;
    var studentId = document.getElementById("studentId").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var dateTime = document.getElementById("dateTime").value;

    // Make sure all fields are filled in
    if (name === "" || studentId === "" || mobileNumber === "" || dateTime === "") {
        alert("Please fill in all fields before submitting.");
        return false; // Prevent form submission
    }

    return true; // Allow form submission
}

function submitForm() {
    if (validateForm()) {
        var name = document.getElementById("name").value;
        var studentId = document.getElementById("studentId").value;
        var mobileNumber = document.getElementById("mobileNumber").value;
        var dateTime = document.getElementById("dateTime").value;

        // You can perform further processing or send the data to a server here

        alert("Form submitted!\nName: " + name + "\nStudent ID: " + studentId + "\nMobile Number: " + mobileNumber + "\nDate and Time: " + dateTime);
    }
}
