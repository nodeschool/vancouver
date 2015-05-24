"use strict";

function getRecentMeet(response) {
    var nextEvent, nextEventId, nextEventName, nextEventDiv;

    // only update the page if there is a next event
    if (response && response.data && response.data.next_event) {
        nextEvent = response.data.next_event;

        nextEventId = nextEvent.id;
        nextEventName = nextEvent.name;
        nextEventDiv = document.querySelector(".next-event");
        nextEventDiv.innerHTML = "<a href='http://www.meetup.com/atxnodejs/events/" + nextEventId + "'>" + nextEventName + "</a>";
    }
}

(function() {
    var script = document.createElement("script");
    script.src = "https://api.meetup.com/atxnodejs?&sign=true&page=5&api&key=5049797817560b4e5c4594387922&callback=getRecentMeet";
    document.body.appendChild(script);
}());
