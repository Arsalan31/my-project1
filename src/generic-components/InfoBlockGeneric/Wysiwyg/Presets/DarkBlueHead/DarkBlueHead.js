const DarkBlueHead = (props) => {
  
    // let props = {
    //   "singleItem": {
    //     "wysiwyg": "Title",
    //     "position": "1x1",
    //     "preset": "preset_name"
    //   }
    // }

    return (
      <div className="w-full flex justify-center text-center text-3xl font-light text-blue-80"
        dangerouslySetInnerHTML={{ __html: props.singleItem.wysiwyg }} />
    )
  };
  
  export default DarkBlueHead;