$(document).ready(function () {
    console.log('teste')
    const photo = $('#foto')
    const vid = $('#vid')
    const make = $('#makeup')
    const ps = $('#ps')
    const ai = $('#ai')
    const combo = $('#adobe')
    let description
    const formDesc = $('form #interesse')

    function scrollToForm() {
        $('form')[0].scrollIntoView({ behavior: 'smooth', block: 'center' })
    }

    $('#my-menu .nav-link').click(function () {
        if (screen.width < 1000) {
            $('.navbar-toggler').click()
        }
    })

    photo.click(function () {
        description = photo.data('value')
        scrollToForm()
        formDesc.val(description)
    })
    vid.click(function () {
        description = vid.data('value')
        scrollToForm()
        formDesc.val(description)
    })
    make.click(function () {
        description = make.data('value')
        scrollToForm()
        formDesc.val(description)
    })
    ps.click(function () {
        description = ps.data('value')
        scrollToForm()
        formDesc.val(description)
    })
    ai.click(function () {
        description = ai.data('value')
        scrollToForm()
        formDesc.val(description)
    })
    combo.click(function () {
        description = combo.data('value')
        scrollToForm()
        formDesc.val(description)
    })
    $('#submiter').click(function () {
        $('form').submit(function (e) {
            e.preventDefault()
        })
    })
    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 4
            },
            tel: {
                required: false,
                minlength: 14,
                maxlength: 15
            },
            email: {
                required: true
            },
            interesse: {
                required: false
            },
            desc: {
                required: false,
                minlength: 30
            }
        },
        messages: {
            nome: 'Nome inválido',
            tel: 'Telefone inválido',
            email: 'Email inválido',
            interesse: 'Motivo de contato inválido',
            desc: 'Descrição inválida'
        },
        submitHandler: function (form) {

        },
        invalidHandler: function (e, validate) {
            e.preventDefault()
        }

    })
})