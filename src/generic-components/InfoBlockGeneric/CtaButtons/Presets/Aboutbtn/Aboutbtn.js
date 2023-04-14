const Aboutbtn = (props) => {

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
      <a href={props.singleItem.ctaLink} className='text-center text-lg font-semibold text-gray-15 pb-1'>{props.singleItem.ctaCaption}</a>
    )
  }
  
  export default Aboutbtn