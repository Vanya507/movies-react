import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./SearchMovieInput.scss";

function SearchMovieInput() {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (inputValue.trim()) {
      navigate(`/searchedMoviesList?search=${inputValue}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      navigate(`/searchedMoviesList?search=${inputValue}`);
    }
  };

  return (
    <>
      <input
        className="input__main"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        type="text"
        placeholder="Search for a movie"
      />
      <Button onClick={handleSearch} />
    </>
  );
}

export default SearchMovieInput;
