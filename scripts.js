let currentPage = 1;

function showPage(pageNumber) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.add('hidden');
    });

    const currentSection = document.getElementById(getSectionId(pageNumber));
    if (currentSection) {
        currentSection.classList.remove('hidden');
    }
}

function nextPage() {
    currentPage++;
    showPage(currentPage);
}

function getSectionId(pageNumber) {
    switch (pageNumber) {
        case 1:
            return 'welcome';
        case 2:
            return 'submission-form';
        case 3:
            return 'video-upload';
        case 4:
            return 'thank-you';
        default:
            return '';
    }
}
function validateAndProceed() {
    const elementId = ['name', 'city', 'email', 'phone', 'comedy-experience', 'previous-competition', 'performance-history', 'instagram-handle', 'video-url'];

    for (let i = 0; i < elementId.length-1; i++) {
        const ele = document.getElementById(elementId[i]);
        if (!ele.checkValidity()) {
            let message = "";

            // Customize the error message based on the field ID
            switch (elementId[i]) {
                case 'name':
                    message = "Please enter a valid name.";
                    break;
                case 'city':
                    message = "Please enter a valid city.";
                    break;
                case 'email':
                    message = "Please enter a valid email address.";
                    break;
                case 'phone':
                    message = "Please enter a valid phone number.";
                    break;
                // Add cases for other fields as needed
                default:
                    message = "Please fill all the required fields.";
                    break;
            }

            alert(message);
            return;
        }
    }

    // Validate URL separately if on the third page
    if (currentPage === 3) {
        const ele = document.getElementById('video-url');
        if (!ele.checkValidity()) {
            alert("Please enter a valid video URL.");
            return;
        }
    }

    // If all validations pass, proceed with the next action
    nextPage(); // Or any other action you want to perform after validation
}





    

document.addEventListener("DOMContentLoaded", function () {
    showPage(currentPage);
});
