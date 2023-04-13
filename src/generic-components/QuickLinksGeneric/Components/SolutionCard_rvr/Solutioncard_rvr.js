import QuickLinksGeneric from "../../generic-components/QuickLinksGeneric/QuickLinksGeneric"

const Solutioncard = (props) => {

  let Solution = {
    "wysiwygRepeater": [
      {
        "wysiwyg": "Solution",
        "position": "1x2",
        "preset": "SolutionHead"
      },
      {
        "wysiwyg": "Rivers & Roads has the complete picture of how people and operations intersect. Once the two are in sync, we can improve the overall function of your organization.",
        "position": "2x1",
        "preset": "SolutionSubHead"
      },
      {
        "wysiwyg": "We recognize that each client is unique, so we work to understand your objectives to implement the solutions below or develop custom solutions to address business needs.",
        "position": "2x3",
        "preset": "SolutionSubHead"
      },
    ],

    "enableHalfWidth": true,
    "backgroundColor": "#081f41",
    "backgroundImage": "",
    "backgroundImageOverlay": "",
  }


  let data = {
    "cardsRepeater": [
      {
        "title": "Strategic Planning",
        "image": {
          "url": './static/images/RVR-strategic-planning.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
      },
      {
        "title": "Organizational Structure & Design",
        "image": {
          "url": './static/images/RVR-org-structure.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
      },
      {
        "title": "Keynote Speaking",
        "image": {
          "url": './static/images/RVR-speaking.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
      },
      {
        "title": "Training & Facilitation",
        "image": {
          "url": './static/images/RVR-training.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
      },
      {
        "title": "Individual Coaching",
        "image": {
          "url": './static/images/RVR-coaching.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
      },
      {
        "title": "Change Readiness",
        "image": {
          "url": './static/images/RVR-change-readiness.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
      },
      {
        "title": "Merger/Acquisition Preparation",
        "image": {
          "url": './static/images/RVR-merger-prep.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
      },
    ],
    "cardPreset": "SolutionsCard",
    "maximumCardsInARow": 7,

    "backgroundColor": "#081f41",
    "backgroundImage": "",
    "backgroundImageOverlay": "",
    "componentId": ""
  }

  return (
    <div>
      <InfoBlockGeneric {...Solution} direction={props.direction} />
      <QuickLinksGeneric {...data} direction={props.direction} />
    </div>
  )
}

export default Solutioncard