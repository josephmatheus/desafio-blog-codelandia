import { SearchBar } from "../SearchBar/SearchBar";
import { HeaderStyled } from "./styled";

export const Header = () => {
  return (
    <HeaderStyled>
      <h1>
        <span>Code</span>lândia
      </h1>
      <SearchBar />
    </HeaderStyled>
  );
};
