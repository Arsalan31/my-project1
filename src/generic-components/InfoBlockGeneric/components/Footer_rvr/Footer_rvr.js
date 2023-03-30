import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const Footer = (props) => {

    let data = {
        "mediaRepeater": [
            {
                "mediaType": "Image",
                "position": "1x1",
                "preset": "",
                "image": {
                    "url": "./static/images/RVR-sticky.png",
                    "alt": "",
                },
            }


        ],
        "menuRepeater": [
            {
                "position": "1x2",
                "preset": "",
                "menu": [
                    {
                        "title": " SOLUTIONS",
                        "link": "",
                        "iconName": "",
                        "iconUrl": "",
                    },
                    {
                        "title": "OUR PROCESS",
                        "link": "#",
                    },
                    {
                        "title": "OUR DEVELOPMENT",
                        "link": "#",
                    },
                    {
                        "title": "ABOUT",
                        "link": "#",
                    },
                    {
                        "title": "CONTACT",
                        "link": "#",
                    },
                ],
            },
            {
                "position": "1x2",
                "preset": "",
                "menu": [
                    {
                        "iconName": "fa-linkedin-in",
                        "iconUrl": "",
                    },
                    {
                        "iconName": "fa-facebook-f",
                        "iconUrl": "",
                    },
                ],
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

export default Footer