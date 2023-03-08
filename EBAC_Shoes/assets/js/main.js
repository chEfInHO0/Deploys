$(document).ready(() => {
    $('.size-list').children().on('click', ($this) => {
        let btnCount = $($this.target).siblings().length
        for (let c = 0; c != btnCount; c++) {
            if ($($this.target).siblings()[c].classList.contains('selected')) {
                $($this.target).siblings()[c].classList.remove('selected')
            }
        }
        if ($this.target.classList.value == '') {
            $this.target.classList.add('selected')
        }
    })

    $('.prod-list select').on('change',function ($this){
        let selectedVal = $($this.target).val()
        if (selectedVal == 'preto'){
            $($this.target).siblings('img')[0].src = 'https://imgs.ponto.com.br/1553194630/1xg.jpg'
        }else if(selectedVal == 'branco'){
            $($this.target).siblings('img')[0].src = 'https://imgs.ponto.com.br/1553194643/1xg.jpg?imwidth=500'
        }else{
            $($this.target).siblings('img')[0].src = 'https://authenticfeet.vteximg.com.br/arquivos/ids/289734-1000-1000/DM011-3-101-3.jpg?v=638066459476970000'
        }
        
    })

    $('#anchorA').click(function (){
        $('html').animate({
            scrollTop:$('#about').offset().top
        },1000)
    })

    $('#anchorB').click(function (){
        $('html').animate({
            scrollTop:$('#prod').offset().top
        },1000)
    })

    $('.cart').click(function ($this) {
        console.log($this.target)
        console.log($($this.target).siblings('p.size-list')[0])
        let a = $($this.target).siblings('p.size-list')[0]
        let btnCount = $(a).children().length
        for (let c = 0; c != btnCount; c++) {
            $(a).children()[c].classList.remove('selected')
        }
    })


})