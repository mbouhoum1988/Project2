var searchQuery;
$("#searchRecipeButton").on("click", function(event) {
  event.preventDefault();
  searchQuery = $("#searchRecipe")
    .val()
    .trim();

  var queryURL =
    "https://www.food2fork.com/api/search?key=db7b87a5ebb993d87acc528cc26d1f50&q=" +
    searchQuery;

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    var result = JSON.parse(response);
    var total = 22;

    $("#results").empty();

    for (var i = 0; i < total; i++) {
      var recipe = result.recipes[i];
      var recipeRow = $("<div class='row'></div>");

      var image_url = recipe.image_url;
      var image = $("<img>");
      image.addClass("insertImage keepElement");
      image.attr("src", image_url);

      var name = $("<h5>");
      name.addClass("title");
      name.html(recipe.title);

      var link = $("<a>" + recipe.title + "</a>");
      link.addClass("keepElement recipeLink");
      link.attr("href", recipe.source_url);

      var btn = $(
        "<button class='btn btn-default addbutton'>add to your list</button>"
      );

      recipeRow.append(name);
      recipeRow.append(image);
      recipeRow.append(link);
      recipeRow.append(btn);

      $("#resultsshow").show();
      $("#results").append(recipeRow);
    }

    $(".addbutton").on("click", function() {
      var addname = $("<div id='addname'>");
      var addtitle = $(this)
        .parent()
        .children(".title");
      var addimage = $(this)
        .parent()
        .children(".insertImage");
      var addlink = $(this)
        .parent()
        .children(".recipeLink");
      var addbtn = $(this)
        .parent()
        .children(".btn");

      var datatitle = $(this)
        .parent()
        .children(".title")
        .html();
      var datalink = $(this)
        .parent()
        .children(".recipeLink")
        .attr("href");

      var addPost = {
        text: datatitle,
        description: datalink
      };

      console.log(addPost);

      addname.append(addtitle);
      addname.append(addimage);
      addname.append(addlink);
      addname.append(addbtn);

      $("#display").append(addname);

      addname.children(".btn").remove();
      $("#shows").show();

      $.ajax("/api/food", {
        method: "post",
        data: addPost
      }).then(function(){});
    });
  });
});
