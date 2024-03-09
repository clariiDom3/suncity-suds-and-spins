import React, {useState} from 'react'
import Button from 'react-bootstrap/Button'

export default function DropDown({title, items= [], multiSelect = false}) {
    const[open, setOpen] = useState(false);
    const [select, setSelection] = useState([]);
    const toggle = () => setOpen(!open);

    function handleOnClick(item){
        
    }

  return (
    <div className='navButton'>
      <div tabIndex = {0} role="button" onKeyPress={() => toggle(!open)} onClick={() => toggle(!open)}>
        <div>{title}     </div>
        <div>{open ? '>' : '<'}</div>
        
        {open && (
            <ul>{items.map(item => (
                <li key = {item.id}>
                    <Button className='navButton' onClick={() => handleOnClick(item)}>
                        <span>{item.name}</span>
                    </Button>
                </li>
            ))}</ul>
        )}
      </div>
    </div>
  )
}
