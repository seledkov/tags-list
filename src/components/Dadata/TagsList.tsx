import React, { useEffect, useState } from 'react';
import TagItem from './TagItem';
import Dadata from './Dadata';
import './TagsList.css';

const TagsList = (props: any) => {
  const inputTag = <Dadata onAddTag={props.onAddTag} onKeyDown={keyHandler} id='input' />;

  const tagItemsList = props.tagsList.map((item: string, index: number) => {
    return (
      <TagItem address={item} key={Math.random()} id={index} onDeleteTag={props.onDeleteTag} />
    );
  });

  const [index, setIndex] = useState<number>(props.tagsList.length);
  const [renderArray, setRenderArray] = useState<{}[]>(tagItemsList);

  function keyHandler(e: any) {
    if (e.key === 'ArrowLeft' && index > 0) {
      setIndex((index) => index - 1);
    } else if (e.key === 'ArrowRight' && index < props.tagsList.length) {
      setIndex((index) => index + 1);
    }
  }
  useEffect(() => {
    const mutableArr = [...tagItemsList];
    mutableArr.splice(index, 0, inputTag);
    setRenderArray(mutableArr);
  }, [index, props.tagsList]);

  console.log('component ', index);

  return (
    <div className='tag-list'>
      {/* {tagItemsList} */}
      <div>---------- Press key right or left for change input position ----------</div>
      {renderArray}
    </div>
  );
};

export default TagsList;
