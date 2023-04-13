const Description = (props) => {
  
    // let props = {
    //   "singleItem": {
    //     "wysiwyg": "Title",
    //     "position": "1x1",
    //     "preset": "preset_name"
    //   }
    // }

    return (
      <div className="flex justify-center text-center text-2xl font-light text-gray-15"
        dangerouslySetInnerHTML={{ __html: props.singleItem.wysiwyg }} />
    )
  };
  
  export default Description;