import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* addFavorite(action) {
    console.log('updateFavorite action.payload:', action.payload);
    
    try {
        yield axios.post(`/api/favorites/${action.payload}`);
    } catch (error) {
        console.log('Update favorite failed', error);
    }
}

function* getFavorites() {
    try {
        const favorites = yield axios.get(`/api/favorites`);
        yield put({type: 'SET_FAVORITES', payload: favorites.data});
    } catch (error) {
        console.log('Update favorite failed', error);
    }
}

function* favoritesSaga() {
    yield takeEvery('POST_FAVORITE', addFavorite);
    yield takeEvery('GET_FAVORITES', getFavorites);
}

export default favoritesSaga;