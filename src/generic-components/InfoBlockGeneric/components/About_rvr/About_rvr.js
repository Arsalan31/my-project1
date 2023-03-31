import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const About = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "About",
                "position": "1x2",
                "preset": "AboutHead"
            },
            {
                "wysiwyg": "Rivers & Roads is an organizational development consulting firm that brings a unique expertise to help your organization achieve its goals. We have a complete understanding of the people side of the organization as well as operations to provide executives with solutions to overcome challenges and pain points associated with the intricate dynamics of organizational systems and culture.",
                "position": "2x1",
                "preset": "AboutSubHead"
            },
            {
                "wysiwyg": "We spend time to understand the financial performance and inner workings of your company so we can align the strategy, structure, and people. Sometimes we will look upstream at where you have been, others, we will look down the road at where you're going, and our commitment is that we meet you with authenticity, passion, and purpose at every turn.",
                "position": "2x3",
                "preset": "AboutSubHead"
            },
        ],
        "mediaRepeater": [
            {
                "mediaType": "Image",
                "position": "3x2",
                "preset": "Aboutimg",
                "image": {
                    "url": "./static/images/Zavy-Lyndi-2.jpeg",
                    "alt": "",

                },
            }


        ],
        "ctaRepeater": [
            {
                "ctaLink": "https://www.google.com",
                "ctaCaption": "READ BIO",
                "iconName": "faChevronDown",
                "position": "4x2",
                "preset": "Aboutbtn",
            }
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

export default About