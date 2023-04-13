import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const Footer = (props) => {

    let data = {
        "mediaRepeater": [
            {
                "mediaType": "Image",
                "position": "1x1",
                "preset": "FooterImg",
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
                        "iconName": "",
                        // "iconUrl": "/static/images/twitter.png",
                        "submenu": [
                            {
                                "title": "Solutions",
                                "link": "#",
                            },
                            {
                                "title": "Our Process",
                                "link": "#",
                            },
                            {
                                "title": "Organizational Development",
                                "link": "#"
                            },
                            {
                                "title": "About",
                                "link": "#"
                            },
                            {
                                "title": "Contact",
                                "link": "#"
                            },
                        ]
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
        "backgroundColor": "#081f41",
        "backgroundImageOverlay": "",
    }
    let Footerline = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "© 2022 All rights reserved. Rivers & Roads Organizational Development",
                "position": "3x2",
                "preset": "BlueFooter",
            },
        ],
        "backgroundColor": "#051830",
        "backgroundImageOverlay": "",
    }

    return (
        <div>
            <InfoBlockGeneric {...data} direction={props.direction} />
            <InfoBlockGeneric {...Footerline} direction={props.direction} />
        </div>
    )
}

export default Footer