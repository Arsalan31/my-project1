const DevelopmentHead = (props) => {
  
    // let props = {
    //   "singleItem": {
    //     "wysiwyg": "Title",
    //     "position": "1x1",
    //     "preset": "preset_name"
    //   }
    // }

    return (
      <div className="lg:w-1/2 w-full px-4 text-blue-80 sm:text-5xl text-4xl leading-12 font-light"
        dangerouslySetInnerHTML={{ __html: props.singleItem.wysiwyg }} />
    )
  };
  
  export default DevelopmentHead;
  