document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Get form data
    let formData = new FormData(this);
    let userData = {};
    formData.forEach((value, key) => {
    userData[key] = value;
    });
    // Push data to local array and local storage
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    // Send data using AJAX POST
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'Add you url', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    console.log('User data sent successfully');
    }
    };
    xhr.send(JSON.stringify(userData));
    // Redirect to data display page
    window.location.href = 'data_list.html';
});

//your-server-endpoint-url