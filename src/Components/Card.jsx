import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Card({ theme, inputText, selectedRegion }) {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/assets/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = countries.filter((country) => {
      const matchesInput = country.name.toLowerCase().includes(inputText);
      const matchesRegion = selectedRegion
        ? country.region === selectedRegion
        : true;
      return matchesInput && matchesRegion;
    });
    setFilteredCountries(filtered);
  }, [inputText, selectedRegion, countries]);

  return (
    <div className="gap- flex flex-wrap gap-[75px]">
      {filteredCountries.map((country, index) => (
        <Link key={index} to={`/country/${country.name}`}>
          <div className="flex w-[264px] flex-col shadow-md">
            <img src={country.flag} className="h-[160px] w-full rounded-t-lg" />
            <div
              className="rounded-b-lg p-5"
              style={{
                backgroundColor: theme === "light" ? "#ffffff" : "#20242c",
              }}
            >
              <h2>
                <b>{country.name}</b>
              </h2>
              <p>
                <b>Capital: </b>
                {country.capital}
              </p>
              <p>
                <b>Region: </b>
                {country.region}
              </p>
              <p>
                <b>Population: </b> {country.population}
              </p>
              {/* Add more fields as needed */}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
