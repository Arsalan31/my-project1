import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'
const Hero = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "<div><h2><p>/&nbsp;</p>touring the facility and picking up slack<p>&nbsp;/</p></h2></div>",
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