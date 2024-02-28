import React, {useState} from 'react'

export default function DropDown({title, items= [], multiSelect = false}) {
    const[open, setOpen] = useState(false);
    const [select, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item){
        
    }

  return (
    <div className='dropDownSpace'>
      <div className='dropDown' tabIndex = {0} role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
        <div className='dropDownTitle'>{title}</div>
        <div className='dropDownOpen'>{open ? '↓' : '↑'}</div>
        {open && (
            <ul>{items.map(item => (
                <li key = {item.id}>
                    <button className='navButton' onClick={() => handleOnClick(item)}>
                        <span>{item.name}</span>
                    </button>
                </li>
            ))}</ul>
        )}
      </div>
    </div>
  )
}
