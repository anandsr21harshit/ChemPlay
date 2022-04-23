import React from "react";
import SideBar from "../../components/SideBar/SideBar";
import ReactPlayer from "react-player";
import "./Stream.css";
import { useParams } from "react-router-dom";
import { useData } from "../../context/data-context";

function Stream() {
  const { videoID } = useParams();
  const {state} = useData();
  const {videos} = state;

  function findVideo(id){
      const currentVideo = videos.find(video => video._id === id)
      return currentVideo;
  }

  const playingVideo = findVideo(videoID);

  return (
    <main className="stream-container">
      <SideBar />
      <section className="stream-content">
        <div className="player-container">
          <div className="player-card">
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videoID}`}
              controls={true}
              width="100%"
            ></ReactPlayer>
            <div className="video-description">
            {/* using option chaining so that it will not throw error while re-rendering until data is fetched */}
                <h3>{playingVideo?.title}</h3> 
                <div className="video-options">
                    <span><i className="bi bi-hand-thumbs-up-fill"></i>Like</span>
                    <span><i className="bi bi-music-note-list"></i>Add to Playlist</span>
                </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export {Stream};