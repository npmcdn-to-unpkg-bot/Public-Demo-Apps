function updateTime() {
	document.getElementById("curtime").innerHTML = moment().format('MM/DD/YYYY h:mm:ss a');

}

function pageload() {
    wrap.initialize().then(function() {
        console.log("Wrap Events: ", WRAP_EVENTS) //A listing of Wrap events you can register for
        //EG
        //wrap.listenForEvent(WRAP_EVENTS.ctaClick, ctaClick)
    })
    console.log("page loaded");
    var intervalID = window.setInterval(updateTime, 1000);
}