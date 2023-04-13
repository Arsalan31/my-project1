import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'
const Hero = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "<div><span><span style='color: #00e7ff;font-weight: bold;'>/&nbsp;</span>touring the facility and picking up slack<span style='color: #00e7ff;font-weight: bold;'>&nbsp;/</span></span></div>",
                "position": "1x2",
                "preset": "Herotxt"
            },
            {
                "wysiwyg": "are you a guide who needs a map?",
                "position": "2x2",
                "preset": "Herotxt1"
            },
        ],

        "enableHalfWidth": false,
        "backgroundColor": "",
        "backgroundImage": "./static/images/RVR-quote1.jpg",
        "backgroundImageOverlay": "",

    }

    return (
        <div>
            <InfoBlockGeneric {...data} direction={props.direction} />
        </div>
    )
}

export default Hero