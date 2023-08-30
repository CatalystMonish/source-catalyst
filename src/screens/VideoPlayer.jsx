import React from "react";
import "vidstack/styles/base.css";

import { MediaOutlet, MediaPlayer } from "@vidstack/react";
import PageBar from "../components/PageBar";

function VideoPlayer() {
  return (
    <div>
      <PageBar title="Video Player" />
      <div className="h-screen pt-[4rem] ">
        <MediaPlayer
          title="Agent 327: Operation Barbershop"
          src="https://media-files.vidstack.io/1080p.mp4"
          poster="https://media-files.vidstack.io/poster.png"
          controls
        >
          {/* ^ remove `controls` attribute if you're designing a custom UI */}
          <MediaOutlet />
        </MediaPlayer>
        <div className="mx-m-15 mt-m-10 flex flex-col">
          <p className="font-lexend text-title font-title">
            Video Title for Python Projects
          </p>
          <p className="font-lexend text-label font-label text-text-light">
            In this video you will get more information about the secure
            password geenrator proejct
          </p>
        </div>
      </div>
    </div>
  );
}

export default VideoPlayer;
