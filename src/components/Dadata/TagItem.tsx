import React from 'react';

const TagItem = (props: any) => {
  const onClickDeleteTag = () => {
    props.onDeleteTag(props.id);
  };
  const onClickSaveTagValue = () => {};
  return (
    <span className='tag-item'>
      <span onClick={onClickSaveTagValue}>{props.address}</span>
      <span
        className='tag-item__x-delete'
        title='delete address'
        onClick={onClickDeleteTag}>
        x
      </span>
    </span>
  );
};

export default TagItem;
