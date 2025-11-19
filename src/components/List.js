export default function List({ list, selectedCategory }) {
    const { display_name, list_id } = list;

    // if is selected category → highlight
    const isSelected = list.list_id === selectedCategory?.list_id;

    return (
        <option value={list_id} className={isSelected ? 'selected' : ''}>
            {list_id} - {display_name}
        </option>
    );
}
