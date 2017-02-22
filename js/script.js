document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
	var mycontact=navigator.contacts;
	alert(mycontact);
	// console.log(navigator.contacts);
}