import QuickLinksGeneric from "../../generic-components/QuickLinksGeneric/QuickLinksGeneric"

const CardsBlock = (props) => {

  let data = {
    "cardsRepeater": [
      {
        "title": "Card 1",
        "subtitle": "Subtitle",
        "description":"",
        "image": {
          "url": '',
          "alt": '',
          "focalPoint": { x: 0.5, y: 0.5 }
        },
        "ctaCaption": "See More",
        "ctaLink": "#"
      },
      {
        "title": "Card 2",
        "subtitle": "Subtitle",
        "ctaCaption": "See More",
        "ctaLink": "#"
      },
      {
        "title": "Card 3",
        "subtitle": "Subtitle",
        "ctaCaption": "See More",
        "ctaLink": "#"
      },
      {
        "title": "Card 4",
        "subtitle": "Subtitle",
        "ctaCaption": "See More",
        "ctaLink": "#"
      },
      {
        "title": "Card 5",
        "subtitle": "Subtitle",
        "ctaCaption": "See More",
        "ctaLink": "#"
      },
      {
        "title": "Card 6",
        "subtitle": "Subtitle",
        "ctaCaption": "See More",
        "ctaLink": "#"
      },
      {
        "title": "Card 7",
        "subtitle": "Subtitle",
        "ctaCaption": "See More",
        "ctaLink": "#"
      }
  ],
    "cardPreset": "SampleCard",
    "maximumCardsInARow": 6, 

    "backgroundColor": "",
    "backgroundImage": "",
    "backgroundImageOverlay": "",
    "componentId": ""
  }

  return (
    <QuickLinksGeneric {...data} direction={props.direction} />
  )
}

export default CardsBlock