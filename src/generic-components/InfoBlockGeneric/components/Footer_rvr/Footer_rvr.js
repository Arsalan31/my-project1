import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const Footer = (props) => {

    let data = {
        "mediaRepeater": [
            {
                "mediaType": "Image",
                "position": "1x1",
                "preset": "Footerimg",
                "image": {
                    "url": "./static/images/RVR-sticky.png",
                    "alt": "",
                },
            }


        ],
        "menuRepeater": [
            {
                "position": "1x2",
                "preset": "Footer",
                "menu": [
                    {
                        "title": " SOLUTIONS",
                        "link": "#Solution",
                    },
                    {
                        "title": "OUR PROCESS",
                        "link": "#",
                    },
                    {
                        "title": "OUR DEVELOPMENT",
                        "link": "#od",
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
                "position": "1x3",
                "preset": "Footer",
                "menu": [
                    {
                        "iconName": "faLinkedinIn",
                        "iconUrl": "",
                    },
                    {
                        "iconName": "faFacebookF",
                        "iconUrl": "",
                    },
                ],
            }
        ],
        "enableHalfWidth": false,
        "backgroundColor": "#081f41",
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