// Action Creators are JS functions that return an Object ('action')
// AC can change State in the App
export const selectSong = (song) => {
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

