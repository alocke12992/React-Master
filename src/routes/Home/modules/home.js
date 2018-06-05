// Coppied from Counter example: 

// ------------------------------------
// Constants
// ------------------------------------
export const UPDATE_PORTS = 'UPDATE_PORTS';

// ------------------------------------
// Actions
// ------------------------------------
export function updatePorts(value = null) {
  return {
    type: UPDATE_PORTS,
    payload: value
  };
}

export const actions = {
  updatePorts,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [UPDATE_PORTS]: (state, action) => state = action.payload
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = [];
export default function counterReducer(state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}