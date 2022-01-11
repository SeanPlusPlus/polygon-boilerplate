import React from 'react';
 
export default (state, action) => {
  switch(action.type) {
    case 'SET_ITEM':
      return {
        state: [action.payload, ...state]
    }
    default:
      return state;
   }
}