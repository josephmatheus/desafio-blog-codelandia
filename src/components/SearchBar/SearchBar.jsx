import { IoSearch } from "react-icons/io5";
import { Form } from "./styled";
import { IconContext } from "react-icons";
import { useState } from "react";

export const SearchBar = () => {
    const [ selected, setSelected ] = useState(false);
    const [ search, setSearch ] = useState();

    const alternateInput = () => {
        setSelected(!selected)
    }

    const handleInputChange = (e) => {
      setSearch(e.target.value.toLowerCase())
    }

  return (
    <IconContext.Provider value={{ className: "react-icons" }}>
      <Form $isSelected={selected} >
        <IoSearch color="#e07b67" />
        <input type="search" placeholder="Pesquisar no blog" onFocus={alternateInput} onBlur={alternateInput} onChange={handleInputChange} />
      </Form>
    </IconContext.Provider>
  );
};
