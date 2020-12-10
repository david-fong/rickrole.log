var element = new Image();
Object.defineProperty(element, "id", {
	get: function() {
		sessionStorage.setItem("rickroll", true);
	},
});
setInterval(function() {
if (sessionStorage.getItem("rickroll")) {
	var href = "https://youtu.be/dQw4w9WgXcQ";
	if (window.localStorage.getItem("noRickroll")) return;
	sessionStorage.removeItem("rickroll");
	try {
		window.history.replaceState(null, "", href);
		// ^This won't work on null origins.
	} catch(e) {
		window.location.href = href;
	}
}
}, 2000);
console.log("%c", element);