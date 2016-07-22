$("#accordion").accordion({
    heightStyle: "fill"
});

$(window).resize(function() {
    $("#accordion").accordion("resize");
});

$("a").on("click", function(ev) {

    var path = "assets/img/";

    src = $(this).data("source");

    mockContainer = $("#mock");
    mockContainer.empty();

    img = $("<img class='pure-img' />");
    img.attr("src", path + data[src].file);

    mockContainer.append(img);
});
