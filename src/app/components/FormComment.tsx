'use client'
import React, { ChangeEvent, useState } from "react";

const FormComment = () => {
  const [comment, setComment] = useState<String>("");

  const handleCommentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }
  
  const handleCommentComment = () => {
    console.log('Click')
  }
  return (
    <div>
      <div className="mt-4">
        <label
          htmlFor="comment"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Add Comment
        </label>
        <input
        value={comment}
        onChange={handleCommentChange}
          type="text"
          className="w-full py-2 px-3 border border-gray-300 rounded-md focus:outline-nones"
          name="comment"
        />
        <button onClick={handleCommentComment} className="text-white font-bold bg-black mt-3 px-6 py-3 rounded-full hover:bg-[#5f5f5f]">
          Submit Comment
        </button>
      </div>
    </div>
  );
};

export default FormComment;
