"use client";

import useCommentStore from "../store/slice/comment-slice";
import { Delete } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

const CommentsCard = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const { comments, addComment, removeComment } = useCommentStore();

  const handleSubmit = () => {
    if (!name || !comment) {
      toast.error("Please fill all the fields");
      return;
    }
    if (name && comment) {
      addComment({ name, comment, id: Math.random() });
      toast.success("Comment added successfully");
      setName("");
      setComment("");
    } 
  };

  return (
    <>
      <section className="w-full h-full">
        <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-blue-600 mb-4">
          Comments
        </h2>
        <div className="">
          <div className="flex flex-col gap-4">
            <input
              className="mb-4 pl-10 pr-4 py-2 w-1/2 rounded-md bg-neutral-600/20"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="mb-4 pl-10 pr-4 py-2 w-1/2 rounded-md bg-neutral-600/20"
              type="text"
              placeholder="Comment here"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
            />
          </div>
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-blue-600 text-light rounded-md hover:scale-110 transition-all ease-in duration-300 hover:bg-blue-800"
          >
            Submit
          </button>
        </div>
      </section>
      <section className="grid gap-4 grid-cols-1 md:grid-cols-2 items-center justify-start ">
        {comments.map((comment:any) => (
          <div
            key={comment.id}
            className="flex flex-col items-center justify-center py-4 px-5 rounded-md overflow-hidden bg-neutral-600/20"
          >
            <div className="flex items-start justify-end w-full">
              <Delete  className="cursor-pointer text-sm" onClick={() => removeComment(comment.id)} size={20} color="red" />
            </div>
            <div className="flex flex-col gap-2 items-start w-full">
              <h2 className="text-lg uppercase">{comment.name}</h2>
              <p className="text-sm font-thin">{comment.comment}</p>
            </div>
          </div>
        ))}
      </section>
      
    </>
  );
};

export default CommentsCard;
