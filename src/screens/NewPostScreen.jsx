import TitleBold from "../components/TitleBold";
import PageBar from "../components/PageBar";

import React from "react";
import CheckListItem from "../components/CheckListItem";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { doc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
function NewPostScreen() {
  const navigate = useNavigate();
  const { user } = UserAuth();

  const [checklist, setChecklist] = useState([false, false, false]);
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const isTitleValid = postTitle.length <= 50;
  const isContentValid = postContent.length <= 1000;

  const handleCheckedChange = (index, isChecked) => {
    const newChecklist = [...checklist];
    newChecklist[index] = isChecked;
    setChecklist(newChecklist);
  };

  const isButtonDisabled =
    checklist.some((isChecked) => !isChecked) ||
    !postTitle ||
    !postContent ||
    !isTitleValid ||
    !isContentValid;

  const handleUploadPost = async () => {
    const postAuthor = user.uid; // Fetch the current user's UID

    try {
      // Generate a new document inside 'posts' collection and get the reference
      const postRef = await addDoc(collection(db, "posts"), {
        postTitle,
        postContent,
        postAuthor,
      });

      console.log("Post uploaded with ID: ", postRef.id);
      navigate("/");
    } catch (error) {
      console.log("Error uploading post:", error);
    }
  };

  return (
    <div>
      <PageBar title="New Post" />
      <div className="h-screen pt-[4rem] ">
        <div className="mx-m-15 ">
          <div className="flex items-center justify-between text-small font-small text-text-light">
            <TitleBold text="POST TITLE" />
            <span>{postTitle.length}/50</span>
          </div>
          <input
            maxLength="50"
            placeholder="Enter title here"
            type="text"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            className=" flex w-full rounded-lg bg-white px-s-15  py-s-17 font-lexend text-label  "
          ></input>

          <div className="flex items-center justify-between text-small font-small text-text-light">
            <TitleBold text="POST CONTENT" />
            <span>{postContent.length}/1000</span>
          </div>
          <textarea
            maxLength="1000"
            placeholder="Write your content"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className=" flex w-full rounded-lg bg-white px-s-15  py-s-17 font-lexend text-label  "
          ></textarea>

          <TitleBold text="CHECKLIST" />
          <CheckListItem
            text="I am not posting copyrighted material."
            onCheckedChange={(isChecked) => handleCheckedChange(0, isChecked)}
          />
          <CheckListItem
            text="I am adhering to community guidelines."
            onCheckedChange={(isChecked) => handleCheckedChange(1, isChecked)}
          />
          <CheckListItem
            text="I have double-checked the accuracy of my content."
            onCheckedChange={(isChecked) => handleCheckedChange(2, isChecked)}
          />
          <p className="font-lexend text-content font-content text-text-light">
            You may report others, other can report you for non relevant or
            offensive posts.
          </p>

          <button
            disabled={isButtonDisabled}
            className={`mx-auto mt-s-20 flex w-full max-w-[500px] items-center justify-center  rounded-full px-s-20 py-s-17 font-lexend text-label font-label ${
              isButtonDisabled
                ? "bg-gray-400"
                : "w-full bg-green-700 text-center text-white"
            }`}
            onClick={handleUploadPost}
          >
            Upload Post
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewPostScreen;
