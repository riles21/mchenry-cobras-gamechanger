/*
  McHenry Cobras Team Configuration

  Add/update teams here.
  The master index.html does not need to change.

  Required:
    active
    name
    season
    gameChangerTeamId
    gameChangerWidgetId

  Coaching:
    headCoach
    assistantCoaches: up to 3 names

  Facebook:
    facebookUrl: leave "" until a team page is available.
*/

const COBRAS_TEAMS = {

  deubel8u: {
    active: true,
    name: "8U Deubel",
    season: "2027 Season",
    gameChangerTeamId: "NJRBPnj0Dhk6",

    // Add the real widget ID when available
    gameChangerWidgetId: "",

    headCoach: "Mike Deubel",
    assistantCoaches: [
      "Ryan Freund",
      "Chris Bigall",
      "JR Shaver"
    ],
    facebookUrl: ""
  },


  mcandrews9u: {
    active: true,
    name: "9U McAndrews",
    season: "2027 Season",
    gameChangerTeamId: "eVa0Vr948vH4",

    gameChangerWidgetId: "",

    headCoach: "Justin McAndrews",
    assistantCoaches: [
      "Matt Rocha",
      "Mike Prigge",
      "Craig Almquist"
    ],
    facebookUrl: ""
  },


  hansen10u: {
    active: true,
    name: "10U Hansen",
    season: "2027 Season",
    gameChangerTeamId: "glieJ5HMvC0j",

    gameChangerWidgetId: "",

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

    gameChangerWidgetId: "",

    headCoach: "Vince DeCicco",
    assistantCoaches: [
      "Jim Gosnell",
      "Kevin Kocha",
      "Jeremy Kiernicki"
    ],
    facebookUrl: ""
  },


  lennon11u: {
    active: true,
    name: "11U Lennon",
    season: "2027 Season",
    gameChangerTeamId: "lVwwLVbiCqXH",

    gameChangerWidgetId: "",

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

    gameChangerWidgetId: "",

    headCoach: "Ben Bozer",
    assistantCoaches: [
      "Mike Minnery",
      "Tyler Well"
    ],
    facebookUrl: ""
  },


  meraz12u: {
    active: true,
    name: "12U Meraz",
    season: "2027 Season",
    gameChangerTeamId: "BmhjNVz0W5gR",

    gameChangerWidgetId: "",

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

    /*
      TEMPORARY:
      Using the old Riley 17U widget ID until the
      actual Lorenz widget ID is available.
    */
    gameChangerWidgetId: "d658d31b-468e-496a-939f-11fe8966b370",

    headCoach: "John Lorenz",
    assistantCoaches: [
      "Randy Ozimek",
      "Nick Valenziano"
    ],
    facebookUrl: ""
  },


  baillargeon13u: {
    active: true,
    name: "13U Baillargeon",
    season: "2027 Season",
    gameChangerTeamId: "ewS3RDClhrGu",

    gameChangerWidgetId: "",

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

    gameChangerWidgetId: "",

    headCoach: "Joshua Thiemeyer",
    assistantCoaches: [
      "Donovan Christman",
      "Jon Clements",
      "Mike Pankiewicz"
    ],
    facebookUrl: ""
  },


  boettcher14u: {
    active: true,
    name: "14U Boettcher",
    season: "2027 Season",
    gameChangerTeamId: "5FbGFaKkWCHQ",

    gameChangerWidgetId: "",

    headCoach: "Aaron Boettcher",
    assistantCoaches: [
      "Nick Valenziano",
      "Dan Pagels"
    ],
    facebookUrl: ""
  },


  dean15u: {
    active: true,
    name: "15U Dean",
    season: "2027 Season",
    gameChangerTeamId: "",

    gameChangerWidgetId: "",

    headCoach: "Jeremy Dean",
    assistantCoaches: [
      "Dan Huels",
      "Shane Frederick",
      "Pat Lucas"
    ],
    facebookUrl: ""
  },


  bivona16u: {
    active: true,
    name: "16U Bivona",
    season: "2027 Season",
    gameChangerTeamId: "8NGYBcGFasMw",

    gameChangerWidgetId: "",

    headCoach: "Mike Bivona",
    assistantCoaches: [
      "Eric McCann",
      "John Weber",
      "Justin Lehr"
    ],
    facebookUrl: ""
  },


  deubel17u: {
    active: true,
    name: "17U Deubel",
    season: "2027 Season",
    gameChangerTeamId: "kutDkVx3yhOH",

    gameChangerWidgetId: "",

    headCoach: "Mike Deubel",
    assistantCoaches: [
      "Blake Thome",
      "Cooper Cohn"
    ],
    facebookUrl: ""
  },


  /*
    Former team — kept here for reference.
  */

  riley17u: {
    active: false,
    name: "17U Riley",
    season: "2026 Season",
    gameChangerTeamId: "pMdj4HZlj6tS",

    /*
      This is the widget ID we're temporarily
      borrowing for the Lorenz page.
    */
    gameChangerWidgetId: "d658d31b-468e-496a-939f-11fe8966b370",

    headCoach: "Bryan Riley",
    assistantCoaches: [
      "Bob Tomlinson",
      "Dan Dunn"
    ],
    facebookUrl: "https://www.facebook.com/groups/739661985372413"
  }

};
