$(document).ready(function() {

    // SVG Timer Function
    function flowerPower() {

        window.setTimeout(function(){
            $('.layer_1').show();            
        }, 1000);

        window.setTimeout(function(){
            $('.layer_1').hide();
            $('.layer_2').show();            
        }, 1500);

        window.setTimeout(function(){
            $('.layer_2').hide();
            $('.layer_3').show();            
        }, 2000);

        window.setTimeout(function(){
            $('.layer_3').hide();
            $('.layer_4').show();            
        }, 2500);

        window.setTimeout(function(){
            $('.layer_4').hide();
            $('.layer_2').show();            
        }, 3000);

        window.setTimeout(function(){
            $('.layer_2').hide();
            $('.layer_5').show();            
        }, 3500);

        window.setTimeout(function(){
            $('.layer_5').hide();
            $('.layer_6').show();            
        }, 4000);

        window.setTimeout(function(){
            $('.layer_6').hide();
        }, 4500);

        window.setTimeout(function(){
            $('.layer_6').show();            
        }, 5000);

        window.setTimeout(function(){
            $('.layer_6').hide();
        }, 5500);

        window.setTimeout(function(){

            $('.layer_6').show();            
        }, 6000);

        window.setTimeout(function(){
            $('.layer_6').hide();
        }, 6500);

        window.setTimeout(function(){
            $('.layer_6').show();            
        }, 7000);

        window.setTimeout(function(){
            $('.layer_6').hide();
        }, 7500);

        window.setTimeout(function(){
            $('.layer_4').show();            
        }, 8000);
    } 

    // Calls
    flowerPower();    

});