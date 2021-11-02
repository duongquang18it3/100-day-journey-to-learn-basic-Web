'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// 16.3 Our First AJAX Call XMLHttpRequest

const getCountryData = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    const key = Object.keys(data.currencies);
    console.log(key);
    const {
      [key]: { name },
    } = data.currencies;
    console.log(name);

    const html = `<article class="country">
        <img class="country__img" src=${data.flags.png} />
        <div class="country__data">
          <h3 class="country__name">${data.name.common}</h3>
          <h4 class="country__region">${data.region}</h4>
          <p class="country__row"><span>👫</span>${(
            +data.population / 1000000
          ).toFixed(1)} milion people</p>
          
          <p class="country__row"><span>🗣️</span>${Object.values(
            data.languages
          )}</p>
          <p class="country__row"><span>💰</span>
          ${key}</p>
          <p class="country__row"><span>💰</span>
          ${name}
          </p>
        </div>
        
      </article>`;
    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
  });
};
getCountryData('portugal');
getCountryData('usa');
getCountryData('vietnam');
getCountryData('vietnam');

