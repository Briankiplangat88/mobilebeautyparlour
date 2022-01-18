// business logic
function Booking(name, service, time, street, city, county ){
    this.name = name;
    this.service =service;
    this.time = time;
    this.street = street;
    this.city =city;
    this.county =county;
}



// user interface
$(document).ready(function(){
   

    $("#form").submit(function(event){
        event.preventDefault();

        

    });
});