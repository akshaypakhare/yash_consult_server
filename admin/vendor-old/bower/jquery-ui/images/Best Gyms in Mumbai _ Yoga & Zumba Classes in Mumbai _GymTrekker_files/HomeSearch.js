/*jslint  browser: true, white: true, plusplus: true */
/*global $, countries */

$(function () {
    'use strict';
    // Setup jQuery ajax mock:
/*    $.mockjax({
        url: '*',
        responseTime: 2000,
        response: function (settings) {
            var query = '',
            query = settings.data.query,
                queryLowerCase = query.toLowerCase(),
                re = new RegExp('\\b' + $.Autocomplete.utils.escapeRegExChars(queryLowerCase), 'gi'),
                suggestions = $.grep(countriesArray, function (country) {
                     // return country.value.toLowerCase().indexOf(queryLowerCase) === 0;
                    return re.test(country.value);
                }),
                response = {
                    query: query,
                    suggestions: suggestions
                };

            this.responseText = JSON.stringify(response);
        }
    });
*/
    var locations = ['Mumbai','Pune'];
    var i=0;
	if(!getCookie("city")){
			setCookie("city","Mumbai",7);
	}
	var tempLocation='.'+getCookie("city");
    tempLocation = tempLocation.toLowerCase();
    $('.localityBox').hide();
    $(tempLocation).show();
	$(tempLocation).each(function(){
		locations[i++] = $(this).text().split("(")[0];
	});

    var locationList = $.map(locations, function (team) { return { value: team, data: { category: 'Location' }}; });

    // Initialize autocomplete with local lookup:
    $('#autocomplete').devbridgeAutocomplete({
        lookup: locationList,
        minChars: 1,
        onSelect: function (suggestion) {
            $('#selection').html('You selected: ' + suggestion.value + ', ' + suggestion.data.category);
        },
        showNoSuggestionNotice: true,
        noSuggestionNotice: 'Sorry, no matching results'
    });
    
});

$('.news-section').append('<span class="mediaHeading">Media Coverage</span>');