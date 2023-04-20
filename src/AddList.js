import { FaPlus } from 'react-icons/fa'
const AddList = ({newItem, setNewItem, handlerSubmit}) => {
    return (
        <form className="addForm" onSubmit={handlerSubmit}>
            <label htmlFor="addItem">
                ADD
            </label>
            <input
                autoFocus
                id="addItem"
                type="text"
                placeholder="Add text"
                required
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
            />
            <button
                type="submit"
                aria-label="Add items text"
            >
                <FaPlus />
            </button>
        </form>
    )

}
export default AddList;