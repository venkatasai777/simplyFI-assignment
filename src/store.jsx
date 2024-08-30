import { createStoreHook } from "react-redux";
import { createStore } from "redux";


const initialStore = {
    all: [
        {
            id: 1,
            name: 'sai'
        }
    ]
}

const reducer = (state=initialStore, action) => {
    switch(action.type) {
        case 'create' :
            const newState = {
                all: [
                    ...state.all
                ]
            }
            return newState
    }
}

const store = createStore(reducer)

export default store