import { createStore } from "vuex";
import state from "./state";
import * as actions from "./actions";
import * as mutations from "./mutations";

import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state,
    actions,
    mutations,
    plugins: [createPersistedState()],
});

export default store;
