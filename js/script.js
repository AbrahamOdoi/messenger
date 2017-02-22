document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {

	function onSuccess(contacts) {
		for (var i = 0; i < contacts.length; i++) {
			for (var j = 0; j < contacts[i].organizations.length; j++) {
				alert("Pref: " + contacts[i].organizations[j].pref + "\n" + "Type: " + contacts[i].organizations[j].type + "\n" + "Name: " + contacts[i].organizations[j].name + "\n" + "Department: " + contacts[i].organizations[j].department + "\n" + "Title: " + contacts[i].organizations[j].title);
			}
		}
	};

	function onError(contactError) {
		alert('onError!');
	};

	var options = new ContactFindOptions();
	options.filter = "";
	options.multiple = true;
	filter = ["displayName", "organizations"];
	var mycontact = navigator.contacts.find(filter, onSuccess, onError, options);
	alert(mycontact);
}