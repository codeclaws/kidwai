  // Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
      $('.top-header').css({'background':'#000'});


      $('.logo-centered').css({'margin':'-36px 0'});
      $('.logo').css({'width':'100px','height':'100px'});
    } else {
      $('#header').removeClass('header-scrolled');
      $('.top-header').css({'background':'transparent'});

      $('.logo-centered').css({'margin':'-141px 0'});

      $('.logo').css({'width':'300px','height':'300px'});

    }
  });


  $('select').change(function () {

  

    var optionSelected = $(this);
    var valueSelected  = optionSelected.val();
    var textSelected   = optionSelected.text();

    var fila = $(this).parents(".productos-desplegable").children('.prce-container').children('.price').html(valueSelected);


  });

  // $('.toggle-btn').click(function(){
  //   $('.offcanvas-collapse').toggle();
  // })


  $('.toggle-btn').click(function(){
    $('.offcanvas-collapse').css({'width':'50%','visibility':'visible'});
  })

  $('.toggle-btn2').click(function(){
    $('.offcanvas-collapse').css({'width':'0%','visibility':'hidden'});
  })