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
          src="https://media-files.vidstack.io/720p.mp4"
          poster="https://media-files.vidstack.io/poster.png"
          controls
        >
          {/* ^ remove `controls` attribute if you're designing a custom UI */}
          <MediaOutlet />
        </MediaPlayer>
      </div>
    </div>
  );
}

export default VideoPlayer;
