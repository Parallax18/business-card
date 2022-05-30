const url_input = document.getElementById("url_input");
const firstname_input = document.getElementById("firstname_input");
const lastname_input = document.getElementById("lastname_input")
const phone_input = document.getElementById("phone_input");
const email_input = document.getElementById("email_input");
const modal_btn = document.getElementById("modal_btn");
const form = document.getElementById("modal");


const image = document.getElementById("image");
const first_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const phoneNo = document.getElementById("phone");
const mail = document.getElementById("email")


const user = {
    firstName: "Oluwadara",
    lastName: "Awojide",
    phone: "+234 803 3345 901",
    email: "oluwadaraawojide@bettercast.com",
    imageUrl: "https://res.cloudinary.com/bettercast/images/f_auto,q_auto:eco/v1646117774/1576874738525/1576874738525.jpg?_i=AA"
}

form.addEventListener("submit", (e) => {
    first_name.innerText = user.firstName;
    last_name.innerText = user.lastName
    phoneNo.innerText = user.phone
    mail.innerText = user.email
    image.setAttribute("src", user.imageUrl)

    e.preventDefault()
})

url_input.addEventListener("change", (e) => {
    user.imageUrl = e.target.value
})
firstname_input.addEventListener("change", (e) => {
    user.firstName = e.target.value
})
lastname_input.addEventListener("change", (e) => {
    user.lastName = e.target.value
})
email_input.addEventListener("change", (e) => {
    user.email = e.target.value
})
phone_input.addEventListener("change", (e) => {
    user.phone = e.target.value
})

