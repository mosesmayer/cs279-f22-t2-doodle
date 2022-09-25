import React, { useEffect } from "react";
import "./css/GuestTimeView.css"

function pad2(num) {
    return (num < 10 ? '0' : '') + num;
}

const ICON_COLORS = {
    bg_green: "#ebf7d4",
    main_green: "#517d0f",
    bg_yellow: "#fff0b3",
    main_yellow: "#936e10",
    bg_grey: "#ebeff2",
    main_grey: "#a0aebd",
};

const ICONS = {
    globe: (
        <svg viewBox="0 0 20 20" aria-label="Globe" aria-hidden="true" width="16" height="16"><g fill="none">
            <path d="M-2-2h24v24H-2z"></path>
            <path d="M9.99 0C4.47 0 0 4.48 0 10s4.47 10 9.99 10C15.52 20 20 15.52 20 10S15.52 0 9.99 0Zm6.93 6h-2.95a15.65 15.65
                     0 0 0-1.38-3.56A8.03 8.03 0 0 1 16.92 6ZM10 2.04c.83 1.2 1.48 2.53 1.91 3.96H8.09C8.52 4.57 9.17 3.24 10 
                     2.04ZM2.26 12C2.1 11.36 2 10.69 2 10s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H2.26Zm.82 
                     2h2.95c.32 1.25.78 2.45 1.38 3.56A7.987 7.987 0 0 1 3.08 14Zm2.95-8H3.08a7.987 7.987 0 0 1 4.33-3.56A15.65 
                     15.65 0 0 0 6.03 6ZM10 17.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96ZM12.34 
                     12H7.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2Zm.25 
                     5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95a8.03 8.03 0 0 1-4.33 3.56ZM14.36 12c.08-.66.14-1.32.14-2 
                     0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38Z" fill="currentColor"></path>
        </g></svg>
    ),
    check: (<svg viewBox="0 0 24 24" aria-label="Check" aria-hidden="true" width="20" height="20">
        <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"></path>
    </svg>),
    check_with_parens: (<svg viewBox="0 0 24 24" aria-label="BracketsCheck" aria-hidden="true" width="20" height="20">
        <path transform="translate(2, 2)"
            d="M4.46 1.755a.833.833 0 0 1 .748 1.49c-.085.043-.265.15-.508.327a7.084 7.084 0 0 
            0-1.23 1.15C2.343 6.054 1.667 7.771 1.667 9.945c0 1.868.679 3.534 1.821 4.983.404.513.838.96 
            1.27 1.337.254.222.446.368.544.434a.833.833 0 1 1-.934 1.38c-.566-.382-1.379-1.092-2.188-2.12C.82 14.238 
            0 12.224 0 9.946c0-2.583.824-4.677 2.198-6.3.83-.981 1.67-1.592 2.263-1.89Zm9.794.371a.833.833 0 0 1 1.119-.37c.593.297 
            1.432.908 2.263 1.89 1.373 1.622 2.198 3.716 2.198 6.299 0 2.278-.822 4.292-2.18 6.015-.81 1.027-1.622 1.737-2.188 
            2.12a.833.833 0 1 1-.934-1.38 6.28 6.28 0 0 0 .544-.435c.432-.377.865-.824 1.27-1.337 1.142-1.45 1.82-3.115 1.82-4.983
            0-2.174-.675-3.891-1.802-5.223a7.084 7.084 0 0 0-1.23-1.15 4.166 4.166 0 0 0-.509-.327.833.833 0 0 1-.37-1.119Zm-.127
            4.062a1.25 1.25 0 0 1 1.746 1.79l-7.437 7.25-4.362-4.81A1.25 1.25 0 0 1 5.926 8.74l2.62 2.89Z"
            id="BracketsCheck_svg__a"
            fill="currentColor"></path>
    </svg>),
    cross: (<svg viewBox="0 0 24 24" aria-label="Close" aria-hidden="true" width="20" height="20">
        <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor"></path>
    </svg>)
};

