let DefaultMeetingTimeOptions = [
    ["Sep 25, 2022 23:30:00", "Sep 26, 2022 00:30:00"],
    ["Sep 26, 2022 19:30:00", "Sep 26, 2022 20:30:00"],
    ["Sep 26, 2022 20:30:00", "Sep 26, 2022 21:30:00"],
    ["Sep 27, 2022 19:00:00", "Sep 27, 2022 20:00:00"],
    ["Sep 27, 2022 21:15:00", "Sep 27, 2022 22:15:00"],
    ["Sep 28, 2022 18:30:00", "Sep 28, 2022 19:30:00"],
    ["Sep 28, 2022 21:30:00", "Sep 28, 2022 22:30:00"],
];

let num_meetings = DefaultMeetingTimeOptions.length;

// Randomly generates an integer in the range [lo, hi)
function randInt(lo, hi) { return Math.floor(Math.random() * (hi - lo)) + lo; }

let DefaultAvailability = [
    {
        name: "Organizer",
        availability: new Array(num_meetings).fill(1),
    },
    {
        name: "Person 1",
        availability: new Array(num_meetings).fill(0).map(() => { return randInt(0, 3) }),
    },
    {
        name: "Person 2",
        availability: new Array(num_meetings).fill(0).map(() => { return randInt(0, 3) }),
    },
]

export { DefaultMeetingTimeOptions, num_meetings, DefaultAvailability };