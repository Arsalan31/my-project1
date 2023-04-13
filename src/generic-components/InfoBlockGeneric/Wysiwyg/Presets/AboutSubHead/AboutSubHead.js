const AboutSubHead = (props) => {
  
    // let props = {
    //   "singleItem": {
    //     "wysiwyg": "Title",
    //     "position": "1x1",
    //     "preset": "preset_name"
    //   }
    // }

    return (
      <div className="px-4 text-gray-15 text-lg font-light"
        dangerouslySetInnerHTML={{ __html: props.singleItem.wysiwyg }} />
    )
  };
  
  export default AboutSubHead;
  