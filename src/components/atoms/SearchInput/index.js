import React from 'react'
import { SearchElement, SearchWrapper } from './SearchInputElement'
import {SearchOutlined} from '@ant-design/icons'

const SearchInput = ({onClick, searchText, valInput}) => {
  return (
    <SearchWrapper>
      <SearchElement placeholder="Search" onChange={valInput} value={searchText} />
      <SearchOutlined
        onClick={onClick}
        style={{
          fontSize: 18,
          position: "absolute",
          right: 10,
          color: "#715944",
        }}
      />
    </SearchWrapper>
  );
}

export default SearchInput