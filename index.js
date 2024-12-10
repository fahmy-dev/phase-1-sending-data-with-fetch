// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email  
        }),
    })
    .then(response => response.json())
    .then(data => {
      const newId = data.id;
      const div = document.createElement('div');
      div.textContent = `New user ID: ${newId}`;
      document.body.appendChild(div);  
    })
    .catch(error => {
        const err = document.createElement('div');
        err.textContent = `Error: ${error.message}`;
        document.body.appendChild(err);
    })
};

submitData('Fahmy', 'fahmy.abdi@icloud.com');