import { combineReducers, createStore,
  applyMiddleware, compose, Action } from 'redux'
import {general} from './general'
import {profile} from './profile'
import thunkMiddleware, { ThunkAction } from 'redux-thunk'
import { initialization } from './initialization'


const RootReducer = combineReducers({
  general: general,
  profile: profile,
  init: initialization,
})

// return type store
export type RootReducerType = ReturnType<typeof RootReducer>

// определяем объект типа для BaseActionsTypes с
// указанием ограничений, тип должен быть обектом и возвращять функцию
export type ActionTypes<T> =
T extends {[key: string]:(...args: any[]) => infer U} ? U : never

// Базовый тип для Thank Action Creator A наследует
// базой Асtion из Redux, R по умолчанию возвращает Promis
export type BaseActionType<A extends Action, R = Promise<void>>
= ThunkAction<R, RootReducerType, unknown, A>

// создание объекта store и просежуточного слоя который
// умеет разделять функции и объекты
// let store = createStore(RootReducer, applyMiddleware(thunkMiddleware) );

// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(RootReducer, composeEnhancers( compose(
    applyMiddleware(thunkMiddleware)
)))
// @ts-ignore
window.store = store
export default store
