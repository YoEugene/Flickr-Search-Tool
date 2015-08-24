$(function(){

	$('#submit').on('click', function(){

		$('#image-container').empty();

		var searchTerm = $('#search-term').val();

		$.get('http://analytics.qsearch.cc/adapi/api_searchflkrimage?query=' + searchTerm, 
			function(resp) {
				// console.log(resp);

			var photoArr = JSON.parse(resp).photo;

			// console.log(resp);
			console.log(photoArr);
			console.log($(photoArr));

			$(photoArr).each(function( i, v ){
				console.log( i );
				console.log( v );
				$('#image-container').append('<div><img src=' + v.url_c + ' width="250" style="margin:5px;"></img><a href=' + v.url_c + ' style="position: relative;top: -60px;">' + v.url_c + '</a></div><br>');

			})


		})


		

		// $('#image-container').append("<img src="+ ")


	})



})