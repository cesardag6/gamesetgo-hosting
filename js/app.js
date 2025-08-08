
const db = firebase.database();
db.ref("score").on("value", (snapshot) => {
    const data = snapshot.val();
    if (!data) return;
    document.getElementById("team1-name").innerText = data.team1.name;
    document.getElementById("team2-name").innerText = data.team2.name;
    document.getElementById("team1-sets").innerText = data.team1.sets;
    document.getElementById("team1-games").innerText = data.team1.games;
    document.getElementById("team1-points").innerText = data.team1.points;
    document.getElementById("team2-sets").innerText = data.team2.sets;
    document.getElementById("team2-games").innerText = data.team2.games;
    document.getElementById("team2-points").innerText = data.team2.points;
});
