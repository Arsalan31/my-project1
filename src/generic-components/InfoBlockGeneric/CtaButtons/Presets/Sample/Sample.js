const Sample = (props) => {

  // let props = {
  //   "singleItem": {
  //     "ctaLink": "https://www.google.com",
  //     "ctaCaption": "Read More",
  //     "position": "2x2",
  //     "preset": "GreenButton",
  //   },
  // "direction": "ltr"
  // }

  return (
    <a href={props.singleItem.ctaLink} className='ctaButton_sample text-white uppercase text-xs font-bold leading-6'>{props.singleItem.ctaCaption}</a>
  )
}

export default Sample