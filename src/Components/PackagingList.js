import { useState } from "react";
import Item from "./Item";
export default function PackagingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearAll,
}) {
  console.log(items);
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => Number(a.packed) - b.packed);
  if (sortBy === "quantity")
    sortedItems = items.slice().sort((a, b) => Number(a.quantity) - b.quantity);
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description </option>
          <option value="packed">Sort by Packed Status</option>
          <option value="quantity">Sort by Quantity</option>
        </select>
        <button
          onClick={() => {
            onClearAll();
          }}
        >
          Clear List
        </button>
      </div>
    </div>
  );
}
