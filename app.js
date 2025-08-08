
const db = firebase.database();
function updateScore(team, field, delta) {
    const ref = db.ref("score/" + team + "/" + field);
    ref.transaction(current => (current || 0) + delta);
}
