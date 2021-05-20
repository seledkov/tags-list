import React, { useState } from 'react';
import './App.css';
import WithClass from './HOC/WithClassName';
import TagList from './components/Dadata/TagsList';

const App: React.FC = () => {
  const startArr = ['val1', 'val2'];
  const [tagsList, setTagsList] = useState<string[]>(startArr);

  const addTagHandler = (userInput: any) => {
    const newTag: string = userInput.value;
    setTagsList((prevState) => {
      return [...prevState, newTag];
    });
  };

  const deleteTagHandler = (index: number) => {
    const mutatedTagsList = [...tagsList];
    mutatedTagsList.splice(index, 1);
    setTagsList(mutatedTagsList);
  };
  return (
    <WithClass className='App'>
      <TagList tagsList={tagsList} onDeleteTag={deleteTagHandler} onAddTag={addTagHandler} />
    </WithClass>
  );
};

export default App;
