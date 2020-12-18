import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';

function* getMakers() {
    try {
        const makers = yield axios.get('/api/maker');
        yield put({type: 'SET_MAKER', payload: makers.data});
    } catch (error) {
        console.log('GET all makers failed', error);
    }
}

function* filterMakers(action) {
    try {
        const makers = yield axios.get(`/api/maker/filter/?business=${action.payload.business_type}&delivery=${action.payload.delivery}&product=${action.payload.product_type}`);
        yield put({type: 'SET_MAKER', payload: makers.data});
    } catch (error) {
        console.log('maker filer GET failed', error);
    }
}

function* makerSaga() {
    yield takeEvery('GET_MAKERS', getMakers);
    yield takeEvery('FILTER_MAKERS', filterMakers);
}

export default makerSaga;