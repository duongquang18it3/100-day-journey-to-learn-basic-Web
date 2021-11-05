'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderError = function (message) {
  countriesContainer.insertAdjacentText('beforeend', message);
  // countriesContainer.style.opacity=1;
};

const renderCountry = function (data, className = '') {
  const key = Object.keys(data.currencies);
  console.log(key);
  const {
    [key]: { name },
  } = data.currencies;
  console.log(name);
  const html = `<article class="country ${className}">
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
  // countriesContainer.style.opacity = 1;
};
const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);
    return response.json();
  });
};
///////////////////////////////////////
// 16.3 Our First AJAX Call XMLHttpRequest
/* 
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
getCountryData('thailand'); */

//////////////////////////////////////////////////////////////////
// Wellcome back AJAX Hell

/* const getCountryDataAndNeighbour = function (country) {
  // AJAX call country 1
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();
  request.addEventListener('load', function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    // Render country 1
    renderCountry(data);

    // Get neighbour country (2)
    const [neighbour] = data.borders;

    if (!neighbour) return;

    // AJAX call country 2
    const request2 = new XMLHttpRequest();
    request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
    request2.send();
    request2.addEventListener('load', function () {
      const [data2] = JSON.parse(this.responseText);
      console.log(data2);
      renderCountry(data2, 'neighbour');
      
      
      ////////////////////////
      const neighbour2 = data2.borders[2];
      console.log(neighbour2);
      const request3 = new XMLHttpRequest();
      request3.open(
        'GET',
        `https://restcountries.com/v3.1/alpha/${neighbour2}`
      );
      request3.send();
      request3.addEventListener('load', function () {
        const [data3] = JSON.parse(this.responseText);
        console.log(data3);
        renderCountry(data3, 'neighbour');
      });
    });
  });
};

getCountryDataAndNeighbour('portugal');
setTimeout(() => {
  console.log('1 second passed');
  setTimeout(() => {
    console.log('1 second passed');
    setTimeout(() => {
      console.log('1 second passed');
      setTimeout(() => {
        console.log('1 second passed');
        setTimeout(() => {
          console.log('1 second passed');
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000); */

///////////////////////////////////////////////////////////////////
// Consuming Promises

/* const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      console.log(data[0]);
      renderCountry(data[0]);
    });
}; */

////////////////////////////////////////////////
// Consuming Promises
// Chaining Promises
// Handling Rejected Promises
// Throwing Errors Manually
const getCountryData = function (country) {
  // Country 1
  getJSON(`https://restcountries.com/v3.1/name/${country}`)
    .then(data => {
      renderCountry(data[0]);
      console.log(data[0]);
      const neighbour = data[0].borders[0];
      console.log(neighbour);
      if (!neighbour) throw new Error('No neighbour found!');
      // Country 2
      return getJSON(
        `https://restcountries.com/v3.1/alpha/${neighbour}`,
        'Country not found'
      );
    })
    .then(data => renderCountry(data[0], 'neighbour'))
    .catch(err => {
      console.log(`${err} ❌❌❌`);
      renderError(`Something went wrong ❌❌❌ : ${err.message}. Try again ! `);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('portugal');
});