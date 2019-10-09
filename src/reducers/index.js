import { combineReducers } from 'redux';

// Reducers are functions that take in an action and decide how to render 
// existing data. Do NOT mutate the orignal data
const songsReducer = () => {
    return [
      { title: 'No Scrubs', duration: '4:05' },
      { title: 'Macarena', duration: '2:30' },
      { title: 'All Star', duration: '3:15' },
      { title: 'I Want it That Way', duration: '1:45' }
    ];
  };

  // *** the 1st argument of a reducer needs a Default value or its value will be Undefined ***
const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === "SONG_SELECTED"){
        // how to change the data. DO NOT mutate orig. data!
        return action.payload
    }
    // if there are no changes then just return it
    return selectedSong
};

// the data/state to be passed to the rest of the app
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});

