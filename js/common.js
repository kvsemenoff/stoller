

$(document).ready(function(){


    $(window).resize(function(){
        if($(this) > 1200){
            $( window ).scroll(function() { 

                var topValue = -$( this ).scrollTop() / 2; 
                var opacityValueTel = 1.5 - (( $( this ).scrollTop() / 100) * 0.9); 

                $( '.h-tel' ).css({ 

                    top: topValue, 
                    opacity: opacityValueTel 

                }); 

                var opacityValueLogo = 1.5 - (( $( this ).scrollTop() / 100) * 0.7); 

                $( '.h-logo-img' ).css({ 

                    top: topValue, 
                    opacity: opacityValueLogo 

                }); 

            });
        }
    });
    /*MODAL WINDOW*/
    $(".js-phone").mask("+380 99 - 999 - 99 - 99?");

    $('a[name="js-modal"]').on("click", function(e){
        e.preventDefault();
        var  id = $(this).attr('href'),
        winW = $(window).width(),
        winH = $(window).height();
        $(id).css("left", winW/2-$(id).width()/2);
        $(id).css("top", winH/2-$(id).height()/2);
        $('body').css("overflow-y", "hidden");
        $(id).fadeIn();
        $('#js-mask').fadeIn();
    });
    

    $('#js-mask').on("click", function(){
        $('#js-mask').hide();
        $('.js-window').hide();
        $('body').removeAttr("style");

    });

    /*MODAL SUBMIT*/
    $('.js-submit').submit(function(){
        var phone = $(this).find('input[name="phone"]');
        
        if(phone.val() == ""){
            phone.focus();
            return false;
        }

        else{
            var form_data = $(this).serialize(); 
            $.ajax({
                type: "POST", 
                url: "/message.php", 
                data: form_data,
                success: function() {
                    cleanTnanks(this);
                }
            });
        }
        return false;
    });

    function cleanTnanks(form){
        $('.js-window').hide();
        $("input[type=text]").val("");
        $('a[href=#js-form2]').trigger('click');
                // location = "thanks.php";
            };


            $('.az-select').each(function(){
                var select = $(this);    
                var option = select.find('select option');
                var str = '<div class="az-options">';
                select.find('option').each(function(){
                    str+= '<div data-val="' +$(this).val() + '">' + $(this).text() + '</div>'
                });
                str+= '</div>';
                select.html(select.html() + str);

                select.find('select').mousedown(function(){
                    return false;
                });
                select.mouseup(function(){
                    select.find('select').focus();
                });
                select.find('.az-options div[data-val]').click(function(){
                    select.find('select').val($(this).attr('data-val'));
                });
                select.find('select').focusout(function(){
                    if(!select.is(':hover')){
                        select.find('.az-options').slideUp(0);
                        select.removeClass('az-select-focus');
                    }
                });
            });

            $(".az-select").click(function(){
                $(this).find('.az-options').slideToggle(0);
                $(this).toggleClass('az-select-focus');
            });


        });


