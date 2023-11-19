"use client";

import { FormData } from "../types/blog";
import { ChangeEvent, FormEvent, useState } from "react";
import ReactTextareaAutosize from "react-textarea-autosize"

const FormNewPost = () => {
    const [formData, setFormData] = useState<FormData>({
        title: '',
        content: '',
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        e.preventDefault();
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData)
    }

    
  return (
   <form className="max-w-md mx-auto p-4" onSubmit={handleSubmit}>
    <div className="mt-4 mb-4">
    <input 
    type="text" 
    className="w-full py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
    placeholder="Enter the title"
    name="title"
    value={formData.title} 
    onChange={handleChange}
    />
    </div>
    <div className="mt-4 mb-4">
    <ReactTextareaAutosize 
    minRows={5} 
    name="content"
    className="w-full py-3 px-3 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
    placeholder="Enter the content"
    value={formData.content}
    onChange={handleChange}
    />
    </div>
    <button
    type="submit"
    className="text-white bg-black hover:bg-[#5f5f5f] rounded-full font-bold py-2 px-4"
    >Submit</button>
   </form>
  )
}

export default FormNewPost
