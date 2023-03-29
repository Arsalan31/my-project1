import styles from '../Input1/Input1.module.css'

const Input1 = (props) => {
    return (
        <div className={`${styles.Input1} `}>
            {
                props.item.fieldTitle &&
                <label htmlFor={props.item.fieldId}>
                    {props.item.fieldTitle + `${props.item.required ? " *" : ""}`}
                </label>
            }
            <textarea id={props.item.fieldId} name={props.item.fieldId} rows={props.item.minRow} onChange={(e) => { props.handleChange(e) }} className={"w-full infoBlock_webform_input-field input-field infoBlock_webform_input-textarea textarea " + (props.error ? 'infoBlock_webform_input-error input-error' : '')} placeholder={props.item.placeholder} ></textarea>
            {props.error && <div className='infoBlock_webform_error-message error-message text-xs text-red-500 text-start'>{props.error}</div>}
        </div>
    )
}
export default Input1