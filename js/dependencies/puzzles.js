export const testing = {
    name: "Tester Grid",
    grid: [
        ["blank", "wall", "capture"],
        ["full-capture", "exclusive-capture", "glass"],
        ["metal", "hole", "mine"],
        ["wall", "gem", "wall"],
    ],
    max_vertices: 0,
    goal: 0,
    info: {
        creator: "Qpau02",
        verified: "Qpau02",
    },
};

export const scoringExampleOne = {
    name: "Scoring Example One",
    grid: [
        ["blank", "wall", "blank", "blank"],
        ["blank", "blank", "blank", "wall"],
        ["blank", "blank", "blank", "blank"],
        ["blank", "blank", "blank", "wall"],
    ],
    max_vertices: 4,
    goal: 90,
    info: {
        creator: "the_upgrater",
        verified: "the_upgrater",
    },
};
export const scoringExampleTwo = {
    name: "Scoring Example Two",
    grid: [
        ["wall", "blank", "wall", "wall"],
        ["blank", "blank", "blank", "blank"],
        ["wall", "blank", "blank", "wall"],
        ["blank", "blank", "wall", "blank"],
    ],
    max_vertices: 3,
    goal: 40,
    info: {
        creator: "the_upgrater",
        verified: "the_upgrater",
    },
};
export const scoringExampleThree = {
    name: "Scoring Example Three",
    grid: [
        ["wall", "blank", "blank", "blank"],
        ["wall", "blank", "blank", "blank"],
        ["blank", "blank", "blank", "wall"],
        ["wall", "blank", "blank", "wall"],
    ],
    max_vertices: 3,
    goal: 50,
    info: {
        creator: "the_upgrater",
        verified: "the_upgrater",
    },
};
export const triangulation = {
    name: "Triangulation",
    grid: [
        ["blank", "blank", "metal", "wall"],
        ["blank", "blank", "blank", "wall"],
        ["capture", "blank", "capture", "blank"],
        ["glass", "blank", "blank", "mine"],
        ["gem", "wall", "blank", "wall"],
    ],
    max_vertices: 3,
    goal: 70,
    info: {
        creator: "Codex",
        verified: "?",
    },
};
