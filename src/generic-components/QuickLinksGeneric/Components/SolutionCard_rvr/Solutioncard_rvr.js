import QuickLinksGeneric from "../../generic-components/QuickLinksGeneric/QuickLinksGeneric"

const Solutioncard = (props) => {

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
    <QuickLinksGeneric {...data} direction={props.direction} />
  )
}

export default Solutioncard