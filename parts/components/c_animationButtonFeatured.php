<a href="#" class="c-animationButtonFeatured">Carnaval</a>

<script>
    var animateButton = function(e) {

        e.preventDefault;
        //reset animation
        e.target.classList.remove('animate');

        e.target.classList.add('animate');
        setTimeout(function(){
            e.target.classList.remove('animate');
        },700);
    };

    var bubblyButtons = document.getElementsByClassName("c-animationButtonFeatured");

    for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('mouseenter', animateButton, false);
    }
</script>
