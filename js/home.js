//business Logic
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






//user interface
$(document).ready(function () {
    $("#form").submit(function (event) {
        event.preventDefault();

        var userName = $("#name").val();
        var service = $("#service").val();
        var timeForService = $("#timeForServie").val();
        var hairDressor = $("#hair-dressor").val();
        var massager = $("#masseuse").val();
        var others = $("#manicurist").val();
        var street = $("#street").val();
        var city = $("#city").val();
        var county = $("#county").val();

        var fullOrder = new Booking(userName, service, timeForService, hairDressor, massager, others, street, city, county);

        if (fullOrder.service == "1" && fullOrder.time == "1") {
            var selectedLabel = $("#label-one").show();
            var dressor = $("#hair-dressor").show();

            var newDressor = dressor;
            newDressor = true;

            function someFunction() {
                if (newDressor) {
                    $("#showDetails").show();
                    $("#blank").html(hairDressor);
                    $("#home").html(street);

                } else{
                    alert("false")

                }
            } someFunction();

        } else if (fullOrder.service == "2" && fullOrder.time == "1"){
            var selectedLabel = $("#label-two").show();
            var dressor = $("#masseuse").show();

            var newDressor = dressor;
            newDressor = true;

            function someFunction() {
                if (newDressor) {
                    $("#showDetails").show();
                    $("#blank").html(massager);
                    $("#home").html(street);

                } else{
                    alert("false")

                }
            } someFunction();

        } else {
            var selectedLabel = $("#label-three").show();
            var dressor = $("#manicurist").show();

            var newDressor = dressor;
            newDressor = true;

            function someFunction() {
                if (newDressor) {
                    $("#showDetails").show();
                    $("#blank").html(others);
                    $("#home").html(street);

                } else{
                    alert("false")

                }
            } someFunction();

        }



    })


})




// // business logic
// function Booking(name, service, time, dressor, massage, others, street, city, county, email) {
//     this.name = name;
//     this.service = service;
//     this.time = time;
//     this.dressor = dressor;
//     this.massage = massage;
//     this.others = others;
//     this.street = street;
//     this.city = city;
//     this.county = county;
//     this.email = email;
// }

// var yourOder;


// // user interface
// $(document).ready(function () {


//     $("#form").submit(function (event) {
//         event.preventDefault();

//         var fullname = $("#name").val();
//         var service = $("#service").val();
//         var timeForService = $("#timeForServie").val();
//         var hairDressor = $("#hair-dressor").val();
//         var masseuse = $("#masseuse").val();
//         var otherServices = $("#manicurist").val();
//         var street = $("#street").val();
//         var city = $("#city").val();
//         var county = $("#county").val();

//         var bookedOrder = new Booking(fullname, service, timeForService, hairDressor, masseuse, otherServices, street, city, county);

//         if (bookedOrder.service == "1" && bookedOrder.time == "1") {
//             $("#label-one").show();
//             yourOder = $("#hair-dressor").show();
//             $("#blank").html(hairDressor);
//             $("#home").html(street);



//         } else if (bookedOrder.service == "1" && bookedOrder.time == "2") {
//             $("#label-one").show();
//             yourOder = $("#hair-dressor").show();
//             $("#blank").html(hairDressor);
//             $("#home").html(street);

//         } else {
//             $("#label-one").show();
//             yourOder = $("#hair-dressor").show();
//             $("#blank").html(hairDressor);
//             $("#home").html(street);

//         }

//         if (bookedOrder.service == "2" && bookedOrder.time == "2") {
//             $("#label-two").show();
//             yourOder = $("#masseuse").show();
//             $("#blank").html(hairDressor);
//             $("#home").html(street);


//         } else if (bookedOrder.service == "2" && bookedOrder.time == "2") {
//             $("#label-two").show();
//             yourOder = $("#masseuse").show();
//             $("#blank").html(hairDressor);
//             $("#home").html(street);

//         } else {
//             $("#label-two").show();
//             yourOder = $("#masseuse").show();
//             $("#blank").html(hairDressor);
//             $("#home").html(street);

//         }


//         if (bookedOrder.service == "3" && bookedOrder.time == "3") {
//             $("#label-three").show();
//             yourOder = $("#manicurist").show();
//             $("#blank").html(hairDressor);
//             $("#home").html(street);

//         } else if (bookedOrder.service == "3" && bookedOrder.time == "3") {
//             $("#label-three").show();
//             yourOder = $("#manicurist").show();
//             $("#blank").html(hairDressor);
//             $("#home").html(street);
//         } else {
//             $("#label-three").show();
//             yourOder = $("#manicurist").show();
//             $("#blank").html(hairDressor);
//             $("#home").html(street);

//         }



//     });

// });