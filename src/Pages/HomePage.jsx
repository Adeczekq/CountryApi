import Card from "./../Components/Card";
import Filter from "./../Components/Filter";
import { useState } from "react";

import Search from "./../Components/Search";

function HomePage({ theme }) {
  const [inputText, setInputText] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");
  const inputHandler = (e) => {
    //convert input text to lower case
    let lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };
  return (
    <div>
      <div className="flex flex-col px-16 py-7">
        <div className="flex justify-between py-7">
          <Search inputText={inputText} inputHandler={inputHandler} />
          <Filter
            selectedRegion={selectedRegion}
            setSelectedRegion={setSelectedRegion}
          />
        </div>

        <Card
          inputText={inputText}
          theme={theme}
          selectedRegion={selectedRegion}
        />
      </div>
    </div>
  );
}

export default HomePage;
