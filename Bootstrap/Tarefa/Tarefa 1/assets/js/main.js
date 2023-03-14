const emailErrorMessage = 'É necessário informar um endereço de e-mail válido'
const nameErrorMessage = 'É necessário informar um nome válido'
const telErrorMessage = 'Este telefone é inválido'

function setMessage(errorMsg) {
    let message =`
        <div class="row justify-content-center mt-4">
            <div class="col">
                <div class="alert-area">
                    <div class="alert alert-warning alert-dismissible" data-bs-dismiss="alert">
                        <button class="btn-close"></button>
                        ${errorMsg}
                        <div class=" timer"></div>
                    </div>
                </div>
            </div>
        </div><br>
    `
    return message
}


$(document).ready(() => {
    $('#tel').mask('(00) 00000-0000')
    $('form').on('submit', function (e) {
        e.preventDefault()
        $('form').validate({
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true
                },
                tel: {
                    required: true
                }
            },
            messages: {
                nome: `${setMessage(nameErrorMessage)}`,
                email: `${setMessage(emailErrorMessage)}`,
                tel: `${setMessage(telErrorMessage)}`,

            },
            submitHandler: (function (form) {
                if((($('#nome').val()).split(' ')).length < 2){
                    const invalidName = 'Use pelo menos 1 sobrenome'
                    $(setMessage(invalidName)).appendTo($('#custom-messages'))
                    setTimeout(()=> {
                        $('#custom-messages').html('')
                    },8000)
                }else{
                    form.submit()
                }
            }),
            invalidHandler: (function (e, validate) {
                e.preventDefault()
                console.log(validate.numberOfInvalids())
            })
        })
    })
})