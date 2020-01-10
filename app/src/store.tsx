import { createStore } from 'redux';
import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('increment');

export const counterReducer = createReducer(
    10, {
        [increment.type]: (state, _) => state + 1
    });

export const store = createStore(counterReducer);