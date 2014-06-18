(function() { 

	var app = angular.module("myrtle",[]); 

	
	app.controller('LarkController', function(){
		this.photos = photos; 
		this.description = description;
		this.title = title;
	});

	app.controller('ReviewController', function(){
		this.review = {}; // set review to an empty object...will be filled with our data.
		this.addReview = function(product) {
			product.reviews.push(this.review); //push the controller review on the reviews array.
			this.review =  {}; // clear the form hide the live preview
			alert('Hey you did it.');
		};
	});


	var title = "Myrtle Beach Vacation Rental";
	var description = "Welcome to our vacation home at the beach!";
	var photos = [ 
		{
			caption: 'Come on in!',
			image: [
		      "build/img/beach1.jpg",
		    ],
		},
		{
			caption: 'Dining Room with island, great for entertaining.',
			image: [
		      "build/img/beach2.jpg",
		    ],
		},

		{
			caption: 'A view of the living room from the dining room table.',
			image: [
		      "build/img/beach3.jpg",
		    ],
		},

		{
			caption: 'The master bedroom.',
			image: [
		      "build/img/beach4.jpg",
		    ],
		},

		{
			caption: 'Laundry and bathroom attached to the master bedroom.',
			image: [
		      "build/img/beach5.jpg",
		    ],
		},

		{
			caption: 'Bathroom, towels are provied.',
			image: [
		      "build/img/beach6.jpg",
		    ],
		},

		{
			caption: 'The sunroom.  A great place to read the morning paper.',
			image: [
		      "build/img/beach7.jpg",
		    ],
		},

		{
			caption: 'The sunroom looking out into the rest of the home.',
			image: [
		      "build/img/beach8.jpg",
		   ],
		},
		{
			caption: 'The cozy living room with updated furniture.',
			image: [
		      "build/img/beach9.jpg",
		    ],
		},

		{
			caption: 'View of the house from across the street.',
			image: [
		      "build/img/beach10.jpg",
		    ],
		},

		

		{
			caption: 'Just a few feet from the beach access.',
			image: [
		      "build/img/beach11.jpg",
		    ],
		},

		{
			caption: 'Viewing the house coming back from the beach.  The outdoor shower is great to rinse off.',
			image: [
		      "build/img/beach12.jpg",
		    ],
		},

		

		{
			caption: 'The breakfast nook and entryway.',
			image: [
		      "build/img/beach13.jpg",
		    ],
		},

		{
			caption: 'A bedroom.',
			image: [
		      "build/img/beach14.jpg",
		    ],
		},	
		{
			caption: 'Big closet in the bedroom.',
			image: [
		      "build/img/beach15.jpg",
		    ],
		},
		{
			caption: 'Another bedroom with attached bathroom.',
			image: [
		      "build/img/beach16.jpg",
		    ],
		},
		{
			caption: 'Bedroom looking out into the kitchen area.',
			image: [
		      "build/img/beach17.jpg",
		    ],
		},
		{
			caption: 'Kitchen.',
			image: [
		      "build/img/beach18.jpg",
		    ],
		},
	];
	

})();