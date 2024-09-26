function toggleSearch() {
    var searchBar = document.getElementById("search-bar");
    if (searchBar.style.display === "none" || searchBar.style.display === "") {
        searchBar.style.display = "block";
    } else {
        searchBar.style.display = "none";
    }
}
// Open the modal when user profile icon is clicked
function openModal() {
    document.getElementById('modal').style.display = 'flex';
}

// Close the modal when close button is clicked
function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Switch between signup and login forms
function switchToLogin() {
    const modalContent = document.querySelector('.modal-content h2');
    modalContent.innerText = 'Login';

    const form = document.getElementById('signup-form');
    form.innerHTML = `
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <button type="submit" class="login-btn">Login</button>
    `;

    const paragraph = document.querySelector('.modal-content p');
    paragraph.innerHTML = `Don't have an account? <a href="#" onclick="switchToSignup()">Signup</a>`;
}

function switchToSignup() {
    const modalContent = document.querySelector('.modal-content h2');
    modalContent.innerText = 'Signup';

    const form = document.getElementById('signup-form');
    form.innerHTML = `
        <input type="text" placeholder="Username" required>
        <input type="email" placeholder="Email" required>
        <input type="password" placeholder="Password" required>
        <input type="password" placeholder="Confirm Password" required>
        <button type="submit" class="signup-btn">Signup</button>
    `;

    const paragraph = document.querySelector('.modal-content p');
    paragraph.innerHTML = `Already have an account? <a href="#" onclick="switchToLogin()">Login</a>`;
}
