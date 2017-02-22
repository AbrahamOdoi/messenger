document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
alert('yes');
	navigator.contactsPhoneNumbers.list(function(contacts) {
		console.log(contacts.length + ' contacts found');
		for (var i = 0; i < contacts.length; i++) {
			console.log(contacts[i].id + " - " + contacts[i].displayName);
			for (var j = 0; j < contacts[i].phoneNumbers.length; j++) {
				var phone = contacts[i].phoneNumbers[j];
				alert("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber + ")");
				console.log("===> " + phone.type + "  " + phone.number + " (" + phone.normalizedNumber + ")");
			}
		}
	}, function(error) {
		// console.error(error);
		alert(error);
	});
	alert('yess');
}