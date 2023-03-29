import styles from './Sample.module.css'
import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const Sample = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "June 29, 2021",
                "position": "2x2",
                "preset": "GrayDate"
            },
            {
                "wysiwyg": "Architecture of The Ismaili Centre London",
                "position": "2x2",
                "preset": "BlueTitle"
            },
            {
                "wysiwyg": "The architects, the Casson Conder Partnership, were presented with an unusual design brief. They were requested to design an institutional building in an area of London which had a very great architectural diversity but which clearly had Western inspiration. The Centre sought to be compatible with its surroundings, but at the same time to meet the specific requirements of the Ismaili community and reflect the mood of Islamic architectural tradition.",
                "position": "2x2",
                "preset": "DescriptionLight"
            }
        ],
        "mediaRepeater": [
            {
                "mediaType": "Image",
                "position": "1x2",
                "preset": "",
                "image": {
                    "url": "/static/images/heroimage.png",
                    "alt": "",

                },
                "videoOrAudioUrl": "",
                "captionText": "",
                "sourceOrPhotographer": ""
            }


        ],
        "ctaRepeater": [
            {
                "ctaLink": "https://www.google.com",
                "ctaCaption": "Read More",
                "position": "2x2",
                "preset": "GreenButton",
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

export default Sample