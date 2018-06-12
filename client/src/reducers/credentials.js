const credentials = (state = [], action ) => {
  switch (action.type) {
    case 'GET_DEVICE_CREDS':
      return action.credentials
    default:
      return state
  }
}

export default credentials;