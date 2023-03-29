const SampleCard = (props) => {
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
                <div className={`text-center`}>
                    {
                        props.singleItem.image?.url &&
                                <img src={props.singleItem.image.url} className={`object-cover w-full h-full`}
                                    style={{ objectPosition: props.singleItem.image.url && props.singleItem.image.focalPoint?.x && props.singleItem.image.focalPoint?.y && `${props.singleItem.image.focalPoint.x * 100}% ${props.singleItem.image.focalPoint.y * 100}%` }}
                                />
                    }
                    {
                        props.singleItem.title &&
                        <div className={`text-xl xs2:text-2xl sm:text-3xl font-bold text-blue-1`} dangerouslySetInnerHTML={{ __html: props.singleItem.title }} />
                    }
                    {
                        props.singleItem.subtitle &&
                        <div className="mt-2 sm:mt-3 leading-snug" dangerouslySetInnerHTML={{ __html: props.singleItem.subtitle }} />
                    }
                </div>
            }
        </>
    )
}

export default SampleCard