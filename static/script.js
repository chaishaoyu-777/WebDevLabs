function validate() {
    console.log("Here")
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var zip = document.getElementById("zip");
    var msg = document.getElementById("ValidateMsg");
    console.log(name)
    console.log(email)
    console.log(phone)
    console.log(zip)

    


    if (!name.checkValidity() || !email.checkValidity() || !phone.checkValidity() || !zip.checkValidity()) {
    msg.innerHTML = "Please fill out the form correctly so I can get back to you :)";
    }
 }



  $(document).ready(function() {
    const $carousel = $('.carousel-inner');
    const $items = $carousel.children();
    const $indicators = $('.carousel-indicators');
    let currentIndex = 0;
    const itemCount = $items.length;
    
    // Create indicators
    $items.each(function(index) {
      $indicators.append(`<div class="carousel-indicator" data-index="${index}"></div>`);
    });
    
    // Set first indicator as active
    $('.carousel-indicator').first().addClass('active');
    
    // Next button click handler
    $('.next').click(function() {
      currentIndex = (currentIndex + 1) % itemCount;
      updateCarousel();
    });
    
    // Previous button click handler
    $('.prev').click(function() {
      currentIndex = (currentIndex - 1 + itemCount) % itemCount;
      updateCarousel();
    });
    
    // Indicator click handler
    $indicators.on('click', '.carousel-indicator', function() {
      currentIndex = parseInt($(this).data('index'));
      updateCarousel();
    });
    
    
    // Pause on hover (optional)
    $carousel.hover(
      function() { clearInterval(interval); },
      function() {
        interval = setInterval(function() {
          currentIndex = (currentIndex + 1) % itemCount;
          updateCarousel();
        }, 5000);
      }
    );
    
    function updateCarousel() {
      const translateX = -currentIndex * 100;
      $carousel.css('transform', `translateX(${translateX}%)`);
      
      // Update indicators
      $('.carousel-indicator').removeClass('active');
      $('.carousel-indicator').eq(currentIndex).addClass('active');
    }
  });

  document.addEventListener('DOMContentLoaded', function() {
    // Make phone links more visible on mobile
    if ('ontouchstart' in window) {
        const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
        phoneLinks.forEach(link => {
            link.style.display = 'inline-block';
            link.style.padding = '0.3rem 0.6rem';
            link.style.backgroundColor = '#f0f0f0';
            link.style.borderRadius = '4px';
            link.style.margin = '0.2rem 0';
        });
    }
  })

  $(document).ready(function() {
    $('.product-image').click(function() {
        $(this).toggleClass('zoomed');
    });
});