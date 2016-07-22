$("#accordion").accordion({
    heightStyle: "fill"
});

$(window).resize(function() {
    $("#accordion").accordion("resize");
});

mockContainer = $("#mock");

$("a").on("click", function(ev) {

    var path = "assets/img/";

    src = $(this).data("source");

    mockContainer.empty();

    img = $("<img class='pure-img' />");
    img.attr("src", path + data[src].file);

    desc = $("<div class='desc'></div>");
    desc.hide();;

    descTitle = $("<h3 class='desc-title'></h3>");
    descTitle.html(data[src].title);

    descContent = $("<p></p>");
    descContent.html(data[src].desc);

    desc.append(descTitle);
    desc.append(descContent);

    mockContainer.append(img);
    mockContainer.append(desc);
});

mockContainer.on('mouseenter', function(ev) {
    $(".desc").show();
}).on('mouseleave', function(ev) {
    $(".desc").hide();
});
