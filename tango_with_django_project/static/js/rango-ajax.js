$(document).ready(function() {

	$('#likes').click(function(){
	        var catid;
	        catid = $(this).attr("data-catid");

            var likes;
            var voted;
	         $.get('/rango/like_category/', {category_id: catid}, function(data){

	                    var dict = JSON.parse(data);
	                    likes = dict["likes"]
	                    voted = dict["voted"]

	                   $('#like_count').html(likes);

					   if(voted == false){
					        $('#likes').html("<span class='glyphicon glyphicon-thumbs-up'></span> Like </button");
					   }

                       else {
                            $('#likes').html("<span class='glyphicon glyphicon-thumbs-down'></span> Unlike </button");
                       }


	               });
	    });


    	$('#suggestion').keyup(function(){
		var query;
		query = $(this).val();
		$.get('/rango/suggest_category/', {suggestion: query}, function(data){
                 $('#cats').html(data);
		});
	});

});
