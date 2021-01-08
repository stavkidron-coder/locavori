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
function* getMakerCard(action) {
    try {
        const makerCard = yield axios.get(`/api/makerCard/${action.payload.id}`);
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

function* putMakerRegistration(action) {
    try {
        yield axios.put(`/api/maker`, action.payload);
    } catch (error) {
        console.log('error in maker registration PUT', error);
    }
}

function* makerSaga() {
    yield takeEvery('GET_MAKERS', getMakers);
    yield takeEvery('FILTER_MAKERS', filterMakers);
    yield takeEvery('GET_MAKER_CARD', getMakerCard);
    yield takeEvery('PUT_MAKER_INFO', putMakerRegistration);
}

export default makerSaga;