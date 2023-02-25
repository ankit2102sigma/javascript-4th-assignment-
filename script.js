function updateQuantity() {
    var quantity = document.getElementById("quantity").value;

    if (quantity <= 0) {
        alert("Select quantity more than zero")
    }
}
function addcart() {
    var quantity = document.getElementById("quantity").value;
    var name_p = document.getElementById('name').innerHTML;

    var amount = document.getElementsByClassName('product-price');
    let price = amount[0].innerHTML;

    var total = (price * quantity)
    console.log(name_p + "   " + quantity + "   " + price + "   " + total);

    localStorage.setItem("namep", document.getElementById('name').innerHTML);
    
}



const billingNameInput = document.getElementById('billing-name');
const billingAddressInput = document.getElementById('billing-address');
const billingCityInput = document.getElementById('billing-city');
const billingStateInput = document.getElementById('billing-state');
const billingZipInput = document.getElementById('billing-zip');

const postalNameInput = document.getElementById('postal-name');
const postalAddressInput = document.getElementById('postal-address');
const postalCityInput = document.getElementById('postal-city');
const postalStateInput = document.getElementById('postal-state');
const postalZipInput = document.getElementById('postal-zip');

const copyAddressCheckbox = document.getElementById('copy-address');

copyAddressCheckbox.addEventListener('change', () => {
    if (copyAddressCheckbox.checked) {
        postalNameInput.value = billingNameInput.value;
        postalAddressInput.value = billingAddressInput.value;
        postalCityInput.value = billingCityInput.value;
        postalStateInput.value = billingStateInput.value;
        postalZipInput.value = billingZipInput.value;
    }
    else {
        postalNameInput.value = "";
        postalAddressInput.value = ""
        postalCityInput.value = "";
        postalStateInput.value = "";
        postalZipInput.value = "";
    }
})

function validateForm() {
//   alert("call")
    const billingNameInput1 = document.getElementById('billing-name');
    const billingAddressInput1 = document.getElementById('billing-address');
    const billingCityInput1 = document.getElementById('billing-city');
    const billingStateInput1 = document.getElementById('billing-state');
    const billingZipInput1 = document.getElementById('billing-zip');

    const postalNameInput1 = document.getElementById('postal-name');
    const postalAddressInput1 = document.getElementById('postal-address');
    const postalCityInput1 = document.getElementById('postal-city');
    const postalStateInput1 = document.getElementById('postal-state');
    const postalZipInput1 = document.getElementById('postal-zip');
    console.log("test", billingNameInput)

    
    if (billingNameInput1 == null || billingNameInput1 == "") {
        alert("Billing Name can't be blank");
        return false;
    }
    else if (postalNameInput1 == null || postalNameInput1 == "") {
        alert("Postal Name can't be blank");
        return false;
    }
    else if (billingAddressInput1 == null || billingAddressInput1 == "") {
        alert(" Biiling Address can't be blank");
        return false;
    }
    else if (billingCityInput1 == null || billingCityInput1 == "") {
        alert("Billing city can't be blank");
        return false;
    }
    else if (billingStateInput1 == null || billingStateInput1 == "") {
        alert("Billing state can't be blank");
        return false;
    }
    else if (billingZipInput1 == null || billingZipInput1 == "") {
        alert("Billing zip code can't be blank");
        return false;
    }
    else if (postalAddressInput1 == null || postalAddressInput1 == "") {
        alert("Postal Address can't be blank");
        return false;
    }
    else if (postalCityInput1 == null || postalCityInput1 == "") {
        alert("Postal city can't be blank");
        return false;
    }
    else if (postalStateInput1 == null || postalStateInput1 == "") {
        alert("Postal state can't be blank");
        return false;
    }
    else if (postalZipInput1 == null || postalZipInput1 == "") {
        alert("Postal zip code can't be blank");
        return false;
    }
    else if (postalZipInput1.length<5 || postalZipInput1.length>7) {
        alert("Invalid Postal Zip Code given.");
        return false;
    }
    else if (billingZipInput1.length<5 || billingZipInput1.length>7) {
        alert("Invalid Billing Zip Code given.");
        return false;
    }

    else{
        // alert("calling")
        save();
    }


}

function save() {
    console.log("test45");
    localStorage.setItem("name", document.forms["myForm"]["billing-name"].value);
    
}