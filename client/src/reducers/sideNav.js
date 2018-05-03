const sideNav = (state = '', action) => {
  switch(action.type) {
    case 'SET_LINK':
      return action
    default:
      return state
  }
}

export default sideNav;