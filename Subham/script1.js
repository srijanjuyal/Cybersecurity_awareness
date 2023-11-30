function checkPasswordStrength(password) {
    if (password.length < 12) {
        return "Bad";
    }

    let numCount = [...password].filter(c => /\d/.test(c)).length;
    let specialCount = [...password].filter(c => /[@#$_&-+()/*"':;!]/.test(c)).length;

    if (numCount < 2 || specialCount < 2) {
        return "Bad";
    }

    // Check for date of birth or phone number pattern
    let datePattern = /\b\d{8}\b/;
    let phonePattern = /\b\d{10,}\b/;

    if (datePattern.test(password) || phonePattern.test(password)) {
        return "Bad";
    }

    return (numCount >= 2 && specialCount >= 2) ? "Best" : "Moderate";
}

function test() {
    let password;
    console.log("Enter your password: ");
    password = document.getElementById("pass").value;

    let result = checkPasswordStrength(password);
    alert("Password strength: " + result);

    return 0;
}
