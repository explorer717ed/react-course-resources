import { configureStore } from '@reduxjs/toolkit'
import todos from "./slices/todo";
import { loggerMiddleware } from "./middleware";
import { combineReducers } from "redux";
import { todoApiService } from "./services/todoApi";

const reducers = combineReducers({
  todos,
  [todoApiService.reducerPath]: todoApiService.reducer
})

const store = configureStore({
  reducer: reducers,
  middleware: (getCurrentMiddlewares) => {
    return getCurrentMiddlewares()
      // .concat(loggerMiddleware)
      .concat(todoApiService.middleware)
  }
})

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof reducers>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export default store