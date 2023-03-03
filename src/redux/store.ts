import {configureStore} from '@reduxjs/toolkit'
import {loginReducer} from "./login.redux";
import logger from 'redux-logger'


const store = configureStore({
    reducer: {
        login: loginReducer,
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store