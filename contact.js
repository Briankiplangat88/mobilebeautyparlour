$(document).ready(function(){
    function verify(){
        let name = document.getElementById('idname').value;
        let email = document.getElementById('idemail').value;
        if(name==''){
            alert('input valid name');
            return false
        }
        if(email==''){
            alert('input valid email');
            return false
        }
    alert('welcome '+name)
    alert('your message has been received.Thanks')
    }});
