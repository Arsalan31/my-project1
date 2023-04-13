const AboutExtraText = (props) => {

    return (
        <div className={`relative overflow-hidden`}
            style={{
                height: props.singleItem.expandableWysiwygHeight,
                transitionDuration: props.singleItem.expandableWysiwygTransitionDuration
            }}
        >
            {
                props.singleItem.limitedWysiwyg &&
                <div ref={el => props.singleItem.collapsedWysiwygRef && (props.singleItem.collapsedWysiwygRef.current[props.singleItem.buttonId] = el)} className={`${props.singleItem.collapsedWysiwygClass} ${props.singleItem.showExpandedWysiwyg ? "absolute invisible" : ""} container mx-auto flex flex-col justify-center text-lg font-light text-gray-15 px-5`}
                    dangerouslySetInnerHTML={{ __html: props.singleItem.limitedWysiwyg }}
                    style={{
                        ...props.singleItem.collapsedWysiwygStyle
                    }} />
            }
            {
                props.singleItem.wysiwyg &&
                <div ref={el => props.singleItem.expandedWysiwygRef && (props.singleItem.expandedWysiwygRef.current[props.singleItem.buttonId] = el)} className={`${(props.singleItem.showExpandedWysiwyg || !props.singleItem.limitedWysiwyg) ? "" : "absolute invisible"} container mx-auto flex flex-col justify-center text-lg font-light text-gray-15 px-5`}
                    dangerouslySetInnerHTML={{ __html: props.singleItem.wysiwyg }}
                    style={{
                    }} />
            }
        </div>
    )
};

export default AboutExtraText;