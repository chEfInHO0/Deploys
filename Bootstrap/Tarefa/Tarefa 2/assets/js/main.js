const toaster = document.querySelector('#toaster')
const formBtn = document.querySelector('#submiter')
let nav = document.querySelector('#nav-toggle')

function raiseToast(id) {
    const toast = new bootstrap.Toast(id)
    toast.show()
}

function resetToasts() {
    setTimeout(() => {
        $(toaster).html('')
    }, 5000);
}

function setErrorMessage(msg) {
    return `
            <div class="toast" id="failed-toast">
                <div class="toast-header justify-content-between">Ocorreu um erro<span class="btn-close"
                        data-bs-dismiss="toast"></span></div>
                <div class="toast-body">
                    ${msg}
                </div>
            </div>
    `
}

function setSuccessMessage(msg) {
    return `
            <div class="toast" id="success-toast">
                <div class="toast-header justify-content-between">Obrigado por entrar em contato<span class="btn-close"
                        data-bs-dismiss="toast"></span></div>
                <div class="toast-body">
                    ${msg}
                </div>
            </div>
    `
}

function setErrorToast(msg) {
    let t = setErrorMessage(msg)
    $(t).appendTo(toaster)
    raiseToast(`#failed-toast`)
    resetToasts()
}

function setSuccessToast(msg) {
    let t = setSuccessMessage(msg)
    $(t).appendTo(toaster)
    raiseToast(`#success-toast`)
    resetToasts()
}

$(document).ready(() => {
    $(formBtn).click(function () {
        console.log('teste')
        $('form').submit()
    })
    $('#Asec1').click(function () {
        $("#sec1").get(0).scrollIntoView({behavior: 'smooth'});
    })
    $('#Asec2').click(function () {
        $("#sec2").get(0).scrollIntoView({behavior: 'smooth'});
    })
    $('#Asec3').click(function () {
        $("#sec3").get(0).scrollIntoView({behavior: 'smooth'});
    })
    $('#Asec4').click(function () {
        $("#sec4").get(0).scrollIntoView({behavior: 'smooth'});
    })
    $('form').on('submit', function (e) {
        e.preventDefault()
        $('form').validate({
            focusInvalid: false,
            rules: {
                nome: {
                    required: true
                },
                email: {
                    required: true
                },
                fsa: {
                    required: true
                },
                desc: {
                    required: true
                }
            },
            messages: {
                nome: 'Nome inválido',
                email: 'E-mail inválido',
                fsa: 'Título inválido',
                desc: 'Descrição inválida (minimo de 150 caracteres)'
            },
            submitHandler: (function (form) {
                if (($('#nome').val()).split(' ').length < 2) {
                    setErrorToast(`Os seguintes campos necessitam de correção: \n <strong>insira um sobrenome no campo do nome</strong>`)
                } else if($('#desc').val().split('').length < 150) {
                    setErrorToast(`Os seguintes campos necessitam de correção: \n <strong>descrição necessita de pelo menos 150 caracteres</strong>`)
                }else{
                    setSuccessToast(`Em breve estaremos retornando o contato através do seu e-mail \n <strong> ${$('#email').val()} </strong>`)
                    setTimeout(()=>{
                        form.submit()
                    },4000)
                }
            }),
            invalidHandler: (function (e, validate) {
                e.preventDefault()
                let errors = validate.errorList
                let er = ''
                errors.forEach(err => {
                    if (err.element.name == 'nome') {
                        er += 'Nome, '
                    } else if (err.element.name == 'email') {
                        er += 'E-mail, '
                    } else if (err.element.name == 'fsa') {
                        er += 'Título, '
                    } else if (err.element.name == 'desc') {
                        er += 'Descrição'
                    }
                });
                setErrorToast(`Os seguintes campos necessitam de correção: \n <strong> ${er} </strong>`)
            })
        })
    })
})