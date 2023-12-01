document.addEventListener('DOMContentLoaded', function () {
var FruitOrLegumesTxt = document.getElementById('FruitorLegumes');
var btnSpecificList =  document.getElementById('btnSpecificList');
var btnGeneralList =  document.getElementById('btnGeneralList');
var fruitRadio = document.getElementById('FruitRadius');
var legumesRadio = document.getElementById('LegumesRadius');
var SearchFruitorLegumes=document.getElementById('SearchFruitorLegumes');
var ListFruitArray=["Fruits-Apple","Fruits-Mangos"];
var ListFruitLegumesArray=["Fruits-PineApple","Fruits-Banana","Legumes-Potato","Legumes-Lentis"];
var ListLegumesArray=["Legumes-Broccoli","Legumes-Green Beans"];


for (var i=0; i < ListFruitArray.length ; i++) {
    document.getElementById('AddFruitsElemets').innerHTML+=`
    <div class="alert alert-success  FruitAlertClass " role="alert"> 
    <p>${ListFruitArray[i]}</p>
   </div>
   `   
}

for (var i=0; i < ListLegumesArray.length ; i++) {
    document.getElementById('AddLegumesElemets').innerHTML+=`
            <div class="alert alert-danger  LegumesAlertClass " role="alert"> 
         <p>${ListLegumesArray[i]}</p>
        </div>
           `
}

for (var i=0; i < ListFruitLegumesArray.length ; i++) {
    
    document.getElementById('AddFruitLegumesElemets').innerHTML+=`
    <div class="alert alert-warning mt-3 FruitLegumesAlertClass " role="alert"> 
    <p>${ListFruitLegumesArray[i]}</p>
   </div>
   `
}


document.getElementById('btnSpecificList').addEventListener('click', function () {
    // Check if FruitOrLegumesTxt is empty
    var fruitOrLegumesValue = FruitOrLegumesTxt.value.trim();
    if (fruitOrLegumesValue === "") {
        alert("Please enter a value for Fruit or Legumes");
        return;
    }

    if (fruitRadio.checked) {
        var FruitOrLegumesValue = "Fruits-" + fruitOrLegumesValue;
        console.log('Fruit radio button checked');
        console.log("teh fruit name " + FruitOrLegumesValue);
        ListFruitArray.push(FruitOrLegumesValue);
        console.log(ListFruitArray);
        document.getElementById('AddFruitsElemets').innerHTML += `
            <div class="alert alert-success  FruitAlertClass " role="alert"> 
                <p>${FruitOrLegumesValue}</p>
            </div>
        `;
    }

    if (legumesRadio.checked) {
        var FruitOrLegumesValue = "Legumes-" + fruitOrLegumesValue;
        console.log('Legumes radio button checked');
        console.log("teh fruit name " + FruitOrLegumesValue);
        ListLegumesArray.push(FruitOrLegumesValue);
        console.log(ListLegumesArray);
        document.getElementById('AddLegumesElemets').innerHTML += `
            <div class="alert alert-danger  LegumesAlertClass " role="alert"> 
                <p>${FruitOrLegumesValue}</p>
            </div>
        `;
    }
});

document.getElementById('btnGeneralList').addEventListener('click', function () {
    var fruitOrLegumesValue = FruitOrLegumesTxt.value.trim();
    if (fruitOrLegumesValue === "") {
        alert("Please enter a value for Fruit or Legumes");
        return;
    }

    if (fruitRadio.checked) {
        var FruitOrLegumesValue = "Fruits-" + fruitOrLegumesValue;
        console.log("teh fruit name " + FruitOrLegumesValue);
        ListFruitLegumesArray.push(FruitOrLegumesValue);
        console.log(ListFruitLegumesArray);
        document.getElementById('AddFruitLegumesElemets').innerHTML += `
            <div class="alert alert-warning mt-3 FruitLegumesAlertClass " role="alert"> 
                <p>${FruitOrLegumesValue}</p>
            </div>
        `;
    }

    if (legumesRadio.checked) {
        var FruitOrLegumesValue = "Legumes-" + fruitOrLegumesValue;
        console.log("teh fruit name " + FruitOrLegumesValue);
        ListFruitLegumesArray.push(FruitOrLegumesValue);
        console.log(ListFruitLegumesArray);
        document.getElementById('AddFruitLegumesElemets').innerHTML += `
            <div class="alert alert-warning mt-3 FruitLegumesAlertClass " role="alert"> 
                <p>${FruitOrLegumesValue}</p>
            </div>
        `;
    }
});


document.getElementById('SearchItem').addEventListener('click', function () {
    var searchTerm = document.getElementById('SearchFruitorLegumes').value;
    filterAndHighlight(searchTerm, ListFruitArray, 'AddFruitsElemets', 'FilteredFruitArray');
    filterAndHighlight(searchTerm, ListFruitLegumesArray, 'AddFruitLegumesElemets', 'FilteredFruitLegumesArray');
    filterAndHighlight(searchTerm, ListLegumesArray, 'AddLegumesElemets', 'FilteredLegumesArray');
});

document.getElementById('DeleteItem').addEventListener('click', function () {
    var searchTerm = document.getElementById('SearchFruitorLegumes').value;
    deleteFilteredItem(searchTerm, ListFruitArray);
    deleteFilteredItem(searchTerm, ListFruitLegumesArray);
    deleteFilteredItem(searchTerm, ListLegumesArray);
    refreshDisplayedItems();
});

function filterAndHighlight(searchTerm, originalArray, containerId, filteredArrayName) {
    window[filteredArrayName] = originalArray.filter(item => item.toLowerCase().includes(searchTerm.toLowerCase()));
    
    var container = document.getElementById(containerId);
    container.innerHTML = '';


    window[filteredArrayName].forEach(function (item) {
        container.innerHTML += `
            <div class="alert alert-primary mt-3">
                <p>${item}</p>
            </div>
        `;
    });
}

   function hideFilteredItem(searchTerm, array, containerId, filteredArrayName) {
        array.forEach((item) => {
            var lowerItem = item.textContent.toLowerCase();
            var lowerSearchTerm = searchTerm.toLowerCase();

            if (lowerItem.includes(lowerSearchTerm) && item.classList.contains('alert-primary')) {
                
                item.style.display = "none";
            }
        });
    }



function refreshDisplayedItems() {
    var searchTerm = document.getElementById('SearchFruitorLegumes').value;
    filterAndHighlight(searchTerm, ListFruitArray, 'AddFruitsElemets', 'FilteredFruitArray');
    filterAndHighlight(searchTerm, ListFruitLegumesArray, 'AddFruitLegumesElemets', 'FilteredFruitLegumesArray');
    filterAndHighlight(searchTerm, ListLegumesArray, 'AddLegumesElemets', 'FilteredLegumesArray');
}


});