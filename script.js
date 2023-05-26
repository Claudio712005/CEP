
$(document).ready(function() {
  $('#cep').on('input', function() {
    var cep = $(this).val().replace(/\D/g, '');
    if (cep.length === 8) {
      setTimeout(function() {
        var endereco = {
          logradouro: 'Click-me',
          bairro: 'Click-me',
          localidade: 'Click-me',
          uf: 'Click-me'
        };
        preencherCampos(endereco);
        showWeatherDataByCity(endereco.localidade);
      }, 500);
    }
  });

  function preencherCampos(endereco) {
    $('#logradouro').val(endereco.logradouro);
    $('#bairro').val(endereco.bairro);
    $('#localidade').val(endereco.localidade);
    $('#uf').val(endereco.uf);

    $('.form-group').show();
  }

  const cep = document.querySelector("#cep");

  const showData = (result) => {
    for (const campo in result) {
      if (document.querySelector("#" + campo)) {
        document.querySelector("#" + campo).value = result[campo];
      }
    }
  };

  cep.addEventListener("blur", (e) => {
    let search = cep.value.replace("-", "");
    const options = {
      method: 'GET',
      mode: 'cors',
      cache: 'default'
    };

    fetch(`https://viacep.com.br/ws/${search}/json/`, options)
      .then(response => response.json())
      .then(data => {
        showData(data);
        showWeatherDataByCity(data.localidade);
      })
      .catch(e => console.log('Deu Erro: ' + e.message));
  });

  const apiKey = "3a5d03761fb2bdec4b3b7cf13ca8c4b0";
  const apiContryURL = "https://flagsapi.com/ /flat/64.png";

  const cityInput = document.querySelector("#city-input");
  const searchBtn = document.querySelector("#search");

  const cityElements = document.querySelector("#city");
  const tempElements = document.querySelector("#temperature span");
  const descElements = document.querySelector("#description");
  const weatherIconElements = document.querySelector("#weather-icon");
  const countryElements = document.querySelector("#country");
  const humidityElements = document.querySelector("#humidity span");
  const windElements = document.querySelector("#wind span");

  const weatherContainer = document.querySelector("#weather-data");

  
  const getWeatherData = async(city) => {
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;
    const res = await fetch(apiWeatherURL);
    const data = await res.json();
    return data;
  };

  const showWeatherData = (data) => {
    cityElements.innerText = data.name;
    tempElements.innerText = parseInt(data.main.temp);
    descElements.innerText = data.weather[0].description;
    weatherIconElements.setAttribute("src", `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
    countryElements.setAttribute("src", `https://flagsapi.com/${data.sys.country}/flat/64.png`);
    humidityElements.innerText = `${data.main.humidity}%`;
    windElements.innerText = `${data.wind.speed}km/h`;
    weatherContainer.classList.remove("hide");
  };

  const showWeatherDataByCity = async(city) => {
    const data = await getWeatherData(city);
    showWeatherData(data);
  };

});
