import { configureStore } from '@reduxjs/toolkit';
import isMenuOpenSlice from '../store/isMenuOpen.slice';
import flickerSlice from '../store/flicker.slice';
import snakeSlice from '../store/snake.slice';
import modalSlice from '../store/modal.slice';
import karakterSlice from '../store/karakter.slice';

export const makeStore = () => {
  return configureStore({
    reducer: {isMenuOpen: isMenuOpenSlice, flickerIsOn: flickerSlice, snakeGame: snakeSlice, modal: modalSlice, shadowrunKarakter: karakterSlice}
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];