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
                "wysiwyg": "Organizational Development (OD) seeks to align the strategies, structure, people, and metrics within an organization to achieve greater effectiveness.",
                "position": "1x3",
                "preset": "DevelopmentSubHead"
            },
            {
                "wysiwyg": "The practice of OD is a combination of psychology, human resource management, organizational behavior, adult education, and culture. Its focus on data and research seeks to provide system-wide improvements to an organization's performance.",
                "position": "2x3",
                "preset": "DevelopmentSubHead"
            },
            {
                "wysiwyg": "OD emerged from human relations studies in the 1930s, during which psychologists realized that organizational structures and processes influence worker behavior and motivation.",
                "position": "3x3",
                "preset": "DevelopmentSubHead"
            },
            {
                "wysiwyg": "/ the intersection of people and operations /",
                "position": "3x2",
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