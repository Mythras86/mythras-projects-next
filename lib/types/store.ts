import { configureStore } from '@reduxjs/toolkit';
import isMenuOpenSlice from '../store/isMenuOpen.slice';
import flickerSlice from '../store/flicker.slice';
import snakeSlice from '../store/snake.slice';

export const makeStore = () => {
  return configureStore({
    reducer: {isMenuOpen: isMenuOpenSlice, flickerIsOn: flickerSlice, snake: snakeSlice}
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];