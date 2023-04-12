const SolutionsCard = (props) => {
    // let props = {
    //     "preset": "SampleCard",
    //     "singleItem": {
    //         "title": "Card 1",
    //         "subtitle": "Subtitle",
    //         "image": {
    //             "url": "",
    //             "alt": "",
    //             "focalPoint": {
    //                 "x": 0.5,
    //                 "y": 0.5
    //             }
    //         },
    //         "ctaCaption": "See More",
    //         "ctaLink": "#",
    //         "index": 0
    //     }
    // }
    return (
        <>
            {
                (props.singleItem.title || props.singleItem.subtitle || props.singleItem.image?.url) &&
                <div className={`flex flex-col items-center`}>
                    {
                        props.singleItem.image?.url &&
                                <img src={props.singleItem.image.url} className={`flex justify-center w-20 h-20 mt-0 m-5`}
                                    style={{ objectPosition: props.singleItem.image.url && props.singleItem.image.focalPoint?.x && props.singleItem.image.focalPoint?.y && `${props.singleItem.image.focalPoint.x * 100}% ${props.singleItem.image.focalPoint.y * 100}%` }}
                                />
                    }
                    {
                        props.singleItem.title &&
                        <div className={`text-center text-white text-lg`} dangerouslySetInnerHTML={{ __html: props.singleItem.title }} />
                    }
                </div>
            }
        </>
    )
}

export default SolutionsCard