var Food = (function(originalFood) {
  var dogFood = [];
  var catFood = [];

  return {
    loadDogFood: function() {
      console.log("loadDogFood");
      var loader = new XMLHttpRequest();
      loader.addEventListener("load", function () {
        dogFoodArray = JSON.parse(this.responseText).dog_brands;
        console.log("dogFood", dogFoodArray);
        Food.showDogFood(dogFoodArray);
      });
      loader.open("GET", "dogFood.json");
      loader.send();
    },

    showDogFood: function(dogFoodArray) {
      var output = document.getElementById("dogFoodDisplay");
      var outputString = "";
      for (var i = 0; i < dogFoodArray.length; i++) {
          outputString = 
            `<tr>
              <td>${dogFoodArray[i].name}</td>
              <td>${dogFoodArray[i].types[i].type}</td>
              <td>${dogFoodArray[i].types[i].volumes[0].name}</td>
              <td>${dogFoodArray[i].types[i].volumes[0].price}</td>
            </tr>
            <tr>
              <td>${dogFoodArray[i].name}</td>
              <td>${dogFoodArray[i].types[i].type}</td>
              <td>${dogFoodArray[i].types[i].volumes[1].name}</td>
              <td>${dogFoodArray[i].types[i].volumes[1].price}</td>
            </tr>`;
          output.innerHTML += outputString;
      }
    }
  }
})(Food || {});

Food.loadDogFood();

