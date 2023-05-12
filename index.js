let country = document.getElementById("country-input");
let searchbtn = document.getElementById("search-btn");

searchbtn.addEventListener("click", () => {
    let countryName = country.value;
    let url = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(url);
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0].capital[0]);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));
        result.innerHTML = `
            <img src="${data[0].flags.svg}" class="flag-image" ><br>
            <p style="text-align:center;font-size:large;">${data[0].name.common}</p><br><br>
            <p>Capital : ${data[0].capital[0]}</p><br>
            <p>Continents : ${data[0].continents[0]}</p><br>
            <p>Currency : ${data[0].currencies[Object.keys(data[0].currencies)].name} - ${Object.keys(data[0].currencies)[0]}</p><br>
            <p>Languages : ${Object.values(data[0].languages).toString().split(",").join(", ")}</p><br>
            <p>Population : ${data[0].population}</p><br>
        `;
    });
});

