
// event_invitation.js - Enhance event invitation email functionality

// Show alert when RSVP button is clicked
document.querySelector('#rsvp-button').addEventListener('click', () => {
    alert('Thank you for your RSVP! We look forward to seeing you at the event.');
});

// Smooth scroll to event details section
document.querySelector('#event-details-link').addEventListener('click', (e) => {
    e.preventDefault();
    document.querySelector('#event-details').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
});

// Toggle additional information visibility
document.querySelector('#more-info-toggle').addEventListener('click', () => {
    const infoSection = document.querySelector('#additional-info');
    infoSection.classList.toggle('hidden');
});
