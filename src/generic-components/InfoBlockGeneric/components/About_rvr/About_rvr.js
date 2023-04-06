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
            {
                "wysiwyg": "Lyndi Zavy, M.A., PHR is an organizational development consultant and founder of Rivers & Roads. A creative visionary and strategic thinker, Lyndi is committed to the study of organizations and uses her intellectual curiosity and business acumen to envision new ways to work and contribute to broader society. She has extensive experience in developing and managing all aspects of an organization's quality and business improvement efforts such as developing and administering programs, training and coaching employees, and facilitating organization- wide change. Lyndi is a respected and sought - after speaker on the topics of strategic and operational planning, the impacts of work / life balance, and program evaluation.She holds a BA in psychology from the University of Oklahoma and Master's in Industrial and Organizational Psychology from Middle Tennessee State University.Lyndi is passionate about giving back to the community through participation in several non - profit boards and committees.She and her husband have two precocious kids, a beloved rescue dog, and a leopard gecko.When working with Lyndi, you can expect song lyrics, movie quotes, and some dad jokes to be woven into each presentation and conversation.",
                "position": "2x3",
                "preset": "ExpandableText",
                "showLimitedText": true,
                "maximumCharacters": 0,
                "isExpandable": true,
                "buttonId": "academiesToggleText",
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
                "captionText": "Lyndi Zavy, MA, PHR",
            }


        ],
        "ctaRepeater": [
            {
                "ctaLink": "",
                "ctaCaption": "READ BIO",
                "position": "3x2",
                "preset": "Aboutbtn",
                "id": "academiesToggleText",
            }
        ],

        "enableHalfWidth": true,
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