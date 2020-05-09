var buttons = document.querySelectorAll('.filter_tabs li a');
var show_images = document.querySelectorAll('.filter_images li');

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
        //alert(buttons.length);
        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('active');
        }
        this.classList.add('active');
        var target = this.getAttribute('data-target');
        for (var k = 0; k < show_images.length; k++) {
            //console.log(show_images);
            show_images[k].classList.remove('show');
            show_images[k].classList.add('hide');
            
            if (show_images[k].getAttribute('data-id') == target) {
                show_images[k].classList.add('show');
                show_images[k].classList.remove('hide');
            }
            if (target == 'all') {
                show_images[k].classList.add('show');
                show_images[k].classList.remove('hide');
            }
        }
    });
}