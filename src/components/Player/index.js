import React from "react";
import Slider from "rc-slider";

import {
  Container,
  Current,
  Volume,
  Progress,
  Controls,
  Time,
  ProgressSlider
} from "./styles";

import VolumeIcon from "../../assets/images/volume.svg";
import ShuffleIcon from "../../assets/images/shuffle.svg";
import BackwardIcon from "../../assets/images/backward.svg";
import PlayIcon from "../../assets/images/play.svg";
import PauseIcon from "../../assets/images/pause.svg";
import ForwardIcon from "../../assets/images/forward.svg";
import RepeatIcon from "../../assets/images/repeat.svg";

const Player = () => (
  <Container>
    <Current>
      <img
        src="https://upload.wikimedia.org/wikipedia/pt/b/b9/Linkin_Park_-_Numb_CD_cover.jpg"
        alt="cover"
      />
      <div>
        <span>Papercut</span>
        <small>Linkin Park</small>
      </div>
    </Current>

    <Progress>
      <Controls>
        <button>
          <img src={ShuffleIcon} alt="shuffle"></img>
        </button>
        <button>
          <img src={BackwardIcon} alt="backward"></img>
        </button>
        <button>
          <img src={PlayIcon} alt="play"></img>
        </button>
        <button>
          <img src={PauseIcon} alt="pause"></img>
        </button>
        <button>
          <img src={ForwardIcon} alt="forward"></img>
        </button>
        <button>
          <img src={RepeatIcon} alt="repeat"></img>
        </button>
      </Controls>

      <Time>
        <span>1:39</span>
        <ProgressSlider>
          <Slider
            railStyle={{ background: "#404040", borderRadius: 10 }}
            trackStyle={{ background: "#1ed760" }}
            handleStyle={{ border: 0 }}
          />
        </ProgressSlider>
        <span>3:04</span>
      </Time>
    </Progress>
    <Volume>
      <img src={VolumeIcon} alt="volume" />
      <Slider
        railStyle={{ background: "#404040", borderRadius: 10 }}
        trackStyle={{ background: "#fff" }}
        handleStyle={{ display: "none" }}
        value={100}
      />
    </Volume>
  </Container>
);

export default Player;
