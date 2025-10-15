import { configureStore } from '@reduxjs/toolkit';
import flickerSlice from './flicker.slice';
import snakeSlice from './snake.slice';
import karakterSlice from '../../app/myprojects/shadowrun-in-hungary/store/karakter.slice';
import selectedSlice from './selected.slice';
import headerSlice from './header.slice';

export const makeStore = () => {
  return configureStore({
    reducer: {flickerIsOn: flickerSlice, snakeGame: snakeSlice, shadowrunKarakter: karakterSlice, selected: selectedSlice, selectedHeader: headerSlice}
  });
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];