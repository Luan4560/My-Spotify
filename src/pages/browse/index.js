import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/b/b9/Linkin_Park_-_Numb_CD_cover.jpg"
          alt="playlist"
        />
        <strong>Rock do bons</strong>
        <p>
          Relaxe enquanto você programe enquanto você ouve as melhores do rock
        </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/b/b9/Linkin_Park_-_Numb_CD_cover.jpg"
          alt="playlist"
        />
        <strong>Rock do bons</strong>
        <p>
          Relaxe enquanto você programe enquanto você ouve as melhores do rock
        </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/b/b9/Linkin_Park_-_Numb_CD_cover.jpg"
          alt="playlist"
        />
        <strong>Rock do bons</strong>
        <p>
          Relaxe enquanto você programe enquanto você ouve as melhores do rock
        </p>
      </Playlist>
      <Playlist to="/playlists/1">
        <img
          src="https://upload.wikimedia.org/wikipedia/pt/b/b9/Linkin_Park_-_Numb_CD_cover.jpg"
          alt="playlist"
        />
        <strong>Rock do bons</strong>
        <p>
          Relaxe enquanto você programe enquanto você ouve as melhores do rock
        </p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
