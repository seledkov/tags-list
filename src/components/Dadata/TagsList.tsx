import React, { useEffect, useState } from 'react';
import TagItem from './TagItem';
import Dadata from './Dadata';
import './TagsList.css';

const TagsList = (props: any) => {
  const inputTag = (
    <Dadata onAddTag={props.onAddTag} onKeyDown={keyHandler} id='input' />
  );
  const tagItemsList = props.tagsList.map((item: string, index: number) => {
    return (
      <TagItem
        address={item}
        key={Math.random()}
        id={index}
        onDeleteTag={props.onDeleteTag}
      />
    );
  });
  // const inputTag = <input type='text' onKeyDown={keyHandler} />;
  const testArr = [
    <div>1</div>,
    <div>2</div>,
    <div>3</div>,

    // <button onCLick={setIndex(index+1)}>meme</button>,
    // <input type='text' onKeyDown={keyHandler} />,
  ];
  const [jsxArr, setJsxArr] = useState<{}[]>(tagItemsList);
  const [index, setIndex] = useState<number>(tagItemsList.length);
  const [renderArray, setRenderArray] = useState<{}[]>();
  function keyHandler(e: any) {
    if (e.key === 'ArrowLeft') {
      setIndex((index) => {
        if (index > 0) {
          console.log('key handler <-- ', index);
          return index - 1;
        }
        console.log('left fail');
        return index;
      });
    } else if (e.key === 'ArrowRight') {
      setIndex((index) => {
        if (index < jsxArr.length) {
          console.log('key handler --> ', index);
          return index + 1;
        }
        console.log('right fail');
        return index;
      });
    }
  }
  useEffect(() => {
    const mutableArr = [...jsxArr];
    mutableArr.splice(index, 0, inputTag);
    setRenderArray(mutableArr);
  }, [index, jsxArr]);

  // splice(index - 1, 1, mutableArr[index]
  console.log('component ', index);
  return (
    <div className='tag-list'>
      {/* {props.tagsList.length > 0 ? tagItemsList : null} */}
      <div>
        ---------- Press key right or left for change input position ----------
      </div>
      {renderArray}
      {/* {jsxArr} */}
      {/* <Dadata onAddTag={props.onAddTag} id='input' /> */}
    </div>
  );
};

export default TagsList;
