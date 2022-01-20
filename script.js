window.onscroll = function fixedtop() {
    let header2 = document.getElementById("header2");
    let sticky = header2.offsetTop + 70;
    (window.pageYOffset >= sticky) ? header2.setAttribute("class", "fixedtop") : header2.removeAttribute("class", "fixedtop");
}
$ (() => {
    let flag = true;
    switcher();
    $(window).resize ( switcher );
    function switcher() {
        if ($(window).width() < 768) {
            $( "#menu" ).hide();
            $( "#hamburger" ).show();
            $( "#menu>li" ).css('display', 'block');
        } else {
            $( "#menu" ).show();
            $( "#hamburger" ).hide();
            $( "#menu>li" ).css('display', 'inline-block')
        }
    }
    $( "#hamburger" ).click(function() {
        $( "#menu" ).slideToggle( "slow", () => {
            $( this ).html( flag ? 'x' : '&#9776;');
            flag = !flag;
        });
    });
    let btn = $('#button');  
    $(window).scroll(function() {     
        if ($(window).scrollTop() > 300) {
        btn.addClass('show');
        } else {
        btn.removeClass('show');
        }
    });
    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
    });
});


function perfectweightF() {
    let perfectWeight = document.getElementById("perfectWeight");
    let height = document.getElementById("inputHeight");
    perfectWeight.innerHTML = Math.round((height.value - 110)*1.15);
}
function perfectweightM() {
    let perfectWeight = document.getElementById("perfectWeight");
    let height = document.getElementById("inputHeight");
    perfectWeight.innerHTML = Math.round((height.value - 100)*1.15);
}