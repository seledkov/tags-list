import React, { useState } from 'react';
import './App.css';
import WithClass from './HOC/WithClassName';
import Dadata from './components/Dadata/Dadata';
import TagList from './components/Dadata/TagsList';

const startArr: string[] = ['spb', 'moskov'];

// ========== App ==============
const App: React.FC = (props: any) => {
  const [tagsList, setTagList] = useState(startArr);

  const addTagHandler = (tag: any) => {
    const newTag: string = tag.value;
    const mirrorTagsList: string[] = [...tagsList, newTag];
    setTagList(mirrorTagsList);
  };

  const deleteTagHandler = (index: number) => {
    const mutateTagsList = [...tagsList];
    mutateTagsList.splice(index, 1);
    setTagList(mutateTagsList);
  };
  let TagValue: string = '';
  const saveTagValueHandler = (value: string) => {
    TagValue = value;
  };
  return (
    <WithClass className='App'>
      <TagList
        tagsList={tagsList}
        onDeleteTag={deleteTagHandler}
        onSaveTagValue={saveTagValueHandler}
        onAddTag={addTagHandler}
      />
      {/* <Dadata onAddTag={addTagHandler} /> */}
    </WithClass>
  );
};

export default App;
