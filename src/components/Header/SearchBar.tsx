import React from "react";
import { SearchBarContainer } from "./styles";

interface SearchBarProps {
  isHeader: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ isHeader }) => {
  return (
    <SearchBarContainer isHeader={isHeader}>
      <img src={require("../../assets/icons/searchIcon.svg").default} alt="" />
      <input type="text" placeholder="Pesquisar no UOLkut" />
    </SearchBarContainer>
  );
};

export default SearchBar;
