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
      <input ref={inputRef} type="text" onKeyDown={handleKeyDown} />
      {tags && tags.map((tag) => <span>{tag}</span>)}
    </>
  )
}

export default TagInput;