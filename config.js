/*
  McHenry Cobras Team Configuration

  This file is the single source of truth for Cobras teams
  and the GameChanger seasons included in the website.

  COBRAS SEASON:
    This is the overall Cobras organizational season.

  GAMECHANGER SEASONS:
    These are the GameChanger seasons whose data will be
    included in team records and the organization rollup.

  To change which GameChanger seasons are included, change
  ONLY activeGameChangerSeasons below.

  Examples:

    Fall only:
      activeGameChangerSeasons: [
        "Fall 2026"
      ]

    Fall + Spring + Summer:
      activeGameChangerSeasons: [
        "Fall 2026",
        "Spring 2027",
        "Summer 2027"
      ]

    Spring + Summer:
      activeGameChangerSeasons: [
        "Spring 2027",
        "Summer 2027"
      ]

  Each team can have a different GameChanger team ID for
  each season. This is intentional because GameChanger
  creates separate teams for different seasons.

  Active:
    true  = current active Cobras team
    false = inactive/former team

  Required:
    active
    name
    season

  GameChanger:
    gameChangerTeams contains the GameChanger team ID for
    each available GameChanger season.

  Coaching:
    headCoach
    assistantCoaches: up to 3 names

  Facebook:
    facebookUrl: leave "" until a team page is available.
*/


const COBRAS_SETTINGS = {

  /*
    Overall Cobras organizational season.
  */
  cobrasSeason: "2026-27 Season",


  /*
    GameChanger seasons currently included in all
    team records and organization rollups.

    STARTING POINT: Fall 2026 ONLY
  */
  activeGameChangerSeasons: [
    "Fall 2026"
  ]

};


const COBRAS_TEAMS = {


  /* =========================
     8U
  ========================== */

  deubel8u: {
    active: true,

    name: "8U Deubel",

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "NJRBPnj0Dhk6"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "eVa0Vr948vH4"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "glieJ5HMvC0j"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "tHsuttzldgTo"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "kzFVJtSX9Brn"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "jo418sCgCDyw"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "BmhjNVz0W5gR"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "jWdOuqoTjKow"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "kTpmcwbSxdDR"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "5OzlwlXAAYDd"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "5FbGFaKkWCHQ"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": ""
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "8NGYBcGFasMw"
    },

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

    season: "2026-27 Season",

    gameChangerTeams: {
      "Fall 2026": "kutDkVx3yhOH"
    },

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

    season: "2025-26 Season",

    gameChangerTeams: {
      "Spring 2026": "pMdj4HZlj6tS"
    },

    headCoach: "Bryan Riley",

    assistantCoaches: [
      "Bob Tomlinson",
      "Dan Dunn"
    ],

    facebookUrl: "https://www.facebook.com/groups/739661985372413"
  }

};
