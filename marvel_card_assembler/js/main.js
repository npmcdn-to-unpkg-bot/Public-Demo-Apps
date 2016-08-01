//Replace with your own API Key
API_KEY = "00000000000000000000000000000000000000000000000000000000000000000"

client = new Wrap(API_KEY, "https://api.wrap.co/api")
var sharingMessage = "Hello, Here's your Marvel Wrap: {{wrap}} Excelsior!"

var returnedPageCount = 250;
var storyCountData, characterDescriptionData, characterData, _dragDropZones;

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

    client.cards.list({
        tags: "character_description",
        per_page: returnedPageCount
    })

    .then(function (data) {
        characterDescriptionData = data;
        generateCards("descriptions", data);
        var qsRegex;

        // init Isotope
        var $CharacterGrid = $('#descriptions .cardHolder').isotope({
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
        var $quicksearch = $('#descriptionSearch').keyup(debounce(function () {
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

    client.cards.list({
            tags: "storycount",
            per_page: returnedPageCount


        })
        .then(function (data) {
            storyCountData = data;
            console.log(data);
            generateCards("counts", data);
            var qsRegex;

            // init Isotope
            var $CharacterGrid = $('#counts .cardHolder').isotope({
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
            var $quicksearch = $('#countSearch').keyup(debounce(function () {
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

    client.cards.list({
            tags: "character",
            per_page: returnedPageCount

        })
        .then(function (data) {
            characterData = data;
            generateCards("characters", data);
            var qsRegex;

            // init Isotope
            var $CharacterGrid = $('#characters .cardHolder').isotope({
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
            var $quicksearch = $('#characterSearch').keyup(debounce(function () {
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

function personalizeAndSend() {
    var _ids = $('.placeholder').map(function () {return $(this).attr('data-id')})
    var phoneNumber = $('#sendNumber').val();

    //Build up V2 Personalization Body
    var body = {};
    body.personalized_json = [];

    for (let id of _ids.slice(0, -1)) {
        body.personalized_json.push({
            id:id,
            data:{"":0}
        })
    }
    
    client.wraps.createPersonalized("0f613817-085f-4d26-bad6-9caa434f3fac", body).then(function(wrap) {
        //Now Share
        var shareBody =  {"type": 'sms', "phone_number":phoneNumber, "body":sharingMessage};
        client.wraps.share(wrap.id, shareBody)
        .then(function() {
            var htmlString = "<p>We've shared this <a href='" + wrap.canonicalUrl + "' class='alert-link' target='_blank'>Wrap</a> via text</p>";
            $("#alertmsg").append(htmlString);
            $("#alert").show();
        })
    })
    .catch(function(error) {
        console.log(error);
    })
}


$(function () {
    getCardData();

    $("#sendBtn").click(personalizeAndSend)
    $("#alert").hide();
});