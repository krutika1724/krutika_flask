const api_url =  "https://krutikaflask1.herokuapp.com/"

function loadData(records = []) {
    var table_data = "";
    for(let i=0; i<records.length; i++) {
        table_data += `<tr>`;
        table_data += `<td>${records[i][0]}</td>`;
        table_data += `<td>${records[i][1]}</td>`;
        table_data += `<td>${records[i][2]}</td>`;
	table_data += `<td>${records[i][3]}</td>`;
	//table_data += `<td>${records[i][4]}</td>`;
	//table_data += `<td>${records[i][5]}</td>`;
	//table_data += `<td>${records[i][6]}</td>`;
	//table_data += `<td>${records[i][7]}</td>`;
	

        table_data += `<td>`;
        table_data += `<a href="edit.html?id=${records[i][0]}"><button class="btn btn-primary">Edit</button></a>`;
        table_data += '&nbsp;&nbsp;';
        table_data += `<button class="btn btn-danger" onclick=deleteData('${records[i][0]}')>Delete</button>`;
        table_data += `</td>`;
        table_data += `</tr>`;
    }
    console.log(table_data);
    document.getElementById("tbody").innerHTML = table_data;
}


function getData() {
    fetch(api_url)
        .then((response) => response.json())
        .then((data) => {
            console.table(data);
            loadData(data);
        });
}


function deleteData(id) {
    user_input = confirm("Are you sure you want to delete this record?");
    
    if(user_input) {
        fetch(`${api_url}?id=${id}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({[0]: id})
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            location=location.href;
        })
    }
	location=location.href;
}


function postData() {
	var name = document.getElementById("name").value;
    	var age = document.getElementById("age").value;
	var city = document.getElementById("city").value;
	//var salary = document.getElementById("salary").value;
	//var employee_id = document.getElementById("employee_id").value;
	//var role= document.getElementById("role").value;
	
	
    data = {name: name, age: age, city: city};
    fetch(`http://127.0.0.1:5000/employee`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            window.location.href = "index.html";
        })
}


function getDataById(id) {
    fetch(`${api_url}/id?id=${id}`)
    .then((response) => response.json())
    .then((data) => {
        	console.log(data);
	    	console.log(data[0][2]);
	    	document.getElementById("id").value =data[0][0];
        	document.getElementById("name").value =data[0][1];
        	document.getElementById("age").value = data[0][2];
        	document.getElementById("city").value = data[0][3];
		//document.getElementById("salary").value = data[0][4];
		//document.getElementById("employee_id").value=data[0][5];
		//document.getElementById("role").value = data[0][6];
		

    })
}


function putData() {
	var id = document.getElementById("id").value;
	var name = document.getElementById("name").value;
	var age = document.getElementById("age").value;
	var city = document.getElementById("city").value;
	//var salary = document.getElementById("salary").value;
	//var employee_id = document.getElementById("employee_id").value;
	//var role = document.getElementById("role").value;
	

    data = {id : id, name: name, age : age, city: city};

	fetch(api_url, {
        method: "PUT",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
        })
        .then((response) => response.json())
        .then((data) => {
            console.table(data);
            window.location.href = "index.html";
        })
	
}