const OptionList = (props) => {
    const listEltStyle = {
        alignItems: "center",
        display: "flex",
        marginBottom: "8px",
        lineHeight: "21px",
    }
    const iconStyle = {
        borderRadius: "2px",
        marginRight: "4px",
        width: "24px",
        height: "24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
    const ulStyle = {
        display: "block",
        // listStyleType: "disc",
        marginBlockStart: "1em",
        marginBlockEnd: "1em",
        marginInlineStart: "0px",
        marginInlineEnd: "0px",
        paddingInlineStart: "40px",
    }
    return (
        <div>
            <ul style={{ ...ulStyle, margin: "0px", padding: "0px", listStyleType: "none" }}>
                {/* SVG for icons sourced from Doodle */}
                <li style={listEltStyle}>
                    <span style={iconStyle}>
                        {ICONS.globe}
                    </span>
                    <p style={{ margin: "0px" }}>{props.timeZone}</p>
                </li>
                <li style={listEltStyle}>
                    <span style={{ ...iconStyle, background: `${ICON_COLORS.bg_green}`, color: `${ICON_COLORS.main_green}` }}>
                        {ICONS.check}
                    </span>
                    <p style={{ margin: "0px" }}>Yes (1 click)</p>
                </li>
                <li style={listEltStyle}>
                    <span style={{ ...iconStyle, background: `${ICON_COLORS.bg_yellow}`, color: `${ICON_COLORS.main_yellow}` }}>
                        {ICONS.check_with_parens}
                    </span>
                    <p style={{ margin: "0px" }}>If need be (2 clicks)</p>
                </li>
                <li style={listEltStyle}>
                    <span style={{ ...iconStyle, background: `${ICON_COLORS.bg_grey}`, color: `${ICON_COLORS.main_grey}` }}>
                        {ICONS.cross}
                    </span>
                    <p style={{ margin: "0px" }}>No</p>
                </li>
            </ul>
        </div >
    )
}

// Object: { organizer: String, eventTitle: String, timeZone: String, options: { Yes, If need be, No } }
const EventMetadata = (props) => {
    return (
        <div className={'eventMetadata'}>
            <div style={{ marginTop: "2px", marginBottom: "2px", padding: "5px", }}>
                <p style={{ fontWeight: "600", }}>{props.eventOrganizer}</p>
                <p>is organizing</p>
            </div>
            <div style={{ marginBottom: "2px", padding: "5px", }}>
                <h6>{props.eventTitle}</h6>
            </div>
            <OptionList timeZone="United States - ET" />
        </div>
    )
}

/**
 * 
 * @param {Date} startDate 
 * @param {Date} finishDate 
 * @returns 
 */
function getTimeObject(startDate, finishDate) {
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
    const getTimeObj = (h, m) => {
        return { hours: ((h - 1) % 12 + 1), minutes: m, am: (h < 12) }
    };
    startDate = new Date(startDate);
    finishDate = new Date(finishDate);
    return {
        day: days[startDate.getDay()],
        date: startDate.getDate(),
        month: months[startDate.getMonth()],
        startTime: getTimeObj(startDate.getHours(), startDate.getMinutes()),
        finishTime: getTimeObj(finishDate.getHours(), finishDate.getMinutes()),
    };
}

let timeOptions = [
    ["Sep 25, 2022 23:30:00", "Sep 26, 2022 00:30:00"],
    ["Sep 26, 2022 19:30:00", "Sep 26, 2022 20:30:00"],
    ["Sep 26, 2022 20:30:00", "Sep 26, 2022 21:30:00"],
    ["Sep 27, 2022 19:00:00", "Sep 27, 2022 20:00:00"],
    ["Sep 27, 2022 21:15:00", "Sep 27, 2022 22:15:00"],
    ["Sep 28, 2022 18:30:00", "Sep 28, 2022 19:30:00"],
    ["Sep 28, 2022 21:30:00", "Sep 28, 2022 22:30:00"],

    // (Date("Sep 25, 2022 23:30:00"), Date("Sep 26, 2022 00:30:00")),
    // (Date("Sep 26, 2022 19:30:00"), Date("Sep 26, 2022 20:30:00")),
    // (Date("Sep 26, 2022 20:30:00"), Date("Sep 26, 2022 21:30:00")),
    // (Date("Sep 27, 2022 19:00:00"), Date("Sep 27, 2022 20:00:00")),
    // (Date("Sep 27, 2022 21:15:00"), Date("Sep 27, 2022 22:15:00")),
    // (Date("Sep 28, 2022 18:30:00"), Date("Sep 28, 2022 19:30:00")),
    // (Date("Sep 28, 2022 21:30:00"), Date("Sep 28, 2022 22:30:00")),
];

const meetingOptionStyles = [
    {
        style: {
            background: "none",
            color: ICON_COLORS.main_grey,
        },
        icon: ICONS.cross
    },
    {
        style: {
            background: ICON_COLORS.bg_grey,
            color: ICON_COLORS.main_grey,
        },
        icon: ICONS.cross
    },
    {
        style: {
            background: ICON_COLORS.bg_green,
            color: ICON_COLORS.main_green,
        },
        icon: ICONS.check
    },
    {
        style: {
            background: ICON_COLORS.bg_green,
            color: ICON_COLORS.main_green,
        },
        icon: ICONS.check
    },
    {
        style: {
            background: ICON_COLORS.bg_yellow,
            color: ICON_COLORS.main_yellow,
        },
        icon: ICONS.check_with_parens
    },
    {
        style: {
            background: ICON_COLORS.bg_yellow,
            color: ICON_COLORS.main_yellow,
        },
        icon: ICONS.check_with_parens
    }
];

class MeetingOption extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props, props.startDate, props.endDate)
        // console.log("passing in: ", new Date(props.startDate), new Date(props.endDate))
        this.state = {
            hover: false,
            selected: 0,
            time: getTimeObject(new Date(props.startDate), new Date(props.endDate))
        };
        // console.log("blah", this.state.time)
        this.toggleSelected.bind(this);
    }

    toggleHover() {
        console.log("Hover");
        let newstate = this.state;
        newstate.hover = !newstate.hover;
        console.log(newstate);
        this.setState(newstate)
        console.log(this.state.hover)
    }

    toggleSelected() {
        let newstate = this.state;
        newstate.selected = (newstate.selected + 1) % 3;
        console.log(newstate);
        this.forceUpdate();
    }

    render() {
        return (
            <div
                onMouseEnter={this.toggleHover.bind(this)} onMouseLeave={this.toggleHover.bind(this)}
                onClick={() => { this.toggleSelected() }}
            >
                <div style={{
                    ...meetingOptionStyles[this.state.selected * 2 + this.state.hover].style,
                    border: "1px solid black", borderRadius: "7px",
                    userSelect: "none"
                }}
                    className={'timeComponent ' + ["mtg-cannot", "mtg-can", "mtg-maybe"][this.state.selected]}>
                    <div style={{ padding: "10px 10px 15px 10px" }}>
                        <p className={'day-month-header'}>{this.state.time.day}</p>
                        <p className={'date-header'}>{this.state.time.date}</p>
                        <p className={'day-month-header'}>{this.state.time.month}</p>
                        <div style={{ height: "5px" }}></div>
                        <p>{pad2(this.state.time.startTime.hours)}:{pad2(this.state.time.startTime.minutes)} {this.state.time.startTime.am ? "AM" : "PM"}</p>
                        <p>{pad2(this.state.time.finishTime.hours)}:{pad2(this.state.time.finishTime.minutes)} {this.state.time.finishTime.am ? "AM" : "PM"}</p>
                    </div>
                    <div style={{ width: "100%", alignItems: "center", margin: "0 auto", display: "flex" }}>
                        <span style={{
                            background: "white", color: meetingOptionStyles[this.state.selected * 2 + this.state.hover].style.color,
                            margin: "5px auto" //, height: "20px"
                        }}
                        >
                            <div style={{
                                border: "1px solid black", borderRadius: "5px",
                                margin: "0px", padding: "0", width: "20px", height: "20px"
                            }}>
                                {meetingOptionStyles[this.state.selected * 2 + this.state.hover].icon}
                            </div>
                        </span>
                    </div>
                </div >
            </div>
        )
    }
}


class GuestTimeView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(timeOptions[0])
        return (
            <div className={'guestTimeView'}>
                <div className={'meetingData'}>
                    <EventMetadata eventOrganizer="Moses Mayer" eventTitle="Meeting 1" />
                </div>
                <div className={'schedulingTool'}>
                    <h2>Select your preferred times</h2>
                    <h6 style={{ fontWeight: "normal", fontSize: "1.125rem", margin: "0px 0px 5px 0px" }}>We'll let you know when the organizer picks the best time</h6>
                    <div className={"newEntryRow"}>
                        <div style={{ display: "flex", alignItems: "center", minWidth: "200px", padding: "20px" }}>
                            <p className={"nameText"}>You</p>
                        </div>
                        <div className={"timeColumns"}>
                            {timeOptions.map((opt) => {
                                return <MeetingOption startDate={opt[0]} endDate={opt[1]} />
                            })}
                        </div>
                    </div>
                </div>
            </div >
        )
    }
}

export default GuestTimeView;