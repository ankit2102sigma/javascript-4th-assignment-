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
    console.log("test")

    
    if (billingNameInput == null || billingNameInput == "") {
        alert("Billing Name can't be blank");
        return false;
    }
    else if (postalNameInput == null || postalNameInput == "") {
        alert("Postal Name can't be blank");
        return false;
    }
    else if (billingAddressInput == null || billingAddressInput == "") {
        alert(" Biiling Address can't be blank");
        return false;
    }
    else if (billingCityInput == null || billingCityInput == "") {
        alert("Billing city can't be blank");
        return false;
    }
    else if (billingStateInput == null || billingStateInput == "") {
        alert("Billing state can't be blank");
        return false;
    }
    else if (billingZipInput == null || billingZipInput == "") {
        alert("Billing zip code can't be blank");
        return false;
    }
    else if (postalAddressInput == null || postalAddressInput == "") {
        alert("Postal Address can't be blank");
        return false;
    }
    else if (postalCityInput == null || postalCityInput == "") {
        alert("Postal city can't be blank");
        return false;
    }
    else if (postalStateInput == null || postalStateInput == "") {
        alert("Postal state can't be blank");
        return false;
    }
    else if (postalZipInput == null || postalZipInput == "") {
        alert("Postal zip code can't be blank");
        return false;
    }
    else if (postalZipInput.length<5 || postalZipInput.length>7) {
        alert("Invalid Postal Zip Code given.");
        return false;
    }
    else if (billingZipInput.length<5 || billingZipInput.length>7) {
        alert("Invalid Billing Zip Code given.");
        return false;
    }

    else{
        
        Save();
    }


}

function save() {
    console.log("test45");
    localStorage.setItem("name", document.forms["myForm"]["billing-name"].value);
    
}