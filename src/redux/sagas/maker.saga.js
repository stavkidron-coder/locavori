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
function* getMakerCard() {
    try {
        const makerCard = yield axios.get('/api/makerCard');
        yield put({type: 'SET_MAKER_CARD', payload: makerCard.data});
    } catch (error) {
        console.log('GET MakerCard failed', error);
    }
}

function* filterMakers(action) {
    try {
        const makers = yield axios.get(`/api/maker/filter/?business=${action.payload.business_type}&delivery=${action.payload.delivery}&product=${action.payload.product_type}`);
        yield put({type: 'SET_FILTERED_MAKER', payload: makers.data});
    } catch (error) {
        console.log('maker filter GET failed', error);
    }
}

function* makerSaga() {
    yield takeEvery('GET_MAKERS', getMakers);
    yield takeEvery('FILTER_MAKERS', filterMakers);
    yield takeEvery('GET_MAKER_CARD', getMakerCard)
}

export default makerSaga;