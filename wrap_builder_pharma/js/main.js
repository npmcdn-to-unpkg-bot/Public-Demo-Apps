
// Replace the API_Key with your own API_Key
var API_KEY = "11fba5787f3777f18fda5dcdba976e74ef411777527e2315e5f586689497ba68"

var sharingMessage = "Hello, We think you'll be interested in these drugs: {{wrap}}"

var returnedPageCount = 250;

var column1 = "Company";
var column2 = "Company: About";
var column3 = "Drug Name";
var column4 = "Drug: How To";

var category1 = "e7ce064e-d299-43ca-9f83-1cf4da88dd4f";
var category2 = "fa15ac93-cf50-46d5-8d64-b48c7d0c88d7";
var category3 = "88f08822-122c-4e5d-96cf-142c96c3ebc7";
var category4 = "7d6311c8-ebae-4aeb-b279-d836554a3a2e";

var client = new Wrap(API_KEY, "https://api.wrap.co/api");

var storyCountData, 
    characterDescriptionData, 
    characterData, 
    _dragDropZones;

function setTitles() {
    $("#column1 h3").text(column1);
    $("#column2 h3").text(column2);
    $("#column3 h3").text(column3);
    $("#column4 h3").text(column4);
}

function generateCards(groupname, data) {
    div = $("#" + groupname + " .cardHolder");
    $('.content-placeholder').html(theCompiledHtml);
    for (item in data) {
        //data[item];
        var theTemplateScript = $("#cardTemplate").html();
        var theTemplate = Handlebars.compile(theTemplateScript);
        var theCompiledHtml = theTemplate(data[item]);
        $(div).append(theCompiledHtml);
    }

    var droppables = $(".smcard");
    var _dropZones = $(".placeholder");
    var overlapThreshold = "60%";


    function onDrop(dragged, dropped) {

        var _draggedImage = $(dragged).find("img").attr("src");
        $(dropped).removeClass("highlight");
        if ($(dropped).hasClass("new")) {
            var _clone = $(dropped).clone();
            $("#placeholders").append(_clone);
            $(dropped).removeClass("new");
            $(dropped).addClass("empty");
            _dropZones = $(".placeholder");
        }
        $(dropped).removeClass("empty");
        $(dropped).removeClass("highlight");

        $(dropped).attr("data-text", $(dragged).attr("data-text"));
        $(dropped).attr("data-id", $(dragged).attr("data-id"));
        if (_draggedImage) {
            $(dropped).find("img").attr("src", _draggedImage);
        }
        TweenMax.to($(dragged), .25, {
            x: 0,
            y: 0,
            "z-index": 0
        });

        _dropZones = $(".placeholder");
        updateDropZones();
    }

    function onRearrange(dragged, dropped) {

        $(dropped).removeClass("highlight");
        if ($(dropped).hasClass("new") || $(dropped).hasClass("empty")) {
            return;
        }
        if ($(dragged).hasClass("new") || $(dragged).hasClass("empty")) {
            return;
        }
        $(dropped).removeClass("empty");
        $(dropped).removeClass("highlight");

        var _droppedImage = $(dropped).find("img").attr("src");
        var _draggedImage = $(dragged).find("img").attr("src");

        var _tempText = $(dropped).attr("data-text");
        var _tempID = $(dropped).attr("data-id");


        $(dropped).attr("data-text", $(dragged).attr("data-text"));
        $(dropped).attr("data-id", $(dragged).attr("data-id"));

        $(dragged).attr("data-text", _tempText);
        $(dragged).attr("data-id", _tempID);

        if (_droppedImage) {
            $(dropped).find("img").attr("src", _draggedImage);
        }
        if (_draggedImage) {
            $(dragged).find("img").attr("src", _droppedImage);
        }
        TweenMax.to($(_dropZones), .25, {
            x: 0,
            y: 0,
            "z-index": 0
        });
        /* TweenMax.to($(dropped), .25, {
            x: 0,
            y: 0,
            "z-index": 0
        });
        */
        _dropZones = $(".placeholder");
        updateDropZones();
    }

    Draggable.create(droppables, {

        onDrag: function (e) {
            var i = _dropZones.length;
            while (--i > -1) {
                if (this.hitTest(_dropZones[i], overlapThreshold)) {
                    $(_dropZones[i]).addClass("highlight");
                } else {
                    $(_dropZones[i]).removeClass("highlight");
                }
            }
        },
        onDragEnd: function (e) {
            var i = _dropZones.length;
            while (--i > -1) {
                if (this.hitTest(_dropZones[i], overlapThreshold)) {
                    onDrop(this.target, _dropZones[i]);

                } else {
                    TweenMax.to(this.target, .25, {
                        x: 0,
                        y: 0,
                        "z-index": 0
                    });
                }
            }

        }


    });

    function updateDropZones() {
        Draggable.create(_dropZones, {

            onDrag: function (e) {
                var i = _dropZones.length;
                while (--i > -1) {
                    if (this.hitTest(_dropZones[i], overlapThreshold)) {
                        $(_dropZones[i]).addClass("highlight");

                    } else {
                        $(_dropZones[i]).removeClass("highlight");
                    }
                }
            },
            onDragEnd: function (e) {
                var i = _dropZones.length;
                while (--i > -1) {
                    if (this.hitTest(_dropZones[i], overlapThreshold)) {
                        onRearrange(this.target, _dropZones[i]);
                        TweenMax.to(this.target, .25, {
                            x: 0,
                            y: 0,
                            "z-index": 0
                        });
                    } else {
                        TweenMax.to(this.target, .25, {
                            x: 0,
                            y: 0,
                            "z-index": 0
                        });
                    }
                }
            }


        });
    }


}

