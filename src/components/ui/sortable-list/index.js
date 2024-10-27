"use client";
import React, { useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./sortable-item";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

const SortableList = () => {
  const [items, setItems] = useState(
    Array.from({ length: 10 }, (_, i) => i + 1)
  );
  const [lockedItems, setLockedItems] = useState([]);
  const [swapSelection, setSwapSelection] = useState(null);

  const sensors = useSensors(
    useSensor(TouchSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const handleLockToggle = (id) => {
    setLockedItems((prevLockedItems) =>
      prevLockedItems.includes(id)
        ? prevLockedItems.filter((item) => item !== id)
        : [...prevLockedItems, id]
    );
  };

  const handleSwap = (id) => {
    if (swapSelection === null) {
      if (!lockedItems.includes(id)) setSwapSelection(id); // Select only if item is not locked
    } else {
      if (!lockedItems.includes(id) && id !== swapSelection) {
        // Perform the swap only if both items are unlocked
        setItems((items) => {
          const index1 = items.indexOf(swapSelection);
          const index2 = items.indexOf(id);
          const newItems = [...items];

          // Swap items
          [newItems[index1], newItems[index2]] = [
            newItems[index2],
            newItems[index1],
          ];

          return newItems;
        });
      }
      setSwapSelection(null); // Reset swap selection
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;

    if (active.id !== over.id && !lockedItems.includes(active.id)) {
      setItems((items) => {
        const unlockedItems = items.filter((id) => !lockedItems.includes(id));
        const oldIndex = unlockedItems.indexOf(active.id);
        const newIndex = unlockedItems.indexOf(over.id);
        const newOrder = arrayMove(unlockedItems, oldIndex, newIndex);

        return items.map((id) =>
          lockedItems.includes(id) ? id : newOrder.shift()
        );
      });
    }
  };

  return (
    <div className="p-4">
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        modifiers={[restrictToVerticalAxis]}
      >
        <SortableContext items={items} strategy={verticalListSortingStrategy}>
          {items.map((id, idx) => (
            <SortableItem
              key={id}
              id={id}
              idx={idx}
              isLocked={lockedItems.includes(id)}
              onLockToggle={handleLockToggle}
              onSwap={handleSwap}
              isSwapping={id === swapSelection} // Pass down swap status
            />
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export { SortableList };
