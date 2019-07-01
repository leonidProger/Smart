$(function () {
    $('.contact-form .name').keydown(function (e) {
        // console.log($(this).val());
        let code = e.keyCode || e.which;
        //console.log(code);
        if (code < 48 || code > 57 && code <96 || code>105 ){
            return true;
        }else{
            e.preventDefault();
        }

        this.value = this.value.substr(0, 10);
    })
});








$(function () {
    $('.contact-form').submit(function (e) {

        let name = $('.input-text-wrap input.name');
        let email = $('.input-text-wrap input.email');
        let text = $('.input-text-wrap textarea.text');



        if (name.val() == "") {
            name.parent().addClass('error');
            $('#valid').text('Поле имя не должно быть пустым');
            return false;
        }else{
           name.parent().removeClass('error');

        }





        if (email.val() != "") {
            var pattern = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
            if (pattern.test(email.val())) {
                email.parent().removeClass('error');
            } else {
                email.parent().addClass('error');
                $('#valid').text('Ви ввели не коректний  email ');
                return false;
            }
        }else{
            email.parent().addClass('error');
            $('#valid').text('Поле email не должно быть пустым');
            return false;
        }




        if (text.val() != "") {
            if (text.val().length > 15) {
                text.parent().removeClass('error');
            } else {
                text.parent().addClass('error');
                $('#valid').text('Поле текст должно содержать как минимум 15 символов');
                return false;
            }
        } else {
            text.parent().addClass('error');
            $('#valid').text('В поле текст не должно быть пустым');
            return false;
        }


    });
});


