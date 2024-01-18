import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import getGame from "../store";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const onclick = getGame((s) => s.setSearchText);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          onclick(ref.current.value);
          navigate('/');
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          variant={"filled"}
          placeholder={"Search"}
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
