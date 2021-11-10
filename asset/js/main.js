
let name = document.getElementById('name');
let bloodgroup = document.getElementById('bloodgroup');
let address = document.getElementById('address');
let number = document.getElementById('number');
let button = document.getElementById('button');
let tableData = document.getElementById('tableData');

let newarr = new Array();

button.addEventListener('click', function (e) {
    e.preventDefault();
    if (name.value === "" || address.value === "" || bloodgroup === "" || number == "") {
        alert('kisu de vai')
    }
    else {
        newarr.push({
            name: name.value,
            bloodgroup: bloodgroup.value,
            address: address.value,
            number: number.value,

        })
        tableData.innerHTML = "";

        localStorage.setItem('data', JSON.stringify(newarr))
        newarr.map(item => {

            let newrow = document.createElement('tr');

            let tableName = document.createElement('td');
            tableName.innerHTML = item.name;
            newrow.appendChild(tableName);

            let tableBloodgroup = document.createElement('td');
            tableBloodgroup.innerHTML = item.bloodgroup;
            newrow.appendChild(tableBloodgroup);

            let tableAddress = document.createElement('td');
            tableAddress.innerHTML = item.address;
            newrow.appendChild(tableAddress);

            let tablenumber = document.createElement('td');
            tablenumber.innerHTML = item.number;
            newrow.appendChild(tablenumber);

            tableData.appendChild(newrow)

        })
    }





})

function getlocalstoragedata() {
    let getdata = JSON.parse(localStorage.getItem('data'));
    newarr = [...getdata];


    tableData.innerHTML = "";

    newarr.map(item => {

        let newrow = document.createElement('tr');

        let tableName = document.createElement('td');
        tableName.innerHTML = item.name;
        newrow.appendChild(tableName);

        let tableBloodgroup = document.createElement('td');
        tableBloodgroup.innerHTML = item.bloodgroup;
        newrow.appendChild(tableBloodgroup);

        let tableAddress = document.createElement('td');
        tableAddress.innerHTML = item.address;
        newrow.appendChild(tableAddress);

        let tablenumber = document.createElement('td');
        tablenumber.innerHTML = item.number;
        newrow.appendChild(tablenumber);

        tableData.appendChild(newrow)

    })
}
getlocalstoragedata();