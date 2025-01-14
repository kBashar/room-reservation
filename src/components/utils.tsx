
interface ComboBoxProps {
    name: string
    label: string
    values: string[]
    valueChangeListener: (e: ChangeEventHandler)=>void
}

export const ComboBox = ({name, label, values, valueChangeListener}: ComboBoxProps) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} onChange={valueChangeListener}>
                {
                    values.map(value => <option value={value} key={value}>{value}</option>)
                } 
            </select>
        </div>
    )
}