'use strict';

$.ajax({
  url: 'meals.json',
  cache: false
})
.done(function(data) {
	getDays(data);
});

//pulls in whole json file 
function getDays(data){
	var html = '', myMeals; 

	$.each(data, function( key, value ) {
		myMeals = getMeals(value);
		html +='<div class="day-container panel panel-default"><div class="day panel-heading"><div class="panel-title">' + key + '</div> </div><div class="panel-body">' + myMeals + '</div></div>';
	});  	

	$('.meal-content').html(html);
}

// Expects to recieve an object of meals
function getMeals(meals) {
	var html = '';
	var ingredients = '';

	$.each(meals, function( key, value ) {
		ingredients = getIngredients(value['recipe']);
		html += '<div class="meal">' + value['name'] + '</div>' ;
		html += '<div class="ingredients">' + ingredients + '</div>' ;
	});

	return html;
}

//Expects to recieve an object of ingredients
function getIngredients(ingredients) {
	var html = '';
	$.each(ingredients, function( key, value ) {
		html += '<div class="ingredient">' + value + '</div>';
	});

	return html;
}