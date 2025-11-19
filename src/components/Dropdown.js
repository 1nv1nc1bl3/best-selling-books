import List from './List';

export default function DropDown({
    selectedCategory,
    handlePickCategory,
    lists,
}) {
    return (
        <section className='categories-list'>
            <select
                name='select-block'
                value={!selectedCategory ? '' : selectedCategory.list_id}
                className='list-container'
                onChange={(e) => {
                    // sends ID back to BookList
                    handlePickCategory(Number(e.target.value));
                }}
            >
                {/* Default option */}
                <option value='' disabled>
                    Select a category
                </option>

                {/* every list → <option> through List component */}
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
