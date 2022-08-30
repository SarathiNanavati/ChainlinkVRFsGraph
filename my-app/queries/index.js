export function FETCH_CREATED_GAME() {
   return `query {
        games(orderBy:id, orderDirection:desc,first:1){
            id
            maxPlayers
            entryFee
            winner
            players
        }
    }`;
}
export function FETCH_ALL_GAME() {
   return `query {
        games(orderBy:id, orderDirection:desc){
            id
            maxPlayers
            entryFee
            winner
            players
        }
    }`;
}
