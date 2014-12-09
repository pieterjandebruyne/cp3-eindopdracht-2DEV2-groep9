module.exports = (function(){
	//var ..... = require('./.....');

	var PostitForm = require('./PostitForm.js');
	var Postit = require('./Postit.js');
	var NewImage = require('./NewImage.js');

	
	
    var actionDropdown= 1, actionBg = 1;


	function Whiteboard() {

		// gaat later element binnen krijgen welke objecten geplaatst zullen worden
		//dan foreach element in database met postit een posti it maken
		//voor elke foto , foto plaatsen etc etc

		//elk object in een array invoeren en bijhouden zoals bij todoApp oef.

		this.whiteboard = document.querySelector('.whiteboard');
		this.postits = new Array();
		this.uploadedImages = new Array();

		//postit

		this.createPostitButton = document.querySelector('.createPostit');
		this.createPostitButton.addEventListener('click', this.addPostitForm.bind(this));

		//image

		this.createImageButton = document.querySelector('input[name=uploadImage]');
		this.createImageButton.addEventListener('change', this.addImageElement.bind(this));
		this.imageSubmit = document.querySelector('.imageSubmit');
		

		// dropdown members
		this.createMembersDropdownButton = document.querySelector('.members');
		this.createMembersDropdownButton.addEventListener('click', this.showDropdown);

		// change bg
		this.changeBackgroundButton = document.querySelector('.grid');
		this.changeBackgroundButton.addEventListener('click', this.changeBG.bind(this));
		




	}

	// postit
	Whiteboard.prototype.addPostitForm = function(){
		this.postitForm = new PostitForm();
		bean.on(this.postitForm, 'create-postit', this.createPostItHandler.bind(this));

	};

	Whiteboard.prototype.createPostItHandler = function(title, bodyText){
		 this.postit = new Postit.createWithText(title, bodyText);
		 this.postits.push(this.postit);
		 this.whiteboard.appendChild(this.postit.el);

		 //TOEVOEGEN AAN DB VIA AJAX
		 
	};

	//image

	Whiteboard.prototype.addImageElement = function(e){

		


		var file, reader;
		//check of gebruiker bestand heeft gekozen
		if(this.createImageButton.files.length > 0){

			file = this.createImageButton.files['0'];

			//check of het foto is kijken of type image is
			if(file.type.search('image') === 0){

				//if image => fire de uploadknop
				//this.imageSubmit.click();
			
				this.imageSubmit.addEventListener('click' ,ImageUploadHandler.bind(this, file));
				/*
					DEZE CODE WERKT AL VOOR PREVIEW
				var reader = new FileReader();

				reader.onload = function( event ){

 					var img = document.createElement('img');
 					img.src = reader.result;
                	
 					var whiteboard = document.querySelector('.whiteboard');

                	whiteboard.appendChild(img);
				*/
				};
			//reader.readAsDataURL(file);
			
			}

	
		
	};


	function ImageUploadHandler(file){
		event.preventDefault();

		//upload in database & in images/uploaded zetten.

		this.createImageHandler(file.name);
			
	}
	Whiteboard.prototype.createImageHandler = function(filename){

		this.uploadedImage = new NewImage.createWithUpload(filename);
		this.uploadedImages.push(this.uploadedImage);
		this.whiteboard.appendChild(this.uploadedImage.el);

	};


	 // members dropdown


    Whiteboard.prototype.showDropdown = function(e){
        if(actionDropdown === 1){
           document.querySelector('.menu').style.display="block";
           actionDropdown = 2;
        }else{
           document.querySelector('.menu').style.display="none";
           actionDropdown = 1;
        }

     };
     // grid

     Whiteboard.prototype.changeBG = function(){

        if(actionBg === 1){
           this.whiteboard.style.backgroundImage="url(images/gridBG.jpg)";
           document.getElementById("changeByClick").src = "images/solid-icon.png";
           actionBg = 2;
        }else{
			this.whiteboard.style.backgroundImage="";
			document.getElementById("changeByClick").src = "images/grid.png";
           actionBg = 1;
        }

     };


	return Whiteboard;
})();