const pass = document.getElementById('pass')
const cpass = document.getElementById('cpass')


const form1 = document.getElementById("register");
form1.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log({ pass: pass.value, cpass: cpass.value })

    if (pass.value === cpass.value) {
        console.log("Success!!!")
        alert("Thanks for Registration!!!")
    } else {
        alert("Passwords are not Matching!!!")
        console.log("Fail!!!")
    }
})
