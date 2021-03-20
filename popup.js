// @author sakship2000
// setup api querying
const api = "https://coronavirus-19-api.herokuapp.com/countries";
// get cases info
const errors = document.querySelector(".errors");
const loading = document.querySelector(".fetching");
const cases = document.querySelector(".cases");
const deaths = document.querySelector(".deaths");
const todayCases = document.querySelector(".todayCases");
const todayDeaths = document.querySelector(".todayDeaths");
const recovered = document.querySelector(".recovered");
const results = document.querySelector(".result-container");
results.style.display = "none";
loading.style.display = "none";
errors.textContent = "";
// get form
const form = document.querySelector(".form-data");
// get country name
const country = document.querySelector(".country-name");

// search using country name
const countrySearch = async countryName => {
  loading.style.display = "block";
  errors.textContent = "";
  try {
    const response = await axios.get(`${api}/${countryName}`);
    if(response.data ==="Country not found"){ throw error;  }
    loading.style.display = "none";
    todayCases.textContent = response.data.todayCases;
    todayDeaths.textContent = response.data.todayDeaths;
    cases.textContent = response.data.cases;
    recovered.textContent = response.data.recovered;
    deaths.textContent = response.data.deaths;
    results.style.display = "block";
  } catch (error) {
    loading.style.display = "none";
    results.style.display = "none";
    errors.textContent = "(^-^*) Unfortunately, no such country exists";
  }
};

// funcion to handle form submission
const handleSubmit = async e => {
  e.preventDefault();
  countrySearch(country.value);
  console.log(country.value);
};

form.addEventListener("submit", e => handleSubmit(e));