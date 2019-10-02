// Action Creators are JS functions that return an Object ('action')
export const selectSong = (song) => {

    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};

