

4 of 2,728
RE : Solution
Inbox

Deep Vartak <deepv@sjcem.edu.in>
Attachments
10:41 (9 hours ago)
to deep29vartak, me


4
 Attachments
  • Scanned by Gmail
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
