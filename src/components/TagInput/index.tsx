import { ENTERKEY } from "@/utils/consts";
import { KeyboardEvent, useRef, useState } from "react";

const TagInput = () => {
  const inputRef = useRef(null);
  const [tags, setTags] = useState<string[]>([]);

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === ENTERKEY) {
      setTags([...tags, event.currentTarget.value]);
    }
  }

  return (
    <>
      <input type="text" ref={inputRef} className="tagify w-full leading-5 relative text-sm py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600" onKeyDown={handleKeyDown} />
      {tags && tags.map((tag, index) => <span key={index} className="bg-gray-500 p-1">{tag}</span>)}
    </>
  )
}

export default TagInput;