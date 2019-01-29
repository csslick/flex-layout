$(function(){

  $('#content').imagesLoaded({ }, function(){
    console.log('All images loaded');

    $(".main-visual").vegas({
      slides: [
          { src: "images/main-visual1.jpg" },
          { src: "images/main-visual2.jpg" },
          { src: "images/main-visual3.jpg" },
          { src: "images/main-visual4.jpg" }
      ],
      timer: true,
      // transition: 'slideLeft2',
      delay: 5000
    });  
  });

  // $('#content .main-visual')
  //   .css({
  //     backgroundImage: 'url("images/main-visual2.jpg")'
  //   })


});
