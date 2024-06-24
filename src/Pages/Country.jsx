import { useParams, Link } from "react-router-dom";
import BackButton from "../Components/BackButton";
import { useEffect, useState } from "react";

function Country() {
  const [country, setCountry] = useState(null);
  const [allCountries, setAllCountries] = useState([]);
  const { countryName } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/assets/data.json");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAllCountries(data);
        const foundCountry = data.find(
          (c) => c.name === decodeURIComponent(countryName),
        );
        if (foundCountry) {
          setCountry(foundCountry);
        } else {
          console.error("Country not found");
        }
      } catch (error) {
        console.error("Error fetching the data:", error);
      }
    }

    fetchData();
  }, [countryName]);

  const getCountryName = (code) => {
    const country = allCountries.find((c) => c.alpha3Code === code);
    return country ? country.name : code;
  };

  return (
    <div className="flex flex-col px-28 md:px-2">
      <div className="flex flex-col p-7 md:p-2">
        <BackButton />
        <div className="flex flex-wrap items-center justify-between">
          {country ? (
            <>
              <img
                className="min-w-[320px] max-w-[650px] rounded-lg shadow-lg"
                src={country.flags.svg}
                alt={`${country.name} flag`}
              />
              <div className="flex w-1/3 flex-col gap-8 md:w-full">
                <h2 className="py-5 text-4xl font-extrabold">{country.name}</h2>
                <div className="flex flex-wrap justify-between">
                  <div className="flex flex-col gap-2">
                    <div>
                      <b>Native Name: </b>
                      {country.nativeName}
                    </div>
                    <div>
                      <b>Population: </b>
                      {country.population.toLocaleString()}
                    </div>
                    <div>
                      <b>Region: </b>
                      {country.region}
                    </div>
                    <div>
                      <b>Sub Region: </b>
                      {country.subregion}
                    </div>
                    <div>
                      <b>Capital: </b>
                      {country.capital}
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div>
                      <b>Top Level Domain: </b>
                      {country.topLevelDomain}
                    </div>
                    <div>
                      <b>Currencies: </b>
                      {country.currencies?.map((cur) => cur.name).join(", ")}
                    </div>
                    <div>
                      <b>Languages: </b>
                      {country.languages?.map((lang) => lang.name).join(", ")}
                    </div>
                  </div>
                </div>
                <div className="flex flex-row gap-2 md:flex-col md:flex-wrap">
                  <div>
                    <b>Border Countries: </b>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {country.borders?.map((border) => (
                      <Link
                        className="flex h-fit flex-wrap"
                        key={border}
                        to={`/country/${getCountryName(border)}`}
                      >
                        <div className="grid place-items-center rounded-lg px-4 py-2 text-center shadow-lg">
                          {getCountryName(border)}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Country;
