import styles from './Sample.module.css'
import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const About = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "Solition",
                "position": "1x2",
                "preset": "GrayDate"
            },
            {
                "wysiwyg": "Rivers & Roads has the complete picture of how people and operations intersect. Once the two are in sync, we can improve the overall function of your organization.",
                "position": "2x1",
                "preset": "GrayDate"
            },
            {
                "wysiwyg": "We recognize that each client is unique, so we work to understand your objectives to implement the solutions below or develop custom solutions to address business needs.",
                "position": "2x2",
                "preset": "BlueTitle"
            },
        ],
        "mediaRepeater": [
            {
                "mediaType": "Image",
                "position": "3x1",
                "preset": "",
                "image": {
                    "url": "./assets/RVR-strategic-planning.png",
                    "alt": "Strategic Planning",
                },
                "mediaType": "Image",
                "position": "3x2",
                "preset": "",
                "image": {
                    "url": "./assets/RVR-org-structure.png",
                    "alt": "Organizational Structure & Design",
                },
                "mediaType": "Image",
                "position": "3x3",
                "preset": "",
                "image": {
                    "url": "./assets/RVR-speaking.png",
                    "alt": "Keynote Speaking",
                },
                "mediaType": "Image",
                "position": "3x4",
                "preset": "",
                "image": {
                    "url": "./assets/RVR-training.png",
                    "alt": "Training & Facilitation",
                },
                "mediaType": "Image",
                "position": "3x5",
                "preset": "",
                "image": {
                    "url": "./assets/RVR-coaching.png",
                    "alt": "Individual Coaching",
                },
                "mediaType": "Image",
                "position": "3x6",
                "preset": "",
                "image": {
                    "url": "./assets/RVR-change-readiness.png",
                    "alt": "Change Readiness",
                },
                "mediaType": "Image",
                "position": "3x7",
                "preset": "",
                "image": {
                    "url": "./assets/RVR-merger-prep.png",
                    "alt": "Merger/Acquisition Preparation",
                },
            }
        ],
        "ctaRepeater": [
            {
                "ctaLink": "https://www.google.com",
                "ctaCaption": "READ BIO",
                "position": "4x2",
            }
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

export default About