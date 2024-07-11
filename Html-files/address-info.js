

//to show address details if option selected
function optionSelect() {
    let option = document.getElementById('checkoutType').value ;
    let div = document.getElementById('info-checkout');
    if (option == "orderOnline") {
        div.innerHTML = `
        <div class="address-text">
            <p>Delivering to:
                <small class="text-body-secondary" id="addressInfo">No address added!</small>
            </p>
        </div>
        <div class="address-btn">
            <a href="../Html-files/add-address.html">Edit</a>
        </div>`;

        //loading the address
        const savedAddress = getaddressInfo();
        if (savedAddress ) {
        document.getElementById('addressInfo').innerHTML = `<ul style="list-style-type:none;">
            <li>${savedAddress.name},
            <li>${savedAddress.street},
            ${savedAddress.city}</li>
            <li>${savedAddress.state}
            -${savedAddress.pincode}</li>
            <li>Mobile: ${savedAddress.contact}</li>
            </ul>`
        } else {
            console.log("No addresses found");
        }


    } 
    if (option == "takeoutOrder") {
    div.innerHTML = `
    <p>You will recieve a reference number on successful payment. 
        Please save that reference to collect your order.
    </p>`;
    } if (option == "select"){
        div.innerHTML = ' ';
    }
} 

//to load address on this page if stored 
function getaddressInfo(){
try {
    const savedAddress = localStorage.getItem('savedAddress');
    if (savedAddress){
        return JSON.parse(savedAddress);
    } 
    return null;
} catch (error){
    console.error(error);
    return null;
}
}