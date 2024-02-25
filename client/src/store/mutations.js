export function setToken(state, token) {
    state.token = token;
    token ? (state.isUserLoggedIn = true) : (state.isUserLoggedIn = false);
}
export function setUser(state, user) {
    state.user = user;
}
