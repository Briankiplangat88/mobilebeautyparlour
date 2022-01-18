// business logic
function Booking(name, service, time, dressor, massage, others,street, city, county,email ){
    this.name = name;
    this.service =service;
    this.time = time;
    this.dressor = dressor;
    this.massage = massage;
    this.others = others;
    this.street = street;
    this.city =city;
    this.county =county;
    this.email =email;
}

var yourOder;


// user interface
$(document).ready(function(){
   

    $("#form").submit(function(event){
        event.preventDefault();

        var fullname = $("#name").val();
        var service = $("#service").val();
        var timeForService = $("#timeForServie").val();
        var hairDressor =$("#hair-dressor").val();
        var masseuse = $("#masseuse").val();
        var otherServices = $("#manicurist").val();
        var street = $("#street").val();
        var city = $("#city").val();
        var county = $("#county").val();

        var bookedOrder =new Booking(fullname, service, timeForService, hairDressor, masseuse, otherServices,street,city,county);

        if(bookedOrder.service=="1" && bookedOrder.time =="1"){
            yourOder =$("#hair-dressor").toggle();
              
        } else if(bookedOrder.service =="2" && bookedOrder.time =="2"){
            yourOder = $("#masseuse").toggle();
         
        } else{
            yourOder = $("#manicurist").toggle();
          

        }
        alert("You will be served by " +hairDressor + " at your home in " + street );
        alert("You will be served by " +masseuse + " at your home in " + street );
        alert("You will be served by " +otherServices + " at your home in " + street );

        

    });
});