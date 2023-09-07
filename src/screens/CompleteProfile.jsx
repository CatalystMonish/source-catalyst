import TitleBold from "../components/TitleBold";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { UserAuth } from "../context/AuthContext";
import TextareaAutosize from "react-textarea-autosize";

function CompleteProfile() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState("");

  const { googleSignIn, user, logOut, uploadFileToStorage } = UserAuth();

  const { getRootProps, getInputProps, open } = useDropzone({
    accept: "application/pdf, application/msword, image/jpeg",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFile(acceptedFiles[0]);
    },
  });

  const fireUpload = async () => {
    if (file && !uploading) {
      setUploading(true);
      try {
        await uploadFileToStorage(file);
      } catch (error) {
        alert("An error occurred while uploading the file");
      } finally {
        setUploading(false);
      }
    }
  };

   const removeSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const addSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  return (
    <div>
      <div className="fixed top-0 z-10 flex h-[4rem] w-full flex-row items-center bg-white font-lexend text-heading font-heading shadow-md">
        <p className="ml-m-10 font-lexend text-heading font-heading">
          Complete your Profile
        </p>
      </div>
      <div className="mx-m-15 min-h-screen py-[4rem]">
        <TitleBold text="CHOOSE A USERNAME" />
       <input
          maxLength="10"
          placeholder="Enter a username"
          type="text"
          //   value={postTitle}
          //   onChange={(e) => setPostTitle(e.target.value)}
          className=" flex w-full rounded-lg bg-white px-s-15  py-s-17 font-lexend text-label  "
        ></input>
        
        <TitleBold text="BIO" />
         <TextareaAutosize
          minRows={2}
          maxRows={10}
          maxLength="200"
          placeholder="Enter bio here"
          type="text"
          //   value={postTitle}
          //   onChange={(e) => setPostTitle(e.target.value)}
          className=" flex w-full rounded-lg bg-white px-s-15  py-s-17 font-lexend text-label  "
        />
        
        <TitleBold text="SKILLS" />
        <input
          maxLength="50"
          placeholder="Enter skills here and press Enter"
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addSkill();
              e.preventDefault(); // Prevent form submission on Enter key press
            }
          }}
          className="flex w-full rounded-lg bg-white px-s-15 py-s-17 font-lexend text-label"
        />
        <div className="mt-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-blue-200 rounded-md p-2 inline-flex items-center mr-2"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="ml-2 p-1 rounded-full bg-red-500 text-white hover:bg-red-600"
              >
                X
              </button>
            </div>
          ))}
        </div>
        
        <TitleBold text="RESUME" />
        <div
          {...getRootProps()}
          className={`flex h-[6rem] w-full items-center justify-center rounded-lg bg-white ${
            file
              ? "outline-2 outline-green-600"
              : "outline-dashed outline-2 outline-primary"
          }`}
        >
          <input {...getInputProps()} />
          <p
            className="text-center font-lexend text-label font-label text-text-light"
            onClick={open}
          >
            {file ? file.name : "Select a File <br /> (pdf, word, jpg)"}
          </p>
        </div>
        
        <TitleBold text="WORK" />
        <div className="w-full h-auto bg-white rounded-lg flex flex-col px-2">
          <p className="font-bold">Seva Fest</p>
          <p className="text-lightgray">It was a project about saving lives and doing shit, like idk man</p>
          <a href="https://github.com/CatalystMonish/source-catalyst" className="text-blue-500">https://github.com/CatalystMonish/source-catalyst</a>

        </div>
        <button onClick={fireUpload} className="text-center flex w-full h-12 items-center justify-center bg-green rounded-full font-bold px-s-15 py-s-17 text-white mt-3">
          {uploading ? "Uploading..." : "Save Information"}
        </button>
      </div>
    </div>
  );
}

export default CompleteProfile;
