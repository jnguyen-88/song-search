import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
    // Helper Function
    renderList (){
        // the 'songs' prop is sent here from the Connect inside of Reducer
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            // .selectSong is an action
                            // clicking will invoke selectSong(song)
                            onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        // Helper function is called here
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

// Withdraws a State from the Store this Obj returned is the 'props'
const mapStateToProps = (state) => {
    // 'songs' is the prop...this is the prop that will be passed to the component
    return { songs: state.songs }
}

// Connect() always needs to be where State is needed
export default connect(
    mapStateToProps,
    { selectSong } // selectSong is an Action Creator it is being passed as a prop to the component
                   // when state of selectSong is changed, it auto. dispatches to the Store of its updates
  )(SongList);