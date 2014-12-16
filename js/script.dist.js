!function e(t,i,s){function o(a,d){if(!i[a]){if(!t[a]){var r="function"==typeof require&&require;if(!d&&r)return r(a,!0);if(n)return n(a,!0);var l=new Error("Cannot find module '"+a+"'");throw l.code="MODULE_NOT_FOUND",l}var h=i[a]={exports:{}};t[a][0].call(h.exports,function(e){var i=t[a][1][e];return o(i?i:e)},h,h.exports,e,t,i,s)}return i[a].exports}for(var n="function"==typeof require&&require,a=0;a<s.length;a++)o(s[a]);return o}({1:[function(e){!function(){function t(){new i}var i=e("./classes/Whiteboard");t()}()},{"./classes/Whiteboard":6}],2:[function(e,t){t.exports=function(){function e(e){this.el=e,this.deleteKnop=e.querySelector(".deleteKnop"),this.deleteKnop.addEventListener("click",this.deleteClickHandler.bind(this)),this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.dragKnop=e.querySelector(".dragKnop"),this.dragKnop.addEventListener("mousedown",this._mouseDownHandler),this._mouseDownResize=this.mouseDownResize.bind(this),this._mouseMoveResize=this.mouseMoveResize.bind(this),this._mouseUpResize=this.mouseUpResize.bind(this),this.resizeKnop=e.querySelector(".resizeKnop"),this.resizeKnop.addEventListener("mousedown",this._mouseDownResize)}return e.prototype.deleteClickHandler=function(){bean.fire(this,"delete")},e.prototype.mouseDownHandler=function(e){console.log(e.offsetY),this.parentOffset=e.currentTarget.parentNode.offsetWidth-52,this.offsetX=this.parentOffset+e.offsetX,this.offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){var t=e.x-this.offsetX;0>t&&(t=0);var i=e.y-this.offsetY;0>i&&(i=0),this.el.style.left=t+"px",this.el.style.top=i+"px"},e.prototype.mouseUpHandler=function(){window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler),$.ajax({type:"post",url:window.location.href,data:{item_kind:"updatePosition",top:this.el.style.top,left:this.el.style.left,id:this.id},success:function(){console.log("ajax success")}})},e.prototype.mouseDownResize=function(e){console.log(e.currentTarget.parentNode.offsetWidth),this.startX=e.clientX,this.startY=e.clientY,this.startWidth=e.currentTarget.parentNode.parentNode.offsetWidth,this.startHeight=e.currentTarget.parentNode.parentNode.offsetHeight,this.parentOffset=0,this.offsetX=this.parentOffset+e.offsetX,this.offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveResize),window.addEventListener("mouseup",this._mouseUpResize)},e.prototype.mouseMoveResize=function(e){this.stopX=e.clientX,this.stopY=e.clientY;var t=e.x-this.offsetX,i=e.y-this.offsetY;0>t&&(t=0),0>i&&(i=0),this.el.style.left=t+"px",this.el.style.top=i+"px",this.el.querySelector(".imageDiv").style.width=this.startWidth-this.stopX+this.startX+"px",this.el.querySelector(".imageDiv").style.height=this.startHeight-this.stopY+this.startY+"px"},e.prototype.mouseUpResize=function(e){console.log("test"),window.removeEventListener("mousemove",this._mouseMoveResize),window.removeEventListener("mouseup",this._mouseUpResize),this.stopX=e.clientX,this.stopY=e.clientY;var t=this.startWidth-this.stopX+this.startX+"px",i=this.startHeight-this.stopY+this.startY+"px";this.el.querySelector(".imageDiv").style.width=t,this.el.querySelector(".imageDiv").style.height=i,console.log(this.el),console.log(this.el.querySelector(".imageDiv")),$.ajax({type:"post",url:window.location.href,data:{item_kind:"updatePositionAndDimension",top:this.el.style.top,left:this.el.style.left,width:t,height:i,id:this.id},success:function(){console.log("ajax success")}})},e.createWithUpload=function(t,i,s,o,n){var a=document.createElement("div");a.classList.add("imageContainerDiv"),a.style.top=i+"px",a.style.left=s+"px";var d=document.createElement("div");d.classList.add("imageDiv");var r="./images/uploaded/";d.style.width=o+"px",d.style.height=n+"px",d.style.backgroundImage="url("+r+t+")";var l=document.createElement("div");l.classList.add("topBalk");var h=document.createElement("img");h.src="./images/deleteItem.png",h.style.width="16px",h.style.height="16px",h.classList.add("right","deleteKnop");var p=document.createElement("div");p.classList.add("right","dragKnop");var u=document.createElement("div");return u.classList.add("left","resizeKnop"),l.appendChild(h),l.appendChild(p),l.appendChild(u),a.appendChild(l),a.appendChild(d),new e(a)},e}()},{}],3:[function(e,t){t.exports=function(){function e(e){this.el=e,this.deleteKnop=e.querySelector(".deleteKnop"),this.deleteKnop.addEventListener("click",this.deleteClickHandler.bind(this)),this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.dragKnop=e.querySelector(".dragKnop"),this.dragKnop.addEventListener("mousedown",this._mouseDownHandler)}return e.prototype.deleteClickHandler=function(){bean.fire(this,"delete")},e.prototype.mouseDownHandler=function(e){this.parentOffset=e.currentTarget.parentNode.offsetWidth-52,this.offsetX=this.parentOffset+e.offsetX,this.offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){var t=e.x-this.offsetX,i=e.y-this.offsetY;0>t&&(t=0),0>i&&(i=0),this.el.style.left=t+"px",this.el.style.top=i+"px"},e.prototype.mouseUpHandler=function(){window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler),$.ajax({type:"post",url:window.location.href,data:{item_kind:"updatePosition",top:this.el.style.top,left:this.el.style.left,id:this.id},success:function(){console.log("ajax success")}})},e.createWithUpload=function(t,i,s){var o=document.createElement("div");o.classList.add("videoContainerDiv"),o.style.top=i+"px",o.style.left=s+"px";var n="./videos/uploaded/"+t,a="controls",d=document.createElement("video");d.classList.add("videoDiv"),d.setAttribute("src",n),d.setAttribute("controls",a),d.style.width="400px",d.style.height="200px";var r=document.createElement("div");r.classList.add("topBalk");var l=document.createElement("img");l.src="./images/deleteItem.png",l.style.width="16px",l.style.height="16px",l.classList.add("right","deleteKnop");var h=document.createElement("div");return h.classList.add("right","dragKnop"),r.appendChild(l),r.appendChild(h),o.appendChild(r),o.appendChild(d),new e(o)},e}()},{}],4:[function(e,t){t.exports=function(){function e(e,t,i){this.el=e,this.title=t,this.text=i,this.deleteKnop=e.querySelector(".deleteKnop"),this.deleteKnop.addEventListener("click",this.deleteClickHandler.bind(this)),this._mouseDownHandler=this.mouseDownHandler.bind(this),this._mouseMoveHandler=this.mouseMoveHandler.bind(this),this._mouseUpHandler=this.mouseUpHandler.bind(this),this.dragKnop=e.querySelector(".dragKnop"),this.dragKnop.addEventListener("mousedown",this._mouseDownHandler),this._mouseDownResize=this.mouseDownResize.bind(this),this._mouseMoveResize=this.mouseMoveResize.bind(this),this._mouseUpResize=this.mouseUpResize.bind(this),this.resizeKnop=e.querySelector(".resizeKnop"),this.resizeKnop.addEventListener("mousedown",this._mouseDownResize)}return e.prototype.deleteClickHandler=function(){bean.fire(this,"delete")},e.prototype.mouseDownHandler=function(e){this.parentOffset=e.currentTarget.parentNode.offsetWidth-52,this.offsetX=this.parentOffset+e.offsetX,this.offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveHandler),window.addEventListener("mouseup",this._mouseUpHandler)},e.prototype.mouseMoveHandler=function(e){var t=e.x-this.offsetX;0>t&&(t=0);var i=e.y-this.offsetY;0>i&&(i=0),this.el.style.left=t+"px",this.el.style.top=i+"px"},e.prototype.mouseUpHandler=function(){window.removeEventListener("mousemove",this._mouseMoveHandler),window.removeEventListener("mouseup",this._mouseUpHandler),$.ajax({type:"post",url:window.location.href,data:{item_kind:"updatePosition",top:this.el.style.top,left:this.el.style.left,id:this.id},success:function(){console.log("ajax success")}})},e.prototype.mouseDownResize=function(e){console.log(e.currentTarget.parentNode.offsetWidth),this.startX=e.clientX,this.startY=e.clientY,this.startWidth=e.currentTarget.parentNode.parentNode.offsetWidth,this.startHeight=e.currentTarget.parentNode.parentNode.offsetHeight,this.parentOffset=0,this.offsetX=this.parentOffset+e.offsetX,this.offsetY=e.offsetY,window.addEventListener("mousemove",this._mouseMoveResize),window.addEventListener("mouseup",this._mouseUpResize)},e.prototype.mouseMoveResize=function(e){this.stopX=e.clientX,this.stopY=e.clientY;var t=e.x-this.offsetX,i=e.y-this.offsetY;0>t&&(t=0),0>i&&(i=0),this.el.style.left=t+"px",this.el.style.top=i+"px",this.el.style.width=this.startWidth-this.stopX+this.startX+"px",this.el.style.height=this.startHeight-this.stopY+this.startY+"px"},e.prototype.mouseUpResize=function(e){window.removeEventListener("mousemove",this._mouseMoveResize),window.removeEventListener("mouseup",this._mouseUpResize),this.stopX=e.clientX,this.stopY=e.clientY;var t=this.startWidth-this.stopX+this.startX+"px",i=this.startHeight-this.stopY+this.startY+"px";this.el.style.width=t,this.el.style.height=i,console.log(this.el),console.log(this.el.querySelector(".imageDiv")),$.ajax({type:"post",url:window.location.href,data:{item_kind:"updatePositionAndDimension",top:this.el.style.top,left:this.el.style.left,width:t,height:i,id:this.id},success:function(){console.log("ajax success")}})},e.createWithText=function(t,i,s,o,n,a){var d=document.createElement("div");d.classList.add("postit"),d.style.top=s+"px",d.style.left=o+"px",0!==n&&(d.style.width=n+"px"),0!==a&&(d.style.height=a+"px");var r=document.createElement("h2");r.classList.add("postitTitle");var l=document.createElement("p");l.classList.add("postitText");var h=document.createElement("div");h.classList.add("topBalk");var p=document.createElement("img");p.src="./images/deleteItem.png",p.style.width="16px",p.style.height="16px",p.classList.add("right","deleteKnop");var u=document.createElement("div");u.classList.add("right","dragKnop");var c=document.createElement("div");c.classList.add("left","resizeKnop"),h.appendChild(p),h.appendChild(u),h.appendChild(c);var m=document.createTextNode(t),f=document.createTextNode(i);return r.appendChild(m),l.appendChild(f),d.appendChild(h),d.appendChild(r),d.appendChild(l),new e(d,t,i)},e}()},{}],5:[function(e,t){t.exports=function(){function e(){this.el=this.createForm(),t.appendChild(this.el),this.postitTitle=this.el.querySelector(".postitTitleInput"),this.postitText=this.el.querySelector(".postitTextInput"),this.inputButton=this.el.querySelector(".postitSubmitButton"),this.inputButton.addEventListener("click",this.addPostit.bind(this))}var t=document.querySelector(".whiteboard");return e.prototype.addPostit=function(e){e.preventDefault();var t=document.querySelector(".postitTitleInput").value,i=document.querySelector(".postitTextInput").value;/^\s*$/.test(t)&&/^\s*$/.test(i)?this.deleteForm():(this.deleteForm(),bean.fire(this,"create-postit",[this.postitTitle.value,this.postitText.value]))},e.prototype.deleteForm=function(){this.postitFormDiv.parentElement.removeChild(this.postitFormDiv)},e.prototype.createForm=function(){this.postitFormDiv=document.createElement("div"),this.postitFormDiv.classList.add("postitForm"),this.postitFormDiv.style.top="200px",this.postitFormDiv.style.left="150px";var e=document.createElement("form"),t=document.createElement("div");t.classList.add("postitInputDiv");var i=document.createElement("input");i.type="text",i.placeholder="Title",i.classList.add("postitTitleInput");var s=document.createElement("textarea");s.classList.add("postitTextInput"),s.placeholder="Content";var o=document.createElement("input");return o.type="submit",o.classList.add("postitSubmitButton"),t.appendChild(i),e.appendChild(t),e.appendChild(s),e.appendChild(o),this.postitFormDiv.appendChild(e),this.postitFormDiv},e}()},{}],6:[function(e,t){t.exports=function(){function t(){this.whiteboard=document.querySelector(".whiteboard"),this.whiteboardPage=document.querySelector(".whiteboardpage"),this.project_id=this.whiteboardPage.getAttribute("data-projectid"),this.user_id=this.whiteboardPage.getAttribute("data-userid"),this.postits=[],this.uploadedImages=[],this.uploadedVideos=[],this.itemsToAdd=[],this.itemsToAdd=this.whiteboard.querySelectorAll(".itemToAdd"),[].forEach.call(this.itemsToAdd,function(e){switch(e.getAttribute("data-item_kind")){case"postit":this.createPostitFromDatabase(e);break;case"image":this.createImageFromDatabase(e);break;case"video":this.createVideoFromDatabase(e)}},this),this.createPostitButton=document.querySelector(".createPostit"),this.createPostitButton.addEventListener("click",this.addPostitForm.bind(this)),this.createImageButton=document.querySelector("input[name=uploadImage]"),this.createImageButton.addEventListener("change",this.addImageElement.bind(this)),this.imageSubmit=document.querySelector(".imageSubmit"),this.createVideoButton=document.querySelector("input[name=uploadVideo]"),this.createVideoButton.addEventListener("change",this.addVideoElement.bind(this)),this.videoSubmit=document.querySelector(".videoSubmit"),this.createMembersDropdownButton=document.querySelector(".dropDownClicker"),this.createMembersDropdownButton.addEventListener("click",this.showDropdown),document.querySelector(".whiteboard-alert")&&setTimeout(i,4e3),this.changeBackgroundButton=document.querySelector(".grid"),this.changeBackgroundButton.addEventListener("click",this.changeBG.bind(this)),this.clearBoardButton=document.querySelector(".clearBoard"),this.clearBoardButton.addEventListener("click",this.clearBoard.bind(this))}function i(){document.querySelector(".whiteboard-alert").classList.add("fade")}var s=e("./PostitForm.js"),o=e("./Postit.js"),n=e("./NewImage.js"),a=e("./NewVideo.js"),d=1,r=1;return t.prototype.addPostitForm=function(){var e=new s;bean.on(e,"create-postit",this.createPostItHandler.bind(this))},t.prototype.createPostItHandler=function(e,t){var i=new o.createWithText(e,t,200,150,0,0);this.postits.push(i),this.whiteboard.appendChild(i.el)&&$.ajax({type:"post",url:window.location.href,data:{title:e,text:t,item_kind:"postit",top:"200",left:"150",width:"0",height:"0"},success:function(e){console.log(e);var t=e.split("<!DOCTYPE html>");i.id=t[0]}}),bean.on(i,"delete",this.deletePostitHandler.bind(this,i))},t.prototype.deletePostitHandler=function(e){var t=this.postits.indexOf(e);t>-1&&this.postits.splice(t,1),this.whiteboard.removeChild(e.el),$.ajax({type:"post",url:window.location.href,data:{item_kind:"delete",id:e.id},success:function(){console.log("ajax success")}})},t.prototype.createPostitFromDatabase=function(e){var t=new o.createWithText(e.getAttribute("data-title"),e.getAttribute("data-message"),e.getAttribute("data-top"),e.getAttribute("data-left"),e.getAttribute("data-width"),e.getAttribute("data-height"));this.postits.push(t),this.whiteboard.appendChild(t.el),t.id=e.getAttribute("data-id"),bean.on(t,"delete",this.deletePostitHandler.bind(this,t))},t.prototype.addImageElement=function(){this.imageSubmit.style.background="#86c06a",this.imageSubmit.style.color="#fff";var e;this.createImageButton.files.length>0&&(e=this.createImageButton.files[0],0===e.type.search("image")&&(this._imageUploadHandler=this.imageUploadHandler.bind(this,e,this),this.imageSubmit.addEventListener("click",this._imageUploadHandler)))},t.prototype.imageUploadHandler=function(e,t){event.preventDefault();var i=new FormData(document.getElementById("uploadForm"));$.ajax({url:window.location.href,type:"POST",data:i,cache:!1,processData:!1,contentType:!1,success:function(){console.log("ajax success"),t.uploadImageToDatabase(e,t)},error:function(e,t){console.log("ERRORS: "+t)}}),this.imageSubmit.removeEventListener("click",this._imageUploadHandler),this.createImageButton.value="",this.imageSubmit.style.background="#fff",this.imageSubmit.style.color="#86c06a"},t.prototype.uploadImageToDatabase=function(e,t){console.log(e.width),$.ajax({type:"post",url:window.location.href,data:{item_kind:"image",top:"200px",left:"150px",width:"200px",height:"150px",filename:e.name},success:function(i){var s=new n.createWithUpload(e.name,200,150,200,150),o=i.split("<!DOCTYPE html>");s.id=o[0],t.whiteboard.appendChild(s.el),t.uploadedImages.push(s),bean.on(s,"delete",t.deleteImageHandler.bind(this,s,t))}})},t.prototype.deleteImageHandler=function(e,t){var i=t.uploadedImages.indexOf(e);i>-1&&t.uploadedImages.splice(i,1),document.querySelector(".whiteboard").removeChild(e.el),$.ajax({type:"post",url:window.location.href,data:{item_kind:"delete",id:e.id},success:function(){console.log("ajax success")}})},t.prototype.createImageFromDatabase=function(e){console.log(e.getAttribute("data-height"));var t=new n.createWithUpload(e.getAttribute("data-filename"),e.getAttribute("data-top"),e.getAttribute("data-left"),e.getAttribute("data-width"),e.getAttribute("data-height"));this.uploadedImages.push(t),this.whiteboard.appendChild(t.el),t.id=e.getAttribute("data-id"),bean.on(t,"delete",this.deleteImageHandler.bind(this,t,this))},t.prototype.addVideoElement=function(){this.videoSubmit.style.background="#86c06a",this.videoSubmit.style.color="#fff";var e;this.createVideoButton.files.length>0&&(e=this.createVideoButton.files[0],0===e.type.search("video/mp4")&&(this._videoUploadHandler=this.videoUploadHandler.bind(this,e,this),this.videoSubmit.addEventListener("click",this._videoUploadHandler)))},t.prototype.videoUploadHandler=function(e,t){event.preventDefault();var i=new FormData(document.getElementById("uploadFormVideo"));$.ajax({url:window.location.href,type:"POST",data:i,cache:!1,processData:!1,contentType:!1,success:function(){console.log("ajax success"),t.uploadVideoToDatabase(e,t)},error:function(e,t){console.log("ERRORS: "+t)}}),this.videoSubmit.removeEventListener("click",this._videoUploadHandler),this.createVideoButton.value="",this.videoSubmit.style.background="#fff",this.videoSubmit.style.color="#86c06a"},t.prototype.uploadVideoToDatabase=function(e,t){$.ajax({type:"post",url:window.location.href,data:{item_kind:"video",top:"200px",left:"150px",filename:e.name},success:function(i){var s=new a.createWithUpload(e.name,200,150),o=i.split("<!DOCTYPE html>");s.id=o[0],t.whiteboard.appendChild(s.el),t.uploadedVideos.push(s),bean.on(s,"delete",t.deleteVideoHandler.bind(this,s,t))}})},t.prototype.deleteVideoHandler=function(e,t){var i=t.uploadedVideos.indexOf(e);i>-1&&t.uploadedVideos.splice(i,1),document.querySelector(".whiteboard").removeChild(e.el),$.ajax({type:"post",url:window.location.href,data:{item_kind:"delete",id:e.id},success:function(){console.log("ajax success")}})},t.prototype.createVideoFromDatabase=function(e){var t=new a.createWithUpload(e.getAttribute("data-filename"),e.getAttribute("data-top"),e.getAttribute("data-left"));this.uploadedVideos.push(t),this.whiteboard.appendChild(t.el),t.id=e.getAttribute("data-id"),bean.on(t,"delete",this.deleteVideoHandler.bind(this,t,this))},t.prototype.showDropdown=function(e){1===d?(document.querySelector(".menu").style.display="block",e.currentTarget.src="./images/dropup.png",d=2):(document.querySelector(".menu").style.display="none",e.currentTarget.src="./images/dropdown.png",d=1)},t.prototype.changeBG=function(){1===r?(this.whiteboard.style.backgroundImage="url(images/gridBG.jpg)",document.getElementById("changeByClick").src="images/solid-icon.png",r=2):(this.whiteboard.style.backgroundImage="",document.getElementById("changeByClick").src="images/grid.png",r=1)},t.prototype.clearBoard=function(){var e=this.project_id;1==confirm("Are you sure you want to clear the whole project?")&&$.ajax({type:"post",url:window.location.href,data:{item_kind:"deleteAll",project_id:e},success:function(){console.log("ajax success"),location.reload()}})},t}()},{"./NewImage.js":2,"./NewVideo.js":3,"./Postit.js":4,"./PostitForm.js":5}]},{},[1]);
//# sourceMappingURL=script.dist.js.map