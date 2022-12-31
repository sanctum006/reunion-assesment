import React, { useState } from "react";
import { PROPERTY_DATA } from "../../constants/filters";
import PropertyCards from "../containers/PropertyCards";
import Navbar from "../navigation/Navbar";
import PropertyFilters from "../utilities/PropertyFilters";
import SearchBar from "../utilities/SearchBar";

function HomePage() {
  const [propertyList, setPropertyList] = useState(PROPERTY_DATA);

  return (
    <div>
      <Navbar />

      <div className="homepage-sub-container">
        <SearchBar />

        <PropertyFilters setPropertyList={setPropertyList} />

        <PropertyCards propertyList={propertyList} />
      </div>
    </div>
  );
}

export default HomePage;
