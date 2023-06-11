var itemList = document.getElementById("itemList");
var itemInput = document.getElementById("itemInput");
var addItemButton = document.getElementById("addItemButton");
var removeItemButton = document.getElementById("removeItemButton");


addItemButton.addEventListener("click", function () {
 var itemValue = itemInput.value;
 var listItem = document.createElement("li");
 listItem.innerHTML = itemValue;
 itemList.appendChild(listItem);
});


removeItemButton.addEventListener("click", function () {
 var itemValue = itemInput.value;
 var listItems = itemList.getElementsByTagName("li");
 for (var i = listItems.length - 1; i >= 0; i--) {
   if (listItems[i].innerHTML === itemValue) {
     listItems[i].remove();
   }
 }
});
