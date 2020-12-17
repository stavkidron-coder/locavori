import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getMakers() {
    try {
        const makers = yield axios.get('/api/maker');
        yield put({type: 'SET_MAKER', payload: makers.data});
    } catch (error) {
        console.log('GET all makers failed', error);
    }
}

function* makerSaga() {
    yield takeEvery('GET_MAKERS', getMakers);
}

export default makerSaga;