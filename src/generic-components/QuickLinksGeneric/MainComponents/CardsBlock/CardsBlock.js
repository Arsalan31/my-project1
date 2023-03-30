import QuickLinksGeneric from "../../generic-components/QuickLinksGeneric/QuickLinksGeneric"

const CardsBlock = (props) => {

  let data = {
    "cardsRepeater": [
      {
        "title": "Card 1",
        "subtitle": "Subtitle",
        "image": {
          "url": './assets/RVR-strategic-planning.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
        "description":"Strategic Planning",
      },
      {
        "title": "Card 2",
        "subtitle": "Subtitle",
        "image": {
          "url": './assets/RVR-org-structure.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
        "description":"Organizational Structure & Design",
      },
      {
        "title": "Card 3",
        "subtitle": "Subtitle",
        "image": {
          "url": './assets/RVR-speaking.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
        "description":"Keynote Speaking",
      },
      {
        "title": "Card 4",
        "subtitle": "Subtitle",
        "image": {
          "url": './assets/RVR-training.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
        "description":"Training & Facilitation",
      },
      {
        "title": "Card 5",
        "subtitle": "Subtitle",
        "image": {
          "url": './assets/RVR-coaching.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
        "description":"Individual Coaching",
      },
      {
        "title": "Card 6",
        "subtitle": "Subtitle",
        "image": {
          "url": './assets/RVR-change-readiness.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
        "description":"Change Readiness",
      },
      {
        "title": "Card 7",
        "subtitle": "Subtitle",
        "image": {
          "url": './assets/RVR-merger-prep.png',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
        "description":"Merger/Acquisition Preparation",
      },
  ],
    "cardPreset": "SampleCard",
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

export default CardsBlock