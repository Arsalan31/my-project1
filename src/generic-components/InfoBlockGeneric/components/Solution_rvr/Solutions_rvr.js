import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const Solutions = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "Solution",
                "position": "1x2",
                "preset": "SolutionHead"
            },
            {
                "wysiwyg": "Rivers & Roads has the complete picture of how people and operations intersect. Once the two are in sync, we can improve the overall function of your organization.",
                "position": "2x1",
                "preset": "SolutionSubHead"
            },
            {
                "wysiwyg": "We recognize that each client is unique, so we work to understand your objectives to implement the solutions below or develop custom solutions to address business needs.",
                "position": "2x2",
                "preset": "SolutionSubHead1"
            },
        ],
        
        "enableHalfWidth": false,
        "backgroundColor": "",
        "backgroundImage": "",
        "backgroundImageOverlay": "",
    }

    return (
        <div className={`${styles.infoBlock}`}>
            <InfoBlockGeneric {...data} direction={props.direction} />
        </div>
    )
}

export default Solutions