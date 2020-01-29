import { getCurrentUser } from '@/services/user';

export default {
    namespace: 'user',
    state: {
        currentUser: null
    },
    effects: {
        *getCurrentUser(action, { call, put }) {
            const response = yield call(getCurrentUser);
            if (response) { 
                yield put({
                    type: 'save',
                    payload: {
                        currentUser: response
                    }
                });
            } 
        },
    },
    reducers: {
        save(state, { payload }) { 
            return {
                ...state,
                ...payload
            }
        }
    }
};