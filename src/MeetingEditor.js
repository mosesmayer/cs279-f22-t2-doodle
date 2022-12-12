import React from "react";
import "./css/MeetingEditor.css"


class MeetingEditor extends React.Component {
    constructor(props) {
        super(props);
    }

    PollMetadata = () => {
        return (
            <div>
                <h3>Title</h3>
                <input
                    name='title'
                    className={"meeting-title"}
                    placeholder="What's the occasion?"
                />
                <h3>Description (optional)</h3>
                <textarea
                    className={"meeting-description"}
                    placeholder="Here you can include things like an agenda, instructions, or other details"
                    wrap="soft"
                    spellcheck="false"
                />
                <h3>Location (optional)</h3>
                <input
                    name='location'
                    className={"meeting-location"}
                    placeholder="Where will this happen?"
                />
            </div>
        )
    }
    render() {
        return (
            <div className={'MeetingEditor'}>
                <h1>Edit your group poll</h1>
                <this.PollMetadata />
            </div>
        )
    }
}

export default MeetingEditor;