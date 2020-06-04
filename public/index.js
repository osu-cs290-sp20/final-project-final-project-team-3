/*Searching for the twit*/
function SearchButton(){
	console.log("called");
	var championCards = document.querySelectorAll(".legendCard");
	var SearchInput = document.getElementById('search-input').value.toLowerCase();
	console.log("== Search",SearchInput);
	
	if(SearchInput != ""){
		for(var i = 0; i < championCards.length; i++){
			
			var Text = championCards[i].children[0].children[1].textContent.toLowerCase();
			
			if(!Text.includes(SearchInput)){
				championCards[i].classList.add('hidden');
			}
			
			if(Text.includes(SearchInput)){
				championCards[i].classList.remove('hidden');
			}
		}		
	} else{
		for(var i = 0; i < championCards.length; i++){
				championCards[i].classList.remove('hidden');
		}
	}
}

window.addEventListener('DOMContentLoaded', function () {

  var searchButton = document.getElementById('search-button');
  if (searchButton) {
    searchButton.addEventListener('click', SearchButton);
  }

  var searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', SearchButton);
  }

});