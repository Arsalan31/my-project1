import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const Description = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "Rivers & Roads is an organizational development firm that empowers organizations to create purposeful work by creating a clear roadmap that allows everyone to understand both the destination and their role in reaching it.",
                "position": "2x2",
                "preset": "Description"
            },
        ],

        "enableHalfWidth": false,
        "backgroundColor": "",
        "backgroundImage": "",
        "backgroundImageOverlay": "",
    }

    return (
        <div>
            <InfoBlockGeneric {...data} direction={props.direction} />
        </div>
    )
}

export default Description