import { faChevronDown } from "@fortawesome/free-solid-svg-icons"

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
    <div className="flex flex-col">
      <a href={props.singleItem.ctaLink} className='text-center text-lg font-semibold text-gray-15 pb-1'>{props.singleItem.ctaCaption}</a>
      <a href={props.singleItem.ctaLink}><FontAwesomeIcon icon={faChevronDown} style={{ color: "#3b3b3b", }} />{props.singleItem.ctaCaption}</a>
    </div>
  )
}

export default Aboutbtn