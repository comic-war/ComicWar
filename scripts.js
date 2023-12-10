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

    // document.getElementById('submission-form').addEventListener('submit', function (event) {
    //     event.preventDefault();
    
    //     const fileInput = document.getElementById('video');
    
    //     const formData = new FormData();
    //     formData.append('entry.1468406692', document.getElementById('name').value); // Example: Replace with the actual form field IDs
    //     formData.append('entry.803664838', document.getElementById('city').value);
    //     // ... Repeat this for all other form fields
    
    //     formData.append('entry.1715041287', fileInput.files[0]);
    
    //     fetch('https://docs.google.com/forms/d/e/1FAIpQLScdnFUThUiwR_bUSkT3vQEPLLFQOLyTpiT7cW4fmWDyNi64iA/formResponse', {
    //         method: 'POST',
    //         body: formData,
    //         mode: 'no-cors'
    //     })
    //     .then(response => {
    //         if (response.ok) {
    //             console.log('File submitted successfully');
    //             // Additional actions on successful submission
    //         } else {
    //             console.error('File submission failed');
    //             // Handle the error
    //         }
    //     })
    //     .catch(error => {
    //         console.error('Error:', error);
    //     });
    // });
    

document.addEventListener("DOMContentLoaded", function () {
    showPage(currentPage);
});
