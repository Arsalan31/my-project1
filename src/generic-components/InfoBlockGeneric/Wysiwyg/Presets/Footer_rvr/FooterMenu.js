const FooterMenu = (props) => {
  
    // let props = {
    //   "singleItem": {
    //     "wysiwyg": "Title",
    //     "position": "1x1",
    //     "preset": "preset_name"
    //   }
    // }

    return (
      <div className="list-none flex lg:justify-end text-start lg:items-start items-center lg:w-1/2 lg:pt-10 lg:py-6 py-10 flex-col"
        dangerouslySetInnerHTML={{ __html: props.singleItem.wysiwyg }} />
    )
  };
  
  export default FooterMenu;
  