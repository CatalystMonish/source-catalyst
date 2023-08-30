import TitleBold from "../components/TitleBold";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { UserAuth } from "../context/AuthContext";

function CompleteProfile() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

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

  // Your existing code

  const uploadFile = async () => {
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

  return (
    <div>
      <div className="fixed top-0 z-10 flex h-[4rem] w-full flex-row items-center bg-white font-lexend text-heading font-heading shadow-md">
        <p className="ml-m-10 font-lexend text-heading font-heading">
          Complete your Profile
        </p>
      </div>
      <div className="mx-m-15 min-h-screen py-[4rem]">
        <TitleBold text="BIO" />
        <input
          maxLength="50"
          placeholder="Enter title here"
          type="text"
          //   value={postTitle}
          //   onChange={(e) => setPostTitle(e.target.value)}
          className=" flex w-full rounded-lg bg-white px-s-15  py-s-17 font-lexend text-label  "
        ></input>

        <TitleBold text="SKILLS" />
        <input
          maxLength="50"
          placeholder="Enter skills here"
          type="text"
          //   value={postTitle}
          //   onChange={(e) => setPostTitle(e.target.value)}
          className=" flex w-full rounded-lg bg-white px-s-15  py-s-17 font-lexend text-label  "
        ></input>
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
        <button onClick={fireUpload}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>
    </div>
  );
}

export default CompleteProfile;
