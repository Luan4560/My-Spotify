import React, { Component } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistsActions } from "../../store/ducks/playlists";

import { Container, NewPlaylist, Nav } from "./styles";

import AddPlaylist from "../../assets/images/add_playlist.svg";

import Loading from "../../components/Loading";

class Sidebar extends Component {
  static propTypes = {
    getPlaylistRequest: PropTypes.func.isRequired,
    playlists: PropTypes.shape({
      data: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number,
          title: PropTypes.string
        })
      ),
      loading: PropTypes.bool
    }).isRequired
  };

  componentDidMount() {
    this.props.getPlaylistRequest();
  }

  render() {
    return (
      <Container>
        <div>
          <Nav main>
            <ul>
              <li>
                <Link to="/">Navegar</Link>
              </li>
              <li>
                <a href="">Rádio</a>
              </li>
            </ul>
          </Nav>

          <Nav>
            <li>
              <span>SUA BIBLIOTECA</span>
            </li>
            <li>
              <a href="">Seu Daily Mix</a>
            </li>
            <li>
              <a href="">Tocados recentemente</a>
            </li>
            <li>
              <a href="">Músicas</a>
            </li>
            <li>
              <a href="">Albúms</a>
            </li>
            <li>
              <a href="">Artistas</a>
            </li>
            <li>
              <a href="">Estações</a>
            </li>
            <li>
              <a href="">Arquivos Locais</a>
            </li>
            <li>
              <a href="">Videos</a>
            </li>
            <li>
              <a href="">PodCast</a>
            </li>
          </Nav>

          <Nav>
            <li>
              <span>PLAYLIST</span>
              {this.props.playlist.loading && <Loading />}
            </li>
            {this.props.playlist.data.map(playlist => (
              <li key={playlist.id}>
                <Link to={`playlists/${playlist.id}`}>{playlist.title}</Link>
              </li>
            ))}
          </Nav>
        </div>
        <NewPlaylist>
          <img src={AddPlaylist} alt="Adicionar Playlist" />
          Nova Playlist
        </NewPlaylist>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  playlist: state.playlists
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(PlaylistsActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
