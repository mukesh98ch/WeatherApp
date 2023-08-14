const apiKey = "f50a39fc246958f7738026f85f71b6b4";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
        const searchBox = document.querySelector(".search input");
        const searchBtn = document.querySelector(".search button");
    
        async function checkWeather(city) {
            if (!city) return; 
            try {
                const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
                if (!response.ok) {
                    throw new Error("City not found");
                }
                const data = await response.json();
                console.log(data);
                document.querySelector(".city").innerHTML = data.name;
                document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C";
                document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
                document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
            } catch (error) {
                console.error(error);
                document.querySelector(".city").innerHTML = "City not found";
                document.querySelector(".temp").innerHTML = "";
                document.querySelector(".humidity").innerHTML = "";
                document.querySelector(".wind").innerHTML = "";
            }
        }
    
        searchBtn.addEventListener("click", () => {
            checkWeather(searchBox.value);
        });
    
        searchBox.addEventListener("keyup", (event) => {
            if (event.key === "Enter") {
                checkWeather(searchBox.value);
            }
        });