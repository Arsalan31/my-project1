const DevelopmentSubHead = (props) => {
  
    // let props = {
    //   "singleItem": {
    //     "wysiwyg": "Title",
    //     "position": "1x1",
    //     "preset": "preset_name"
    //   }
    // }

    return (
      <div className="lg:w-1/2 w-full px-4 font-light text-lg pb-4 text-gray-10"
        dangerouslySetInnerHTML={{ __html: props.singleItem.wysiwyg }} />
    )
  };
  
  export default DevelopmentSubHead;
  