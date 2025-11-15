export default function List({ list }) {
    const { display_name, list_id } = list;
    return (
        <option value={list_id}>
            {list_id} - {display_name}
        </option>
    );
}
