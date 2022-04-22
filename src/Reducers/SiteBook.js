
import React from 'react'
const initialState = [
    {
        from:'',
        to: ''
    }
];
const SiteBook = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_INPUT':
            let items = action.payload;
            return items
            default:
                return state
    }
}
export default SiteBook