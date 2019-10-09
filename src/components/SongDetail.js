import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ( { clickedSong } ) => {
    if(!clickedSong) {
        return <div>Select a song</div>
    }

    return(
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {clickedSong.title}<br />
                Duration: {clickedSong.duration}
            </p>
        </div>
    )
};

// Withdraws a State from the Store this Obj returned is the 'props'
const mapStateToProps = (state) => {
    return { clickedSong: state.selectedSong }
}

// Connect() always needs to be where State is needed
export default connect(mapStateToProps)(SongDetail);