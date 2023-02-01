$(function(){
    $("#wizard").steps({
        headerTag: "h4",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        transitionEffectSpeed: 500,
        onStepChanging: function (event, currentIndex, newIndex, formData) {
            if ( newIndex >= 1 ) {
                $('.actions ul').addClass('actions-next');
            } else {
                $('.actions ul').removeClass('actions-next');
            }
            // Save the form data in the formData object before moving to the next step
            console.log({stepChangingformData: formData});
            this.formData.splice(currentIndex, 0, $('form').serializeArray());
            return true;
        },
        onFinished: function (event, currentIndex) {
            $(document).trigger('finished', [this.formData]);
        }.bind(this),
        labels: {
            finish: "Finish",
            next: "Continue",
            previous: "Back"
        }
    });
// Custom Steps
    $('.wizard > .steps li a').click(function(){
        $(this).parent().addClass('checked');
        $(this).parent().prevAll().addClass('checked');
        $(this).parent().nextAll().removeClass('checked');
    });
// Custom Button Jquery Step
    $('.forward').click(function(){
        $("#wizard").steps('next');
    });
    $('.backward').click(function(){
        $("#wizard").steps('previous');
    });
// Input Focus
    $('.form-holder').delegate("input", "focus", function(){
        $('.form-holder').removeClass("active");
        $(this).parent().addClass("active");
    });
});