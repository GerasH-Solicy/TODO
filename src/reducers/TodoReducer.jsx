export default function TodoReducer(state, action) {
    if (action.type === 'add') {
        if (action.payload.text === '') {
            return state;
        }
        return [
            ...state,
            {
                id: state.length === 0 ? 1 : state[state.length - 1].id + 1,
                text: action.payload.text,
                status: false
            }
        ]
    } else if (action.type === 'delete') {
        return state.filter((el) => el.id !== action.payload.id)
    }
    else if (action.type === 'setStatus') {
        return state.map((el) => {
            if (el.id === action.payload.id) {
                el.status = !el.status
                return el;
            }
            return el;
        })
    } else if (action.type === 'clearFinished') {
        let tmp = []
        for (let i = 0; i < state.length; i++) {
            if (state[i].status) {
                continue
            }
            tmp.push(state[i])
        }
        return tmp;
    }
}
