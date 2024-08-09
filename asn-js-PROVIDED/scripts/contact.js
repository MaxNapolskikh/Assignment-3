// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

// Select the submit button and the contact page main content
let submitButton = document.getElementById('submit-button');
let contactPage = document.getElementById('contact-page');

submitButton.addEventListener('click', function(event) {
    // Prevent default form submission behavior
    event.preventDefault();
    
    // Clear the contact page content
    contactPage.innerHTML = '';
    
    // Create a new <p> element
    let thankYouMessage = document.createElement('p');
    thankYouMessage.textContent = 'Thank you for your message';
    
    // Set the font size to 24px
    thankYouMessage.style.fontSize = '24px';
    
    // Center the message within the page
    thankYouMessage.style.textAlign = 'center';
    
    // Append the new <p> element to the contact page
    contactPage.appendChild(thankYouMessage);
});
