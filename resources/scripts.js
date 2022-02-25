$(function() {

    $("#latestPublishedTopic").ready(function(){
        $.getJSON("resources/data.json", function(data) {
            let latestTopicsArr = JSON.parse(JSON.stringify(data)).latestPublishedTopics;
            latestTopicsArr.forEach(({topic, url}) => {
                let t = $("<a/>", {
                    href: url,
                    text: topic,
                    appendTo: "#latestPublishedTopic",
                });
            })
        });
    });
});