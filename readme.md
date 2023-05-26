This repository contains JavaScript code that interacts with an HTML page to retrieve address information based on a zip code entered by the user and display the corresponding address data. Additionally, it fetches weather data for the city associated with the zip code and displays it.

The main code function is triggered when the HTML page is loaded or when the user enters a zip code in the designated field. When the entered zip code has 8 characters, the code waits for 500 milliseconds and then makes a request to obtain the address data associated with the zip code using the ViaCEP API. The returned data is filled into the fields for street, neighborhood, locality, and state in the HTML page. It is also used to fetch weather data for the city associated with the zip code.

The code also includes an event listener for the zip code field that is triggered when the user leaves the field (blur event). In this event, the code removes non-numeric characters from the zip code field value and makes a request to the same ViaCEP API to retrieve the address data for the entered zip code. The returned data is displayed in the HTML fields and is also used to fetch the weather data for the city associated with the zip code.

Additionally, the code defines an asynchronous function called getWeatherData, which makes a request to the OpenWeatherMap API to fetch the weather data for a specified city. The showWeatherData function is responsible for displaying the weather data in the HTML page by filling the corresponding elements with temperature, weather description, weather icon, country, humidity, and wind speed information.

The repository also includes references to an OpenWeatherMap API key and URLs for the country flag and weather icon images. These placeholders should be replaced with the correct API keys and URLs for the code to function properly.

-------------------------------------------------------------------------------------------------------

Este repositório contém um código JavaScript que interage com uma página HTML para buscar informações de um CEP digitado pelo usuário e exibir os dados de endereço correspondentes, além de exibir dados meteorológicos da cidade relacionada ao CEP.

A função principal do código é acionada quando a página HTML é carregada ou quando o usuário digita um CEP no campo designado. Quando o CEP digitado tem 8 caracteres, o código espera 500 milissegundos e em seguida realiza uma requisição para obter os dados de endereço correspondentes ao CEP, usando a API ViaCEP. Os dados retornados são preenchidos nos campos de logradouro, bairro, localidade e UF da página HTML, e também são utilizados para buscar dados meteorológicos da cidade relacionada ao CEP.

O código também inclui um evento de escuta para o campo de CEP que é acionado quando o usuário sai do campo (evento "blur"). Nesse evento, o código remove os caracteres não numéricos do valor do campo CEP e realiza uma requisição para a mesma API ViaCEP, buscando os dados de endereço correspondentes ao CEP digitado. Os dados retornados são exibidos nos campos da página HTML e também são utilizados para buscar os dados meteorológicos da cidade relacionada ao CEP.

Além disso, o código inclui a definição de uma função assíncrona chamada getWeatherData, que realiza uma requisição para a API OpenWeatherMap para obter os dados meteorológicos de uma cidade especificada. A função showWeatherData é responsável por exibir os dados meteorológicos na página HTML, preenchendo os elementos correspondentes com as informações de temperatura, descrição do clima, ícone do clima, país, umidade e velocidade do vento.

O repositório também contém referências a uma chave de API do OpenWeatherMap e a URLs de imagens da bandeira do país e do ícone do clima. Essas informações devem ser substituídas pelas chaves e URLs corretas para que o código funcione corretamente.