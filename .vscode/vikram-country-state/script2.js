let form = document.getElementById("form");
let selectedId = document.getElementById("selectId");
let message = document.getElementById("message");
let idsValidation = document.getElementById("idsValidation");
const countrySelect = document.getElementById("country");

// after selection id values
selectedId.addEventListener("change", function () {
  let value = selectedId.value;
  message.style.color = "black";
  message.textContent = "";
  idsValidation.setAttribute("placeholder", "");

  if (value == "1") {
    message.textContent = "Enter 12 digit adhar Number";
    idsValidation.setAttribute("placeholder", "3423 45454 4444");
    idsValidation.maxLength = 15; // set maximum length to 12

    idsValidation.addEventListener("input", function () {
      let expr = /^([0-9]{4}[0-9]{4}[0-9]{4}$)|([0-9]{4}\s[0-9]{4}\s[0-9]{4}$)|([0-9]{4}-[0-9]{4}-[0-9]{4}$)/;
      
      
      if (!expr.test(idsValidation.value)) {
        message.textContent = "Enter valid Adhar details";
        message.style.color = "red";
        idsValidation.style.border = "2px solid red";
        countryok = false;
        return;
      } else {
        message.textContent = "Successful";
        message.style.color = "green";
        idsValidation.style.border = "2px solid green";
      }
    });
  } else if (value == "2") {
    message.textContent = "Enter valid Pan Number";
    idsValidation.setAttribute("placeholder", "ABCD1234S");
    idsValidation.maxLength = 10; // set maximum length to 10

    idsValidation.addEventListener("input", function () {
      var exp = /[A-Za-z]{5}[0-9]{4}[A-Z]{1}$/;

      if (!exp.test(idsValidation.value)) {
        message.textContent = "Enter Pan details";
        message.style.color = "red";
        idsValidation.style.border = "2px solid red";
        countryok = false;
        return;
      } else {
        message.textContent = "Successful";
        message.style.color = "green";
        idsValidation.style.border = "2px solid green";
        countryok = true;
      }
    });
  }

  //   pan validation
  else if (value == "2") {
    message.textContent = "Enter valid Pan Number";
    idsValidation.setAttribute("placeholder", "ABCD1234S");
    idsValidation.addEventListener("input", function () {
      var exp = /[A-Za-z]{5}[0-9]{4}[A-Z]{1}$/;
      if (!exp.test(idsValidation.value)) {
        message.textContent = "Enter Pan details";
        message.style.color = "red";
        idsValidation.style.border = "2px solid red";
        return;
      } else {
        message.textContent = "Successfull";
        message.style.color = "green";
        idsValidation.style.border = "2px solid Green";
      }
    });
  }
});

// states and country
let states = [
  [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
  ],
  [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ],
];

//

countrySelect.addEventListener("change", function () {
  const stateSelect = document.getElementById("state");
  let countrySelectedValue = countrySelect.value;

  // remove previous options
  while (stateSelect.firstChild) {
    stateSelect.removeChild(stateSelect.firstChild);
  }

  if (countrySelectedValue == "0") {
    stateSelect.removeAttribute("disabled");
    for (let i = 0; i < states[+countrySelectedValue].length; i++) {
      const option = document.createElement("option");
      option.text = states[+countrySelectedValue][i];
      stateSelect.add(option);
    }
  } else if (countrySelectedValue == "1") {
    stateSelect.removeAttribute("disabled");
    for (let i = 0; i < states[+countrySelectedValue].length; i++) {
      const option = document.createElement("option");
      option.text = states[+countrySelectedValue][i];
      stateSelect.add(option);
    }
  } else if (countrySelectedValue == "") {
    stateSelect.disabled = true;
  }
});
