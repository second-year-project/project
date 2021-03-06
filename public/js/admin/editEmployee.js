function getDetails(){
    
    let name = document.getElementById('name')
    let contact = document.getElementById('contact')
    let add = document.getElementById('add')
    
    
    let httprequest  = new XMLHttpRequest();
    httprequest.onreadystatechange = function(){
        if (httprequest.readyState===4 && httprequest.status===200){
            console.log(httprequest.responseText);
            const employee = JSON.parse(httprequest.responseText);
            console.log(employee);

            var empname=employee[0].name.replace(/_+/g, ',');
            console.log(empname)
            empname = empname.replace(/-+/g, ' ');
            console.log(empname)
            empname=empname.replace(/~+/g, '/');
            console.log(empname)
            
            var empAddress=employee[0].address.replace(/_+/g, ',');
            empAddress=empAddress.replace(/-+/g, ' ');
            empAddress=empAddress.replace(/~+/g, '/');


            
            name.innerHTML+='<input type="text"  class="name-edit-input" id="name-edit-input"  value="'+empname+'" disabled>'
            contact.innerHTML+='<input type="text"  class="name-edit-input" id="contact-edit-input"  value="'+employee[0].contact_no+'" disabled>'
            add.innerHTML+='<input type="text"  class="name-edit-input" id="add-edit-input"  value="'+empAddress+'" disabled>'
            


            
        }
    }
    
    var url="http://localhost/project/Admin/displayEmployeeDetailsforEdit";
    httprequest.open("POST",url,true)
    httprequest.send()

    
}

getDetails()

function editName(){

    document.getElementById("name-save").classList.replace("save-small-deactivate","save-small")
    document.getElementById("name-edit").classList.replace("edit","edit-deactivate")
    document.getElementById("name-cancel").classList.replace("cancel-small-deactivate","cancel-small")
    document.getElementById('name-edit-input').disabled = false;
    document.getElementById('name-edit-input').style.border = "2px solid #555555";
    document.getElementById('name-edit-input').style.borderRadius = "3px"
}

function cancelName(){
    document.getElementById("name-save").classList.replace("save-small","save-small-deactivate")
    document.getElementById("name-edit").classList.replace("edit-deactivate","edit")
    document.getElementById("name-cancel").classList.replace("cancel-small","cancel-small-deactivate")
    document.getElementById('name-edit-input').disabled = true;
    document.getElementById('name-edit-input').style.border = "none";
}

function editContact(){

    document.getElementById("contact-save").classList.replace("save-small-deactivate","save-small")
    document.getElementById("contact-edit").classList.replace("edit","edit-deactivate")
    document.getElementById("contact-cancel").classList.replace("cancel-small-deactivate","cancel-small")
    document.getElementById("contact-edit-input").disabled = false;
    document.getElementById('contact-edit-input').style.border = "2px solid #555555";
    document.getElementById('contact-edit-input').style.borderRadius = "3px"
}

function cancelContact(){
    document.getElementById("contact-save").classList.replace("save-small","save-small-deactivate")
    document.getElementById("contact-edit").classList.replace("edit-deactivate","edit")
    document.getElementById("contact-cancel").classList.replace("cancel-small","cancel-small-deactivate")
    document.getElementById('contact-edit-input').disabled = true;
    document.getElementById('contact-edit-input').style.border = "none";
    document.getElementById("err").classList.replace("invalid-login-true","err");

}
function editAdd(){

    document.getElementById("add-save").classList.replace("save-small-deactivate","save-small")
    document.getElementById("add-edit").classList.replace("edit","edit-deactivate")
    document.getElementById("add-cancel").classList.replace("cancel-small-deactivate","cancel-small")
    document.getElementById('add-edit-input').disabled = false;
    document.getElementById('add-edit-input').style.border = "2px solid #555555";
    document.getElementById('add-edit-input').style.borderRadius = "3px"
}

function cancelAdd(){
    document.getElementById("add-save").classList.replace("save-small","save-small-deactivate")
    document.getElementById("add-edit").classList.replace("edit-deactivate","edit")
    document.getElementById("add-cancel").classList.replace("cancel-small","cancel-small-deactivate")
    document.getElementById('add-edit-input').disabled = true;
    document.getElementById('add-edit-input').style.border = "none";

}



function saveName(){
    let name = document.getElementById('name-edit-input').value
    if(name == "") {
        document.getElementById('name-edit-input').placeholder="Name field can't be empty";
        document.getElementById('name-edit-input').style.border="2px solid red";
    } 

        else{
            name=name.replace(/,+/g, '_');
            name=name.replace(/\s+/g, '-');
            name=name.replace(/\/+/g, '~');

            let httprequest  = new XMLHttpRequest();
            httprequest.onreadystatechange = function(){
                if (httprequest.readyState===4 && httprequest.status===200){
                    console.log(httprequest.responseText);
                    if(httprequest.responseText="success"){
                        window.location.assign("http://localhost/project/Admin/editEmployee");
                    }
                    
                }
            }

            var url="http://localhost/project/Admin/updateEmployeeDetails/name/"+name;
            httprequest.open("POST",url,true)
            httprequest.send()
        }
}


function saveContact(){
    let contact = document.getElementById('contact-edit-input').value
    if(contact == "") {
        document.getElementById('contact-edit-input').placeholder="Contact field can't be empty";
        document.getElementById('contact-edit-input').style.border="2px solid red";
    }
    else{
        if(contact.length!=10){
            document.getElementById("err").classList.replace("err","invalid-login-true");
            document.getElementById("err").innerText="Please recheck the mobile number";
            
        }
        
        else{
            var numbers = /^[0-9]+$/;
            if(contact.match(numbers)){
                let httprequest  = new XMLHttpRequest();
                httprequest.onreadystatechange = function(){
                    if (httprequest.readyState===4 && httprequest.status===200){
                        console.log(httprequest.responseText);
                        if(httprequest.responseText=="exist"){
                            document.getElementById("err").innerText="The contact number you entered is already exist";
                            document.getElementById("err").classList.replace("err","invalid-login-true");
                        }
                        else if(httprequest.responseText=="success"){
                            
                            window.location.assign("http://localhost/project/Admin/editEmployee");
                        }
                        
                        
                    }
                }

                var url="http://localhost/project/Admin/updateEmployeeDetails/contact/"+contact;
                httprequest.open("POST",url,true)
                httprequest.send()
            }
            else{
                document.getElementById("err").classList.replace("err","invalid-login-true");
                document.getElementById("err").innerText="Only numbers are allowed";
            }
            
        }
    }
}
function saveAdd(){
    let add = document.getElementById('add-edit-input').value
    if(add == "") {
        document.getElementById('add-edit-input').placeholder="Address field can't be empty";
        document.getElementById('add-edit-input').style.border="2px solid red";
    }

        
        
    else{
        add=add.replace(/,+/g, '_');
        add=add.replace(/\s+/g, '-');
        add=add.replace(/\/+/g, '~');


        let httprequest  = new XMLHttpRequest();
        httprequest.onreadystatechange = function(){
            if (httprequest.readyState===4 && httprequest.status===200){
                console.log(httprequest.responseText);
                if(httprequest.responseText="success"){
                    window.location.assign("http://localhost/project/Admin/editEmployee");
                }
                
            }
        }

        var url="http://localhost/project/Admin/updateEmployeeDetails/address/"+add;
        httprequest.open("POST",url,true)
        httprequest.send()
        }
}
