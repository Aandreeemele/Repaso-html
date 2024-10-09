
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    alert(`Gracias por contactarnos, ${name}. Hemos recibido tu mensaje.`);
    
    document.getElementById('contactForm').reset();
});
