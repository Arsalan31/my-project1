import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const BlueFooter = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "© 2022 All rights reserved. Rivers & Roads Organizational Development",
                "position": "1x2",
                "preset": "BlueFooter"
            },
        ],

        "enableHalfWidth": false,
        "backgroundColor": "#051830",
        "backgroundImage": "",
        "backgroundImageOverlay": "",
    }

    return (
        <div>
            <InfoBlockGeneric {...data} direction={props.direction} />
        </div>
    )
}

export default BlueFooter