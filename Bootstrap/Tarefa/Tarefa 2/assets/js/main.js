const errorCode = {
    nome: '#custom-toast-1',
    email: '#custom-toast-2',
    fsa: '#custom-toast-3',
    desc: '#custom-toast-4'
}

const toaster = document.querySelector('#toaster')

function raiseToast(id) {
    const toast = new bootstrap.Toast(id)
    toast.show()
}

function resetToasts(){
    setTimeout(() => {
        $(toaster).html('')
    }, 6000);
}

function setErrorMessage(msg){
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

function setSuccessMessage(msg){
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
                fsa: {
                    required: true
                },
                desc: {
                    required: true
                }
            },
            messages: {
                nome: '',//setErrorToast(1,'O nome passado é inválido'),
                email: '',//setErrorToast(2,'O e-mail passado é inválido'),
                fsa: '',//setErrorToast(3,'O titulo passado é inválido'),
                desc:'' //setErrorToast(4,'A descrição passada é inválida')

            },
            submitHandler: (function (form) {
                if (($('#nome').val()).split().length < 2) {
                    setErrorToast(`Os seguintes campos necessitam de correção: \n <strong>insira um sobrenome no campo do nome</strong>`)
                } else {
                    alert('CLEAN')
                }

            }),
            invalidHandler: (function (e, validate) {
                e.preventDefault()
                let errors = validate.errorList
                let er = ''
                errors.forEach(err => {
                    if (err.element.name == 'nome'){
                        er += 'Nome, '
                    }else if (err.element.name == 'email'){
                        er += 'E-mail, '
                    }else if (err.element.name == 'fsa'){
                        er += 'Título, '
                    }else if (err.element.name == 'desc'){
                        er += 'Descrição'
                    }
                    
                });
                setErrorToast(`Os seguintes campos necessitam de correção: \n <strong> ${er} </strong>`) 
            })
        })
    })
})