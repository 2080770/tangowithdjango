$(document).ready(function() {

	$('#likes').click(function(){
	        var catid;
	        catid = $(this).attr("data-catid");

	         $.get('/rango/like_category/', {category_id: catid}, function(data){
	                   $('#like_count').html(data);
					   $('#likes').hide()
					   
					   if (vote = "False"){
							$('#likes').html("<span class='glyphicon glyphicon-thumbs-up'></span> Like");
					   }
					   else {
							$('#likes').html("<span class='glyphicon glyphicon-thumbs-down'></span> Unlike");
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