function getCardData() {
    client.cards.collectionSearch({
        "card_collection_ids":category1,
        per_page: returnedPageCount
    })

    .then(function (data) {
        characterDescriptionData = data;
        generateCards("column1", data);
        var qsRegex;

        // init Isotope
        var $CharacterGrid = $('#column1 .cardHolder').isotope({
             itemSelector: '.smcard',
                layoutMode: 'fitRows',
                 fitRows: {
                  gutter: 10
                },
            filter: function () {
                $(this).attr('data-text')
                return qsRegex ? $(this).attr('data-text').match(qsRegex) : true;
            }
        });

        // use value of search field to filter
        var $quicksearch = $('#column1Search').keyup(debounce(function () {
            qsRegex = new RegExp($quicksearch.val(), 'gi');
            $CharacterGrid.isotope();
            console.log($CharacterGrid);
        }, 200));



        // debounce so filtering doesn't happen every millisecond
        function debounce(fn, threshold) {
            var timeout;
            return function debounced() {
                if (timeout) {
                    clearTimeout(timeout);
                }

                function delayed() {
                    fn();
                    timeout = null;
                }
                timeout = setTimeout(delayed, threshold || 100);
            }
        }
    })

    client.cards.collectionSearch({
        "card_collection_ids":category2,
        per_page: returnedPageCount
    })
        .then(function (data) {
            storyCountData = data;
            console.log(data);
            generateCards("column2", data);
            var qsRegex;

            // init Isotope
            var $CharacterGrid = $('#column2 .cardHolder').isotope({
                itemSelector: '.smcard',
                layoutMode: 'fitRows',
                 fitRows: {
                  gutter: 10
                },
                filter: function () {
                    $(this).attr('data-text')
                    return qsRegex ? $(this).attr('data-text').match(qsRegex) : true;
                }
            });

            // use value of search field to filter
            var $quicksearch = $('#column2').keyup(debounce(function () {
                qsRegex = new RegExp($quicksearch.val(), 'gi');
                $CharacterGrid.isotope();
                //console.log($CharacterGrid);
            }, 200));



            // debounce so filtering doesn't happen every millisecond
            function debounce(fn, threshold) {
                var timeout;
                return function debounced() {
                    if (timeout) {
                        clearTimeout(timeout);
                    }

                    function delayed() {
                        fn();
                        timeout = null;
                    }
                    timeout = setTimeout(delayed, threshold || 100);
                }
            }
        })

        client.cards.collectionSearch({
            "card_collection_ids":category3,
            per_page: returnedPageCount
        })
        .then(function (data) {
            characterData = data;
            generateCards("column3", data);
            var qsRegex;

            // init Isotope
            var $CharacterGrid = $('#column3 .cardHolder').isotope({
                 itemSelector: '.smcard',
                layoutMode: 'fitRows',
                 fitRows: {
                  gutter: 10
                },
                filter: function () {
                    $(this).attr('data-text')
                    return qsRegex ? $(this).attr('data-text').match(qsRegex) : true;
                }
            });

            // use value of search field to filter
            var $quicksearch = $('#column3Search').keyup(debounce(function () {
                qsRegex = new RegExp($quicksearch.val(), 'gi');
                $CharacterGrid.isotope();
                console.log($CharacterGrid);
            }, 200));



            // debounce so filtering doesn't happen every millisecond
            function debounce(fn, threshold) {
                var timeout;
                return function debounced() {
                    if (timeout) {
                        clearTimeout(timeout);
                    }

                    function delayed() {
                        fn();
                        timeout = null;
                    }
                    timeout = setTimeout(delayed, threshold || 100);
                }
            }
        })

        client.cards.collectionSearch({
            "card_collection_ids":category4,
            per_page: returnedPageCount
        })
        .then(function (data) {
            characterData = data;
            generateCards("column4", data);
            var qsRegex;

            // init Isotope
            var $CharacterGrid = $('#column4 .cardHolder').isotope({
                 itemSelector: '.smcard',
                layoutMode: 'fitRows',
                 fitRows: {
                  gutter: 10
                },
                filter: function () {
                    $(this).attr('data-text')
                    return qsRegex ? $(this).attr('data-text').match(qsRegex) : true;
                }
            });

            // use value of search field to filter
            var $quicksearch = $('#column4Search').keyup(debounce(function () {
                qsRegex = new RegExp($quicksearch.val(), 'gi');
                $CharacterGrid.isotope();
                console.log($CharacterGrid);
            }, 200));



            // debounce so filtering doesn't happen every millisecond
            function debounce(fn, threshold) {
                var timeout;
                return function debounced() {
                    if (timeout) {
                        clearTimeout(timeout);
                    }

                    function delayed() {
                        fn();
                        timeout = null;
                    }
                    timeout = setTimeout(delayed, threshold || 100);
                }
            }
        })

}

var newWrap;

function publishAndSend() {
    var _ids = $('.placeholder').map(function () {return $(this).attr('data-id')})
    var phoneNumber = $('#sendNumber').val();

    client.wraps.createWrapFromCards({"card_ids":_ids.toArray().toString()})
    .then(function(wrap) {
        //Publish Wrap
        newWrap = wrap;
        client.wraps.publish(wrap.id)
        .then(function(token) {
            console.log("token: ", token);
            //Now Share
            var shareBody =  {"type": 'sms', "phone_number":phoneNumber, "body":sharingMessage};
            client.wraps.share(newWrap.id, shareBody)
            .then(function() {
                var htmlString = "<p>We've shared this <a href='" + newWrap.canonicalUrl + "' class='alert-link' target='_blank'>Wrap</a> via text</p>";
                $("#alertmsg").append(htmlString);
                $("#alert").show();
            })
        })
        console.log(wrap.canonicalUrl)
    })
}


$(function () {
    setTitles();
    getCardData();
    $("#sendBtn").click(publishAndSend)
    $("#alert").hide();
});