document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // For demonstration, we'll just log the values
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);

    // Here you can add your form submission logic, like sending the data to a server
    alert('Thank you for signing up!');
});
