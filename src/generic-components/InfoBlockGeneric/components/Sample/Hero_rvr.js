import styles from './Sample.module.css'
import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const Hero = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "/touring the facility and picking up slack/",
                "position": "1x2",
                "preset": "GrayDate"
            },
            {
                "wysiwyg": "are you a guide who needs a map?",
                "position": "2x2",
                "preset": "GrayDate"
            },
        ],

        "enableHalfWidth": false,
        "backgroundColor": "",
        "backgroundImage": "./assets/RVR-quote1.jpg",
        "backgroundImageOverlay": "",

    }

    return (
        <div className={`${styles.infoBlock}`}>
            <InfoBlockGeneric {...data} direction={props.direction} />
        </div>
    )
}

export default Hero