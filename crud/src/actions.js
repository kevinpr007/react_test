export const SET_GAMES = 'SET_GAMES'
export const ADD_GAME = 'ADD_GAME'
export const GAME_FETCHED = 'GAME_FETCHED'

export function setGames(games) {
    return {
        type: SET_GAMES,
        games
    }
}

function handleResponse(response) {

    if (response.ok) {
        //TODO: Always be carefull with this
        return response.json()
    }
    else {
        let error = new Error(response.statusText)
        error.response = response
        throw error
    }
}

export function gameFetched(game) {
    return {
        type: GAME_FETCHED,
        game
    }
}

export function fetchGame(id) {
    return dispatch => {
        fetch(`/api/games/${id}`)
            .then(res => res.json())
            .then(data => dispatch(gameFetched(data.game)))
    }
}

export function addGame(game) {
    return {
        type: ADD_GAME,
        game
    }
}

export function saveGame(data) {
    return dispatch => {

        return fetch('/api/games', {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(handleResponse)
            .then(data => dispatch(addGame(data.game)))
    }
}

export function fetchGames() {
    return dispatch => {
        fetch('/api/games')
            .then(res => res.json())
            .then(data => dispatch(setGames(data.games)))
    }
}