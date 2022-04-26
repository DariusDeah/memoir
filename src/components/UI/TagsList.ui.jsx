/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';

function TagsList({ tags, selectTag, removeSelectedTag, selectedTags }) {
  const [currentTags, setCurrentTags] = useState('');
  // console.log({ selectedTags });
  // const myTags = [...selectedTags];
  useEffect(() => {
    setCurrentTags(selectedTags);
  }, [selectedTags]);

  return (
    <>
      {tags.map((tag) => (
        <>
          {currentTags.includes(tag.name) ? (
            <button
              className="border border-red-500 text-white bg-purple-500 uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide"
              type="button"
              onClick={() => removeSelectedTag(tag.name)}
            >
              {tag.name}
            </button>
          ) : (
            <button
              className="border text-red-500 hover:bg-red-500 hover:text-white border-current uppercase px-5 py-1.5 rounded-full text-[10px] tracking-wide"
              type="button"
              onClick={() => {
                // console.log(myTags);
                selectTag(tag.name);
              }}
            >
              {tag.name}
            </button>
          )}
        </>
      ))}
    </>
  );
}

export default TagsList;
