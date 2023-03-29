const Sample = (props) => {
  
    // let props = {
    //   "singleItem": {
    //     "wysiwyg": "Title",
    //     "position": "1x1",
    //     "preset": "preset_name"
    //   }
    // }

    return (
      <div className="wysiwyg_sample text-xl leading-6 xs2:text-2xl xs2:leading-7 sm:text-3xl sm:leading-8 lg:text-32 lg:leading-10 font-Montserrat font-bold text-black1 "
        dangerouslySetInnerHTML={{ __html: props.singleItem.wysiwyg }} />
    )
  };
  
  export default Sample;
  