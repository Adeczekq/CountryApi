import { useRef } from "react";

function Filter({ selectedRegion, setSelectedRegion }) {
  const detailsRef = useRef(null);

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  return (
    <details className="dropdown" ref={detailsRef}>
      <summary className="btn m-1">Filter by region</summary>
      <ul className="menu dropdown-content z-[1] w-48 rounded-box bg-base-100 p-2 shadow">
        {["Africa", "Americas", "Asia", "Europe", "Oceania"].map((region) => (
          <li key={region} onClick={() => handleRegionSelect(region)}>
            <a className="flex items-center justify-between">
              {region}
              {selectedRegion === region && (
                <span className="ml-2 text-green-500">✓</span>
              )}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}

export default Filter;
