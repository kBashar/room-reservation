
interface ComboBoxProps {
    selected: string
    name: string
    label: string
    values: string[]
    valueChangeListener: (e: ChangeEventHandler)=>void
}

export const ComboBox = ({selected, name, label, values, valueChangeListener}: ComboBoxProps) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select name={name} id={name} onChange={valueChangeListener} value={selected}>
                {
                    values.map(value => <option value={value} key={value}>{value}</option>)
                } 
            </select>
        </div>
    )
}