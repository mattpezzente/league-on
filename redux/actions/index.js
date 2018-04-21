import playerData from '../../json/players.json'

export const LOAD_PLAYERS = 'LOAD_PLAYERS'
export const LOAD_PLAYER = 'LOAD_PLAYER'
export const SHOW_FORM_MODAL = 'SHOW_FORM_MODAL'

export function loadPlayers() {
  return {type: LOAD_PLAYERS, payload: playerData.players }
}

export function loadPlayer(id) {
  return {type: LOAD_PLAYER, payload: playerData.players[id]}
}

export function showRecruitModal(visible) {
  return {type: SHOW_FORM_MODAL, payload: visible ? false : true}
}