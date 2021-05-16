import React, { useState } from 'react';
import { AddressSuggestions } from 'react-dadata';
// import 'react-dadata/dist/react-dadata.css';
import TagItem from './TagItem';

const Dadata = (props: any) => {
  const [value, setValue] = useState();

  const cbOnChange = (item: any) => {
    props.onAddTag(item);
  };

  return (
    <AddressSuggestions
      token='e8aec955b013bf0a52d9afae51e8d19ff6a5750f'
      value={value}
      onChange={cbOnChange}
      inputProps={{
        onKeyDown: props.onKeyDown,
      }}
    />
  );
};

export default Dadata;
