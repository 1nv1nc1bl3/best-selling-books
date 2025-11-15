import List from './List.jsx';

export default function Dropdown({
    selectedCategory,
    handlePickCategory,
    lists,
}) {
    return (
        <section className='categories-list'>
            <select
                value={!selectedCategory ? '' : selectedCategory.list_id}
                className='list-container'
                onChange={(e) => {
                    handlePickCategory(Number(e.target.value));
                }}
            >
                <option value='' disabled>
                    Select a category
                </option>
                {lists.map((list) => {
                    return (
                        <List
                            selectedCategory={selectedCategory}
                            key={list.list_id}
                            list={list}
                        />
                    );
                })}
            </select>
        </section>
    );
}
