var url = 'https://restcountries.eu/rest/v2/name/',
	countriesList = $('#countries');

$('#search').click(searchCountries);

function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) {
		countryName = 'Poland';
	}
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesList
  	});
}

function showCountriesList(resp) {
    var title;
  	countriesList.empty();
	resp.forEach(function(item) {
        title = $('<h3>').text(item.name ).append('<br/>' +'<img src="' + item.flag + '" height="50">');
		 $('<li class="title">').append(title).appendTo(countriesList);
   		 $('<li>').text('Nazwa kraju w języku ojczystym: ' + item.nativeName).appendTo(countriesList);
		 $('<li>').text('Stolica: ' + item.capital).appendTo(countriesList);
		 $('<li>').text('Region: ' + item.region).appendTo(countriesList);
		 $('<li>').text('Waluta: ' + item.currencies[0].name +' (' + item.currencies[0].symbol + ')').appendTo(countriesList);
		 $('<li>').text('Język: ' + item.languages[0].name).appendTo(countriesList);
		 $('<li>').text('Powierzchnia: ' +  item.area +  ' km 2').appendTo(countriesList);
		 var borders = item.borders;
		 var caBorders = borders.join(', ');
		 if (!caBorders.length) {
			 $('<li>').text('Kraje graniczące: brak').appendTo(countriesList);
			 }
			 else{
			 $('<li>').text('Kraje graniczące: ' + caBorders).appendTo(countriesList);
			 }
});
}