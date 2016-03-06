 if (document.getElementsByClassName('flex-item').length === 0) {
   document.getElementById('topContacts').style.display = 'none';
 }
 if (document.getElementsByTagName('h1').length === 0) {
   document.getElementById('header').style.display = 'none';
 }
 if (document.getElementsByClassName('work-entry').length === 0) {
   document.getElementById('workExperience').style.display = 'none';
 }
 if (document.getElementsByClassName('project-entry').length === 0) {
   document.getElementById('projects').style.display = 'none';
 }
 if (document.getElementsByClassName('education-entry').length === 0) {
   document.getElementById('education').style.display = 'none';
 }
 if (document.getElementsByClassName('flex-item').length === 0) {
   document.getElementById('lets-connect').style.display = 'none';
 }
 if (document.getElementById('map') === null) {
   document.getElementById('mapDiv').style.display = 'none';
 }

window.onload = function onLoad () {
	
};



$('.progress').on('inview', function(event, isInView) {
  if (isInView) {
    // element is now visible in the viewport
    console.log("inview triggered");
    var value;
    var id = this.id;
    for(var skill in skills.skills) {
    	if (skills.skills[skill].id == id) {
    		value = skills.skills[skill].value;
    	}
    }
    circles[id].animate(value);

  } else {
  	console.log("outview");
    // element has gone out of viewport
  }
});