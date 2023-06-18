'use client';
import { useRef } from 'react';
import Test from './Test';

export default function EditableComments(props: { comments: string[] }) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = () => {
    // 限制评论内容
    if (props.comments.length < 10) {
      alert(`您提交的评论内容为:${inputRef.current?.value}`);
    }
  };

  return (
    <>
      <Test />
      <input ref={inputRef} />
      <button onClick={onSubmit}>提交评论</button>
    </>
  );
}
