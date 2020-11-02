$(document).ready(function () {
    $('#features .card').on('mouseover', function () {
        var $this = $(this);
        $this.find('.card-body').addClass('flipped');
        $this.find('.card-body-back').removeClass('flipped');

        $this.on('mouseout', function () {
            $this.find('.card-body').removeClass('flipped');
            $this.find('.card-body-back').addClass('flipped');
        });
    });


});