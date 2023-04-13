import InfoBlockGeneric from '../../generic-components/InfoBlockGeneric/InfoBlockGeneric'

const Development = (props) => {

    let data = {
        "wysiwygRepeater": [
            {
                "wysiwyg": "WHAT IS ORGANIZATIONAL DEVELOPMENT?",
                "position": "1x1",
                "preset": "DevelopmentHead"
            },
            {
                "wysiwyg":
                    "<div> <p> Organizational Development(OD) seeks to align the strategies, structure, people, and metrics within an organization to achieve greater effectiveness.</p> <br /> <p>The practice of OD is a combination of psychology, human resource management, organizational behavior, adult education, and culture. Its focus on data and research seeks to provide system-wide improvements to an organization's performance.</p> <br /> <p>OD emerged from human relations studies in the 1930s, during which psychologists realized that organizational structures and processes influence worker behavior and motivation.</p> </div > ",
                "position": "1x3",
                "preset": "DevelopmentSubHead"
            },
            {
                "wysiwyg": "<div><span><span style='color: #00e7ff;font-weight: bold;'>/&nbsp;</span>touring the facility and picking up slack<span style='color: #00e7ff;font-weight: bold;'>&nbsp;/</span></span></div>",
                "position": "2x2",
                "preset": "DarkBlueHead"
            }
        ],

        "enableHalfWidth": true,
    }

    return (
        <div>
            <InfoBlockGeneric {...data} direction={props.direction} />
        </div>
    )
}

export default Development