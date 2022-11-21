import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {updateTuitThunk, createTuitThunk, deleteTuitThunk, findTuitsThunk} from "../../services/tuits-thunks";         // import the thunks

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "NASA.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
}

const initialState = {              // initial state has
    tuits: [],                      // no tuits
    loading: false                  // loading flag to display spinner
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState,                           // same as "initialState": initialState
    extraReducers: {                        // define asynchronous reducers
        [findTuitsThunk.pending]:           // if request is not yet fulfilled …
            (state) => {
                state.loading = true        // set loading true so UI can display spinner
                state.tuits = []            // empty tuits since we are still fetching them
            },
        [findTuitsThunk.fulfilled]:         // when we get response, request is fulfilled
            (state, { payload }) => {       // we extract/destruct payload from action object
                state.loading = false       // turn off loading flag since we have the data
                state.tuits = payload       // payload has tuits from server and update redux state
            },
        [findTuitsThunk.rejected]:          // if request times out, or responds with error
            (state) => {
                state.loading = false       // reset loading flag, maybe use another flag to report
            },                             // error
        [deleteTuitThunk.fulfilled] :       // handle successful response
            (state, { payload }) => {       // server response successful
                state.loading = false       // payload from action contains tuit ID to remove
                state.tuits = state.tuits   // turn off loading flag
                    .filter(t => t._id !== payload) // filter out tuit whose ID matches tuit to remove
            },                              // we're ignoring pending and rejected thunks
        [createTuitThunk.fulfilled]:        // when server responds
            (state, { payload }) => {       // payload contains new tuit
                state.loading = false       // clear loading flag
                state.tuits.push(payload)   // we're ignoring pending and rejected thunks
            },
        [updateTuitThunk.fulfilled]:        // when server update is done
            (state, { payload }) => {       // payload contains updated tuit
                state.loading = false       // clear loading flag
                const tuitNdx = state.tuits // find index of updated tuit in array
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {    // merge old tuit with updated tuit
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            }
    },
    reducers: {                             // we're not going to use the old reducers anymore
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                _id: (new Date()).getTime(),
            })
        },
    }
});

export const {deleteTuit, createTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;