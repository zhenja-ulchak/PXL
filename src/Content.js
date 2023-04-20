import { useState } from "react";
import AddList from './AddList';
import SearchList from './Search';

import { FaTrashAlt } from "react-icons/fa";

const Content = () => {

    const [items, setItems] = useState([
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
    ]);

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
        return setstate(s)
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (!newItem) return;
        AddItem(newItem);
        setNewItem('');
    }

const per = () => {
    
}


    return (
        <div className={state ? 'block-color' : 'colorChange'}>
            <div className='content conteiner'>
                <h1 className="content">{state ? t : r}</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis mi commodo et suscipit enim lacinia. Morbi rutrum vulputate est sed faucibus.consectetur adipiscing elit. Aliquam viverra convallis auctor. Sed accumsan libero quis mi commodo et suscipit enim lacinia.</p>
                <h1 onClick={onPush} className="push" >push</h1>
            </div>
            <p className="content-state conteiner">{state}</p>
            <div className='content conteiner'>
                <h1 className="content">The title on the article</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam viverra convallis auctor. Sed accumsan libero
                    quis mi commodo et suscipit enim lacinia. Morbi rutrum
                    vulputate est sed faucibus.consectetur adipiscing elit.
                    Aliquam viverra convallis auctor. Sed accumsan libero
                    quis mi commodo et suscipit enim lacinia.</p>
                <h1 onClick={changeClick} className="push" >push2</h1>
                <SearchList
                    search={search}
                    setSearch={setSearch}
                />
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