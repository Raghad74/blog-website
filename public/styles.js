$(".edit-form").hide();
$(".edit").click(function(){
    var c=this.classList[this.classList.length-1];
    $("."+c+"_").toggle();

});
$( ":text" ).addClass("shadow-sm")