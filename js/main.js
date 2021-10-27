$('#dodajForm').submit(function() {
    event.preventDefault();
    console.log("Dodavanje");
    const $form = $(this);
    const $input = $form.find('input, select, button, textarea');

    const serijalizacija = $form.serialize();
    console.log(serijalizacija);

    $input.prop('disabled', true);

    request = $.ajax({
        url: 'handler/add.php',
        type: 'post',
        data: serijalizacija
    });

    request.done(function(response, textStatus, jqXHR) {
        if (response == "Success") {
            alert("Kolokvijum uspesno zakazan");
            console.log("Dodat kolokvijum");
            location.reload(true);
        } else {
            console.log("Kolokvijum nije zakazan " + response);
        }
        console.log(response);
    });

    request.fail(function(jqXHR, textStatus, errorThrown) {
        console.error("Sledeca greska se desila: " + textStatus, errorThrown);
    });



})