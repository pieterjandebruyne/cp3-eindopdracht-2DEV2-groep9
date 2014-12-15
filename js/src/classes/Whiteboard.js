module.exports = (function(){
	//var ..... = require('./.....');

	var PostitForm = require('./PostitForm.js');
	var Postit = require('./Postit.js');
	var NewImage = require('./NewImage.js');
	var NewVideo = require('./NewVideo.js');


	var fileInput = document.getElementById('uploadVideo');
    var video = document.getElementById('video-container');
	
	
    var actionDropdown= 1, actionBg = 1;


	function Whiteboard() {

		this.whiteboardPage = document.querySelector('.whiteboardpage');
		this.project_id = this.whiteboardPage.getAttribute('data-projectid');
		this.user_id = this.whiteboardPage.getAttribute('data-userid');

		// gaat later element binnen krijgen welke objecten geplaatst zullen worden
		//dan foreach element in database met postit een posti it maken
		//voor elke foto , foto plaatsen etc etc

		//elk object in een array invoeren en bijhouden zoals bij todoApp oef.

		this.whiteboard = document.querySelector('.whiteboard');
		this.elementDiv = document.createElement('div');

		//postit

		this.createPostitButton = document.querySelector('.createPostit');
		this.createPostitButton.addEventListener('click', this.addPostitForm.bind(this));

		this.postits = new Array();

		//image

		this.createImageButton = document.querySelector('input[name=uploadImage]');
		this.createImageButton.addEventListener('change', this.addImageElement.bind(this));
		this.imageSubmit = document.querySelector('.imageSubmit');

		this.uploadedImages = new Array();

		//video


		// dropdown members
		this.createMembersDropdownButton = document.querySelector('.members');
		this.createMembersDropdownButton.addEventListener('click', this.showDropdown);

		// change bg
		this.changeBackgroundButton = document.querySelector('.grid');
		this.changeBackgroundButton.addEventListener('click', this.changeBG.bind(this));
		
		//clear board

		this.clearBoardButton = document.querySelector('.clearBoard');
		this.clearBoardButton.addEventListener('click', this.clearBoard.bind(this));

		


	}

	// postit
	Whiteboard.prototype.addPostitForm = function(){
		var postitForm = new PostitForm();
		bean.on(postitForm, 'create-postit', this.createPostItHandler.bind(this));

	};

	Whiteboard.prototype.createPostItHandler = function(title, bodyText){
		 var postit = new Postit.createWithText(title, bodyText);
		 this.postits.push(postit);
		 if(this.whiteboard.appendChild(postit.el)){

		    $.ajax({
		        type: 'post',
		        url: window.location.href,
		        data: {
		            title: title,
		            text: bodyText,
		            item_kind: "postit",
		            top: "200px",
		            left: "150px"
		        },
		        success: function( data ) {
		        	console.log(data);
					var segments = data.split("<!DOCTYPE html>");
					//geef postit id van in database
					postit.id = segments[0];			
		       }
		    });

		 };
		 
		bean.on(postit, 'delete', this.deletePostitHandler.bind(this, postit));
		 
	};

	Whiteboard.prototype.deletePostitHandler = function(postit){
		//remove from array
		var postitIndex = this.postits.indexOf(postit);
		if (postitIndex > -1) {
		    this.postits.splice(postitIndex, 1);
		}
		//remove from screen
		this.whiteboard.removeChild(postit.el);
		
		//remove from database


		$.ajax({
	        type: 'post',
	        url: window.location.href,
	        data: {
	            item_kind: "delete",
	            id: postit.id
	        },
	        success: function( data ) {		
	        		console.log('ajax success');
	       }
	    });


	}

	//image

	Whiteboard.prototype.addImageElement = function(e){
		var file, reader;
		//check of gebruiker bestand heeft gekozen
		if(this.createImageButton.files.length > 0){

			file = this.createImageButton.files['0'];

			//check of het foto is kijken of type image is
			if(file.type.search('image') === 0){

				this._imageUploadHandler = this.imageUploadHandler.bind(this, file, this);
				this.imageSubmit.addEventListener('click' ,this._imageUploadHandler);
				
				};			
			}	
	};

	Whiteboard.prototype.imageUploadHandler = function(file, thisX){
		console.log(this);
		console.log('tets');
		console.log(thisX);
        event.preventDefault(); // Totally stop stuff happening
        // Create a formdata object and add the files
		var data = new FormData( document.getElementById("uploadForm") );	
		
        $.ajax({
            url: window.location.href,
            type: 'POST',
            data: data,
            cache: false,
            processData: false, // Don't process the files
            contentType: false, // Set content type to false as jQuery will tell the server its a query string request
            success: function(data, textStatus, jqXHR)
            {
 				console.log( 'ajax success');
 				thisX.uploadImageToDatabase(file, thisX);

 				// hoe kan ik hier this aan meegeven ???? 
 				
            },
            error: function(jqXHR, textStatus, errorThrown)
            {	
            	console.log('ERRORS: ' + textStatus);
            }
        });
        this.imageSubmit.removeEventListener( 'click', this._imageUploadHandler);
		this.createImageButton.value = '';
	}

	Whiteboard.prototype.uploadImageToDatabase = function(file, thisX){

		$.ajax({
	        type: 'post',
	        url: window.location.href,
	        data: {
	            item_kind: "image",
	            top: "200px",
	            left: "150px",
	            filename: file.name
	        },
	        success: function( data ) {
	        	console.log(thisX);
	        	var imageDiv = new NewImage.createWithUpload(file.name);
	        	var segments = data.split("<!DOCTYPE html>");
				//geef image id van in database
				imageDiv.id = segments[0];	
				thisX.whiteboard.appendChild(imageDiv.el);
				thisX.uploadedImages.push(imageDiv);
				bean.on(imageDiv, 'delete', thisX.deleteimageHandler.bind(this, imageDiv, thisX));
				console.log(thisX.uploadedImages);
	        		
	       }
	    });
	}

	Whiteboard.prototype.deleteimageHandler = function(imageDiv, thisX){
		//remove from array
		var imageIndex = thisX.uploadedImages.indexOf(imageDiv);
		if (imageIndex > -1) {
		    thisX.uploadedImages.splice(imageIndex, 1);
		}

		//remove from screen
		document.querySelector('.whiteboard').removeChild(imageDiv.el);

		//remove from database
		$.ajax({
	        type: 'post',
	        url: window.location.href,
	        data: {
	            item_kind: "delete",
	            id: imageDiv.id
	        },
	        success: function( data ) {		
	        		console.log('ajax success');
	       }
	    });		

	};

	//video


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

     //clear board

     Whiteboard.prototype.clearBoard = function(){
     	
     	var x;
	    if (confirm("Are you sure you want to clear the whole project?") == true) {
	       	
	    	//DELETE ALL ENTRIES IN WHITEBOARDITEMS WHERE PROJECT_ID = project id 

	    	// maak veld leeg

	    } else {

	        return;
	    }

     }

	return Whiteboard;
})();