import React from 'react';
import { addDoc , collection } from 'firebase/firestore';
import {db , auth} from '../firebase/config'
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
  const postRef = collection(db , "posts");
  const navigate = useNavigate()


  async function handleCreatePost(event) {
    event.preventDefault(); // Fixed typo here
    const document = {
      title: event.target.title.value,
      description: event.target.description.value,
      author : {
        name : auth.currentUser.displayName,
        id:auth.currentUser.uid
      }
    };
    await addDoc(postRef, document); 
    navigate('/')
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8 max-w-md sm:max-w-lg lg:max-w-2xl mx-auto my-8 border border-gray-200">
      {/* Header */}
      <div className="mb-6 text-center sm:text-left">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800">Add New Post</h1>
      </div>

      {/* Form */}
      <form className="space-y-4" onSubmit={handleCreatePost}>
        {/* Title Input */}
        <div>
          <label
            className="block text-sm sm:text-base font-medium text-gray-600 mb-1"
            htmlFor="title"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            maxLength="50"
            placeholder="Enter post title"
            className="w-full px-3 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>

        {/* Description Textarea */}
        <div>
          <label
            className="block text-sm sm:text-base font-medium text-gray-600 mb-1"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            rows="6"
            placeholder="Enter post description"
            className="w-full px-3 py-2 sm:py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 sm:py-3 rounded-md hover:bg-blue-600 transition"
        >
          Create
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
