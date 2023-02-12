console.log('7.2 [AJAX] – Pobierz dane po kliknięciu przycisku – jQuery (warsztat)');

// let btn2 = document.getElementById('btn2')

// btn2.addEventListener('click')
// console.log('btn2');
//  wariant 1
// $(document).ready(function () {
//     $('#btn2').click(function () {
//         $.get('https://akademia108.pl/api/ajax/get-post.php')
//             .done(function (data) {
//                 let pID = $('<p></p>').text(`Post Id: ${data.id}`);
//                 // console.log(pID);
//                 let userId = $('<p></p>').text(`User ID: ${data.userId}`);
//                 let pTitle = $('<p></p>').text(`title : ${data.title}`);
//                 let pBody = $('<p></p>').text(`body: ${data.body}`);
//                 let hr = $('<hr></hr>');

//                 let jqBody = $('body').append(pID);



//                 jqBody.append(pID);
//                 jqBody.append(userId);
//                 jqBody.append(pTitle);
//                 jqBody.append(pBody);
//                 jqBody.append(hr);



//                 console.log(data);
//             })
//             .fail(function (error) {
//                 console.error(error);
//             });


//         // console.log(`click #btn2`);
//     });


// });

// wariant 2 (jestesmy ograniczeni tylko do JSON poniewaz odczytuje pliki formatu json )
$(document).ready(function () {
    $('#btn2').click(function () {
        $.getJSON('https://akademia108.pl/api/ajax/get-post.php')
            .done(function (data) {
                let pID = $('<p></p>').text(`Post Id: ${data.id}`);
                // console.log(pID);
                let userId = $('<p></p>').text(`User ID: ${data.userId}`);
                let pTitle = $('<p></p>').text(`title : ${data.title}`);
                let pBody = $('<p></p>').text(`body: ${data.body}`);
                let hr = $('<hr></hr>');

                let jqBody = $('body').append(pID);



                jqBody.append(pID);
                jqBody.append(userId);
                jqBody.append(pTitle);
                jqBody.append(pBody);
                jqBody.append(hr);



                console.log(data);
            })
            .fail(function (error) {
                console.error(error);
            });


        // console.log(`click #btn2`);
    });


});


