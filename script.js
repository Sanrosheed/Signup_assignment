
function addItem(e) {
    e.preventDefault();

    // Get each element by Id
    let firstName = document.getElementById("FirstName").value
    let lastName = document.getElementById("LastName").value
    let email = document.getElementById("Email").value
    let location = document.getElementById("Location").value
    let password = document.getElementById("Password").value
    let confirmPassword = document.getElementById("ConPassword").value

    let person = {
        firstName : firstName,
        lastName : lastName,
        email : email,
        location : location,
        password : password,
        confirmPassword : confirmPassword
    }

    localStorage.setItem("User", JSON.stringify(person))
}

