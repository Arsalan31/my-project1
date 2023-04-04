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
                "position": "2x3",
                "preset": "SolutionSubHead"
            },
        ],
        
        "enableHalfWidth": true,
        "backgroundColor": "#081f41",
        "backgroundImage": "",
        "backgroundImageOverlay": "",
    }

    return (
        <div>
            <InfoBlockGeneric {...data} direction={props.direction} />
        </div>
    )
}

export default Solutions