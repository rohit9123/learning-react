import { useState } from "react";

const ANIMALS = ["bird", "cat", "dog"];
const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [animal, setAnimal] = useState("dog");
  const [bread, setBread] = useState("");
  const Breads = [];
  //   const location = "seattle, WA";
  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Loaction
          <input
            id="location"
            onChange={(e) => setLocation(e.target.value)}
            value={location}
            placeholder="Loaction"
          />
        </label>
        <label htmlFor="ANIMAL">
          animal
          <select
            id="animal"
            value={animal}
            onChange={(e) => setAnimal(e.target.value)}
            onBlur={(e) => setAnimal(e.target.value)}
          >
            <option />
            {/* it is empty option */}
            {ANIMALS.map((animal) => (
              <option value={animal} key={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="Breeds">
          Bread
          <select
            id="breed"
            value={bread}
            onChange={(e) => SerBread(e.target.value)}
            onBlur={(e) => SerBread(e.target.value)}
          >
            <option />
            {/* it is empty option */}
            {Breads.map((breed) => (
              <option value={breed} key={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
