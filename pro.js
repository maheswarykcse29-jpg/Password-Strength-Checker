function checkPassword() {

    let password = document.getElementById("password").value;
    let result = document.getElementById("strength");
    let correctPassword = "Manisha@123";
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;
    if (password === correctPassword) {
        result.innerHTML = "Correct Password ✅ (Strong & Valid)";
        result.style.color = "green";
    } 
    else {
        if (strength <= 2) {
            result.innerHTML = "Wrong Password ❌ (Weak)";
            result.style.color = "red";
        } 
        else if (strength <= 4) {
            result.innerHTML = "Wrong Password ❌ (Medium)";
            result.style.color = "orange";
        } 
        else {
            result.innerHTML = "Wrong Password ❌ (Strong but Incorrect)";
            result.style.color = "blue";
        }
    }
}