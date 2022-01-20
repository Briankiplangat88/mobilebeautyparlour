function Booking(name, service, time, dressor, massage, others, street, city, county, email) {
    this.name = name;
    this.service = service;
    this.time = time;
    this.dressor = dressor;
    this.massage = massage;
    this.others = others;
    this.street = street;
    this.city = city;
    this.county = county;
    this.email = email;

    

}
$(document).ready(function(){



    $(".service").click(function(){
        alert("The paragraph was clicked.");
      });

    $("#form").submit(function (event) {
        event.preventDefault();
        var userName = $("#name").val();
        alert(userName)
        var service = $("#service").val();
        alert(service)
        var timeForService = $("#timeForServie").val();
        var hairDressor = $("#hair-dressor").val();
        var massager = $("#masseuse").val();
        var others = $("#manicurist").val();
        var street = $("#street").val();
        var city = $("#city").val();
        var county = $("#county").val();
      

        var fullOrder = new Booking(userName, service, timeForService, hairDressor, massager, others, street, city, county);
      
        if (service==="Hair-dressing" && timeForService==="8am - 10am") {
         
            $("#label-one").show();
            $("#hair-dressor").show();
        }
        else if(service==="massage" && timeForService==="10am - 12noon"){
            $("#label-two").show();
            $("#masseuse").show();
        }else{
            $("#label-three").show();
            $("#manicuris").show();
        }
    })
   

})
