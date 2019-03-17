var searchQuery;
      $("#searchRecipeButton").on("click", function(event) {
        event.preventDefault();
        searchQuery = $("#searchRecipe").val().trim();

        var queryURL = "https://www.food2fork.com/api/search?key=f138a3cb85c879f8b2af9455ce4f2913&q=" + searchQuery;

        $.ajax({
          url: queryURL,
          method: "GET"
        })
          .then(function(response) {

            var result = JSON.parse(response);
            var total = 6;

            console.log(result.recipes);

            $("#results").empty();

            for (var i = 0; i < total; i++) {
              var recipe = result.recipes[i];
              var recipeRow = $("<div class='row'></div>");
              var btn = $("<button class='btn btn-default addbutton'>add to your list</button>")
              var image_url = recipe.image_url;
              var image = $("<img>");
              image.addClass("insertImage");
              image.attr("src", image_url);

              var name = recipe.title;

              recipeRow.append(name);
              recipeRow.append(image);
              recipeRow.append(
                $(`
                <a href="${recipe.source_url}">
                  ${recipe.title}
                </a>
              `));
              recipeRow.append(btn);

              $("#results").append(recipeRow);
            }

            $(".addbutton").on("click", function () {
                // var addPost = {
                     
                // };

                 var addname = $("<div>");
                 var title = this.name;
                 var picture = this.image;
                 addname.append(title); 
                 addname.append(picture);
                 $("#display").append(addname); 
                $("#shows").show();
            })
        });

      });