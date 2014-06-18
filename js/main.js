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
			caption: 'Come on in 2144 Lark, Oceanside Village',
			image: [
		      "build/img/beach1.jpg",
		    ],
		},
		{
			caption: 'The living room with updated furniture.',
			image: [
		      "build/img/beach9.jpg",
		    ],
		},
		{
			caption: 'A view of the living room from the dining room table.',
			image: [
		      "build/img/beach3.jpg",
		    ],
		},
		{
			caption: 'Dining Room with island, great for entertaining.',
			image: [
		      "build/img/beach2.jpg",
		    ],
		},
		
		{
			caption: 'The sunroom.  A great place to play games or stay connected with secure wireless internet!',
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
			caption: 'We love to cook so you will find our kitchen fully equipped.',
			image: [
		      "build/img/beach18.jpg",
		    ],
		},
		{
			caption: 'Breakfast nook and entry way with view of the fourth bedroom.',
			image: [
		      "build/img/beach13.jpg",
		    ],
		},
		{
			caption: 'Master bedroom with queen size bed and television',
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
			caption: 'Main bath - Bed linens and towels included in rental',
			image: [
		      "build/img/beach6.jpg",
		    ],
		},
		{
			caption: 'Second bedroom with queen size bed.',
			image: [
		      "build/img/beach14.jpg",
		    ],
		},	
		{
			caption: '',
			image: [
		      "build/img/beach15.jpg",
		    ],
		},

		{
			caption: 'Third bedroom with a full bed is perfect for the kids!',
			image: [
		      "build/img/beach19.jpg",
		    ],
		},
		{
			caption: '',
			image: [
		      "build/img/beach20.jpg",
		    ],
		},

		{
			caption: 'Fourth bedroom with a full size bed and private half bath',
			image: [
		      "build/img/beach16.jpg",
		    ],
		},
		{
			caption: '',
			image: [
		      "build/img/beach17.jpg",
		    ],
		},
		{
			caption: 'Birds eye view of our homes located on the first row of Ocean Blvd.  You can see the Oceanfront houses in the backgroud.',
			image: [
		      "build/img/beach10.jpg",
		    ],
		},
		{
			caption: 'Just a few feet from Beach access in Surfside Beach one mile north of the Garden City Pier',
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
	];
	

})();