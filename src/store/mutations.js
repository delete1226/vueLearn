export default {
  setUserName: function (state, value) {
    state.userName = value
    sessionStorage.setItem('userName', state.userName)
  }
}
