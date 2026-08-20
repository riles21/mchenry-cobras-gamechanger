/*
  McHenry Cobras team configuration

  To add a team:
    1. Copy one team object.
    2. Give it a unique key.
    3. Set active: true.
    4. Enter the GameChanger Team ID.
    5. Enter the GameChanger Schedule Widget ID when available.
    6. Enter the head coach and up to 3 assistant coaches.
    7. Enter a Facebook URL, or leave it blank.

  To temporarily remove a team from use:
    Set active: false.
*/

const COBRAS_TEAMS = {

  riley17u: {
    active: false,
    name: "17U Riley",
    season: "2026 Season",
    gameChangerTeamId: "pMdj4HZlj6tS",
    gameChangerWidgetId: "d658d31b-468e-496a-939f-11fe8966b370",
    headCoach: "Bryan Riley",
    assistantCoaches: [
      "Bob Tomlinson",
      "Dan Dunn"
    ],
    facebookUrl: "https://www.facebook.com/groups/739661985372413"
  }

};
