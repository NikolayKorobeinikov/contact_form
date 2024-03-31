const data = [
  {
    icon: `<i class="fa-solid fa-location-dot"></i>`,
    contacts: "Address",
    description: "198 West 21th Street, Suite 721 New York NY 10016",
  },
  {
    icon: `<i class="fa-solid fa-phone"></i>`,
    contacts: "Phone",
    description: "+ 1235 2355 98",
  },
  {
    icon: `<i class="fa-solid fa-paper-plane"></i>`,
    contacts: "Email",
    description: "info@yoursite.com",
  },
  {
    icon: `<i class="fa-solid fa-earth-americas"></i>`,
    contacts: "Website",
    description: "yoursite.com",
  },
];

const form = document.querySelectorAll("#form");
const contacts = document.querySelector(".our__contacts");
const button = document.querySelector(".btn");
button.addEventListener("click", sendTo);

function sendTo(param) {
  param.preventDefault()
  form.forEach((element) => {
    const inputValue = element.value;
    const inputName = element.name;
    if (inputValue == "") {
      const textError = document.createElement("p");
      textError.classList.add("text");
      textError.textContent = `Please enter your ${inputName}`;
      element.insertAdjacentElement("afterend", textError);
    }
  });
}

const getData = data
  .map((contact) => {
    const getContacts = `
        <div class="contacts">
            <div class="awesome">
             ${contact.icon}
            </div>
             <p class="info"><span class="details">${contact.contacts}:</span> ${contact.description}</p>
        </div>`;
    return getContacts;
  })
  .join(" ");
contacts.innerHTML += getData;
