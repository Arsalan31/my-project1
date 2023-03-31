import styles from './Hero_rvr.module.css'
import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'
const Hero = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "/touring the facility and picking up slack/",
                "position": "1x2",
                "preset": "HeroTxt"
            },
            {
                "wysiwyg": "are you a guide who needs a map?",
                "position": "2x2",
                "preset": "HeroTxt1"
            },
        ],

        "enableHalfWidth": false,
        "backgroundColor": "",
        "backgroundImage": "./static/images/RVR-quote1.jpg",
        "backgroundImageOverlay": "",

    }

    return (
        <div  className={`${styles.infoBlock}`}>
            <InfoBlockGeneric {...data} direction={props.direction} />
        </div>
    )
}

export default Hero