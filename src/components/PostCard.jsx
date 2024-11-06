import React from "react";
import { doc , deleteDoc } from "firebase/firestore";
import { MdDelete } from "react-icons/md";
import { auth, db } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const PostCard = ({ post }) => {
  const navigate = useNavigate();
  const {id , title, description, author } = post;
  const isAuth = JSON.parse(localStorage.getItem("isAuth")) ;

  async function handleDelete(){
    const document = doc(db , "posts" , id);
    await deleteDoc(document);
    navigate('/')
  }

  return (
    <div className="bg-white shadow-lg mx-4 rounded-lg p-6 max-w-7xl md:mx-auto my-4 border border-gray-200">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center text-gray-500">
        {/* Safely check if author exists */}
        <span className="font-medium">{author?.name || "Anonymous"}</span>

        {isAuth && (author.id === auth.currentUser.uid) && (
          <button
            onClick={handleDelete}
            aria-label="Delete Post"
            className="hover:text-red-500 transition flex items-center"
          >
            <MdDelete className="w-5 h-5 mr-1" />
            <span>Delete</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default PostCard;
