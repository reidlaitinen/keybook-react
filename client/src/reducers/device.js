const device = (state = {}, action) => {
  switch (action.type) {
    case 'GET_DEVICE':
      return action.device;
    case 'UPDATE_DEVICE':
      return state.map(device => {
        if (device.id === action.device.id)
          return action.device
        return device;
      })
    case 'DELETE_DEVICE':
      return state.filter(device => device.id !== action.device.id)
    default:
      return state;
  }
}

export default device;