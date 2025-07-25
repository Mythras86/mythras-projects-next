import { configureStore } from '@reduxjs/toolkit';
import isMenuOpenSlice from './isMenuOpen.slice';
import flickerSlice from './flicker.slice';
import snakeSlice from './snake.slice';
import karakterSlice from '../../app/myprojects/shadowrun-in-hungary/store/karakter.slice';
import selectedSlice from './selected.slice';

export const makeStore = () => {
  return configureStore({
    reducer: {isMenuOpen: isMenuOpenSlice, flickerIsOn: flickerSlice, snakeGame: snakeSlice, shadowrunKarakter: karakterSlice, selected: selectedSlice}
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];