import styles from '../Input2/Input2.module.css'

const Input2 = (props) => {
    return (
        <div className={`${styles.Input2} `}>
            {
                props.item.fieldTitle &&
                <label htmlFor={props.item.fieldId}>
                    {props.item.fieldTitle + `${props.item.required ? " *" : ""}`}
                </label>
            }
            <input id={props.item.fieldId} name={props.item.fieldId} type="text" onChange={(e) => { props.handleChange(e) }} className={"w-full infoBlock_webform_input-field  infoBlock_webform_input-text input-field input-text " + (props.error ? 'infoBlock_webform_input-error input-error' : '')} placeholder={props.item.placeholder} />
            {props.error && <div className='infoBlock_webform_input-error infoBlock_webform_error-message  input-error error-message text-xs text-red-500 text-start'>{props.error}</div>}
        </div>
    )
}

export default Input2