$(document).ready(function () {

   function getItem() {
        $('#add-items').keydown(function (enter) {
            if (enter.keyCode == 13) {
                postItem();
            }
        });
    }

    getItem();

    function postItem() {
    	$('.shopping-list').append('<li class="list-item">'+$('#add-items').val()+'</li>');

    	$('#add-items').val("");

    }

   
    function clearList() {
    	$('.shopping-list').empty();

    }

    $('#clear').click(function (){
    	clearList();
    });

   

});

 $('.shopping-list').on('click','li',function() {
    	$(this).toggleClass("strike");

    });
