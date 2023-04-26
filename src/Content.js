import { useState } from "react";
import AddList from './AddList';


import { FaTrashAlt } from "react-icons/fa";

const Content = () => {

    const MainList = [
        {
            id: 1,
            checked: true,
            item: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: 2,
            checked: false,
            item: "Aliquam viverra convallis auctor."
        },
        {
            id: 3,
            checked: false,
            item: "Sed accumsan libero quis mi commodo et suscipit enim lacinia."
        }
    ]

    const [items, setItems] = useState(MainList);

    const t = 'HI IT YOUR TIME'
    const r = 'OKEY LET STARTED'
    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')

    const setItemsSave = (newItems) => {
        localStorage.setItem('shoppinglist', JSON.stringify(newItems));
    }
    const AddItem = (item) => {
        const id = items.length ? items[items.length - 1].id + 1 : 1;
        const MyNewItem = { id, checked: false, item };
        const listItems = [...items, MyNewItem];
        setItems(listItems);
        setItemsSave(listItems)
    }
    const [state, setstate] = useState(false);
    const [info, setInfo] = useState(false);
    const handleClick = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
        setItems(listItems);
        setItemsSave(listItems)
    }
    const handlDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        setItemsSave(listItems)
    }
    const onPush = () => {
        setstate(!state)
    }
    const changeClick = () => {
        const s = 'Over 500+ professionally designed, fully responsive, expertly crafted component examples you can drop into your Tailwind projects and customize to your heart’s content.'
        return setInfo(s)
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        AddItem(newItem);
        setNewItem('');
    }

    const [filteredList, setFilteredList] = useState(MainList);

    const filterBySearch = (event) => {
        // Access input value
        const query = event.target.value;
        // Create copy of item list
        let updatedList = [...MainList];
        // Include all elements which includes the search query
        updatedList = updatedList.filter((item) => {
            return item.toString().toLowerCase().indexOf(query.toString().toLowerCase()) !== -1;
        });
        // Trigger render with updated values
        setFilteredList(updatedList);
    };

    return (
        <div className={state ? 'block-color' : 'colorChange'}>
            <div className='content conteiner'>
                {/* <h1 className="content">{state ? t : r}</h1> */}
                <p className={state ? 'block-color block-colorText p-0' : 'colorChange colorChangeText p-0'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed faucibus.consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis mi commodo et suscipit enim lacinia.</p>
                <h1 onClick={onPush} className={state ? ' push' : ' pushChange'} >Change</h1>
            </div>
            <p className="content-state conteiner">{state}</p>
            <div className='content conteiner'>
                
                <p className={state ? ' block-colorText' : ' colorChangeText'}>{info}</p>
                <h1 onClick={changeClick} className={state ? ' push' : ' pushChange'} >Mor informations</h1>
               
                <div className="search-header">
                    <div className="search-text">Search:</div>
                    <input id="search-box" onChange={filterBySearch} />
                </div>
                <div id="item-list">
                    <ol>
                   { filteredList.item}
           
          
                    </ol>
                </div>
                <AddList
                    newItem={newItem}
                    setNewItem={setNewItem}
                    handlerSubmit={handlerSubmit}
                />

                {items.length ? (
                    <div className="block-input">
                        <ul>
                            {items.map((item) => (
                                <li className="item" key={item.id}>
                                    <input type="checkbox"
                                        checked={item.checked}
                                        onChange={() => handleClick(item.id)}

                                    />

                                    <label
                                        style={(item.checked) ? { textDecoration: 'line-through' } : null}
                                        onDoubleClick={() => handleClick(item.id)}
                                    >{item.item}</label>
                                    <FaTrashAlt role="button"
                                        tabIndex="0"
                                        onClick={() => handlDelete(item.id)}
                                    />
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <h1>Your list is empty.</h1>
                )}
            </div>
        </div>

    )
}
export default Content;