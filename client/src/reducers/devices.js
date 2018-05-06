const devices = (state = [], action) => {
  switch (action.type) {
    case 'GET_DEVICES':
      return action.devices;
    case 'ADD_DEVICE':
      return [...state, action.device]
    case 'UPDATE_DEVICE':
      return state.map(device => {
        if (device.id === action.device.id)
          return action.device
        return device;
      })
    case 'DELETE_DEVICE':
      return state.filter(device => device.id !== action.device.id)
    default:
      console.log('DEFAULT CASE')
      return state;
  }
}

export default devices;
