const SolutionsHead = (props) => {
  
    // let props = {
    //   "singleItem": {
    //     "wysiwyg": "Title",
    //     "position": "1x1",
    //     "preset": "preset_name"
    //   }
    // }

    return (
      <div className="text-center py-6 text-white font-light text-4.5xl"
        dangerouslySetInnerHTML={{ __html: props.singleItem.wysiwyg }} />
    )
  };
  
  export default SolutionsHead;
  