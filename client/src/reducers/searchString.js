const searchString = (state = '', action) => {
  switch(action.type) {
    case 'SET_SEARCHSTRING':
      return action.str
    default:
      return state
  }
}

export default searchString;