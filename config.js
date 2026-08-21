/*
  McHenry Cobras Team Configuration

  This file is the single source of truth for Cobras teams.

  active:
    true  = current active Cobras team
    false = inactive/former team

  Active teams:
    - appear in the active team directory
    - count toward the overall Cobras organizational record

  Required:
    active
    name
    season
    gameChangerTeamId

  Coaching:
    headCoach
    assistantCoaches: up to 3 names

  Facebook:
    facebookUrl: leave "" until a team page is available.
*/

const COBRAS_TEAMS = {


  /* =========================
     8U
  ========================== */

  deubel8u: {
    active: true,

    name: "8U Deubel",

    season: "2027 Season",

    gameChangerTeamId: "NJRBPnj0Dhk6",

    headCoach: "Mike Deubel",

    assistantCoaches: [
      "Ryan Freund",
      "Chris Bigall",
      "JR Shaver"
    ],

    facebookUrl: ""
  },


  /* =========================
     9U
  ========================== */

  mcandrews9u: {
    active: true,

    name: "9U McAndrews",

    season: "2027 Season",

    gameChangerTeamId: "eVa0Vr948vH4",

    headCoach: "Justin McAndrews",

    assistantCoaches: [
      "Matt Rocha",
      "Mike Prigge",
      "Craig Almquist"
    ],

    facebookUrl: ""
  },


  /* =========================
     10U
  ========================== */

  hansen10u: {
    active: true,

    name: "10U Hansen",

    season: "2027 Season",

    gameChangerTeamId: "glieJ5HMvC0j",

    headCoach: "Zach Hansen",

    assistantCoaches: [
      "James Wood",
      "Pat Smith",
      "Danny Beck"
    ],

    facebookUrl: ""
  },


  decicco10u: {
    active: true,

    name: "10U DeCicco",

    season: "2027 Season",

    gameChangerTeamId: "xmAtHaprkmS1",

    headCoach: "Vince DeCicco",

    assistantCoaches: [
      "Jim Gosnell",
      "Kevin Kocha",
      "Jeremy Kiernicki"
    ],

    facebookUrl: ""
  },


  /* =========================
     11U
  ========================== */

  lennon11u: {
    active: true,

    name: "11U Lennon",

    season: "2027 Season",

    gameChangerTeamId: "lVwwLVbiCqXH",

    headCoach: "Travis Lennon",

    assistantCoaches: [
      "Cliff Anderson",
      "Joey Jesky",
      "Brian Ecklund"
    ],

    facebookUrl: ""
  },


  bozer11u: {
    active: true,

    name: "11U Bozer",

    season: "2027 Season",

    gameChangerTeamId: "jo418sCgCDyw",

    headCoach: "Ben Bozer",

    assistantCoaches: [
      "Mike Minnery",
      "Tyler Well"
    ],

    facebookUrl: ""
  },


  /* =========================
     12U
  ========================== */

  meraz12u: {
    active: true,

    name: "12U Meraz",

    season: "2027 Season",

    gameChangerTeamId: "BmhjNVz0W5gR",

    headCoach: "Freddy Meraz",

    assistantCoaches: [
      "Conner McLean",
      "Paul Lacson",
      "Andrew Ressler"
    ],

    facebookUrl: ""
  },


  lorenz12u: {
    active: true,

    name: "12U Lorenz",

    season: "2027 Season",

    gameChangerTeamId: "jWdOuqoTjKow",

    headCoach: "John Lorenz",

    assistantCoaches: [
      "Randy Ozimek",
      "Nick Valenziano"
    ],

    facebookUrl: ""
  },


  /* =========================
     13U
  ========================== */

  baillargeon13u: {
    active: true,

    name: "13U Baillargeon",

    season: "2027 Season",

    gameChangerTeamId: "ewS3RDClhrGu",

    headCoach: "Eric Baillargeon",

    assistantCoaches: [
      "Zach Hansen",
      "Cory Lusk",
      "Bart Harris"
    ],

    facebookUrl: ""
  },


  thiemeyer13u: {
    active: true,

    name: "13U Thiemeyer",

    season: "2027 Season",

    gameChangerTeamId: "5OzlwlXAAYDd",

    headCoach: "Joshua Thiemeyer",

    assistantCoaches: [
      "Donovan Christman",
      "Jon Clements",
      "Mike Pankiewicz"
    ],

    facebookUrl: ""
  },


  /* =========================
     14U
  ========================== */

  boettcher14u: {
    active: true,

    name: "14U Boettcher",

    season: "2027 Season",

    gameChangerTeamId: "5FbGFaKkWCHQ",

    headCoach: "Aaron Boettcher",

    assistantCoaches: [
      "Nick Valenziano",
      "Dan Pagels"
    ],

    facebookUrl: ""
  },


  /* =========================
     15U
  ========================== */

  dean15u: {
    active: true,

    name: "15U Dean",

    season: "2027 Season",

    gameChangerTeamId: "",

    headCoach: "Jeremy Dean",

    assistantCoaches: [
      "Dan Huels",
      "Shane Frederick",
      "Pat Lucas"
    ],

    facebookUrl: ""
  },


  /* =========================
     16U
  ========================== */

  bivona16u: {
    active: true,

    name: "16U Bivona",

    season: "2027 Season",

    gameChangerTeamId: "8NGYBcGFasMw",

    headCoach: "Mike Bivona",

    assistantCoaches: [
      "Eric McCann",
      "John Weber",
      "Justin Lehr"
    ],

    facebookUrl: ""
  },


  /* =========================
     17U
  ========================== */

  deubel17u: {
    active: true,

    name: "17U Deubel",

    season: "2027 Season",

    gameChangerTeamId: "kutDkVx3yhOH",

    headCoach: "Mike Deubel",

    assistantCoaches: [
      "Blake Thome",
      "Cooper Cohn"
    ],

    facebookUrl: ""
  },


  /* =========================
     FORMER TEAMS
  ========================== */

  riley17u: {
    active: false,

    name: "17U Riley",

    season: "2026 Season",

    gameChangerTeamId: "pMdj4HZlj6tS",

    headCoach: "Bryan Riley",

    assistantCoaches: [
      "Bob Tomlinson",
      "Dan Dunn"
    ],

    facebookUrl: "https://www.facebook.com/groups/739661985372413"
  }

};
