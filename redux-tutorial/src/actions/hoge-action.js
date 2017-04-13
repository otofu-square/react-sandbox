import { createAction } from 'redux-actions'

export const CLICK_ACTION_CI = 'CLICK_ACTION_CI'
export const CLICK_ACTION_T = 'CLICK_ACTION_T'
export const CLICK_ACTION_S = 'CLICK_ACTION_S'
export const CLICK_ACTION_CR = 'CLICK_ACTION_CR'

export const clickActionCI = createAction(CLICK_ACTION_CI)
export const clickActionT = createAction(CLICK_ACTION_T)
export const clickActionS = createAction(CLICK_ACTION_S)
export const clickActionCR = createAction(CLICK_ACTION_CR)
