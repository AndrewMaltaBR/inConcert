// json for test //

$.getJSON('test.json', function(data) {
	for(var i=0;i<data.length;i++) {
		var htmlCard = `<section class="card">
			          <header class="card-header">
			            <div class="profile-img"></div>
			            <div class="profile"></div>
			            <button class="btn bordered btn-follow"></button>
			          </header>
			          <div class="card-body"></div>
			          <footer class="card-footer">
			            <div class="title"></div>
			            <div class="options">
			              <button class="btn rounded option like"><i class="fa fa-heart-o"></i></button>
			              <button class="btn rounded option comment"><i class="fa fa-comments"></i></button>
			              <button class="btn rounded option share"><i class="fa fa-share"></i></button>
			            </div>
			          </footer>
			        </section>`;
		$('.content').append(htmlCard);

		// header //

		var card = $('.card:last-child');

		card.find('.profile').html(data[i].profile.name);
		if(!data[i].profile.img)
			card.find('.profile-img').css('background-image','url("assets/img/profile/noprofile.png")');
		else
			card.find('.profile-img').css('background-image','url("assets/img/profile/'+data[i].profile.img+'")');
		if(data[i].profile.publicity)
			card.find('.profile').append('&nbsp;<i class="fa fa-star"></i>');
		if(data[i].profile.follow)
			card.find('.btn-follow').html('<i class="fa fa-check"></i>&nbsp;&nbsp;Seguindo');
		else
			card.find('.btn-follow').html('<i class="fa fa-plus"></i>&nbsp;&nbsp;Seguir');

		// body //

		card.find('.card-body').html('<img src="assets/img/'+data[i].event.img+'" />');

		// footer //

		card.find('.title').html('&nbsp;'+data[i].event.title);
		if(data[i].event.liked)
			card.find('.like').html('<i class="fa fa-heart"></i>');
		else
			card.find('.like').html('<i class="fa fa-heart-o"></i>')
		card.find('.like').append('&nbsp;'+data[i].event.likes);
		card.find('.comment').append('&nbsp;'+data[i].event.comments);
		card.find('.share').append('&nbsp;'+data[i].event.shares);
	}
});

// menu toggle //

$('.menu-btn').click(function(){
	$('.content').toggleClass('opened');
	$('.menu').toggleClass('opened');
});

// functions //