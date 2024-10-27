"use client";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem({
  id,
  idx,
  isLocked,
  onLockToggle,
  onSwap,
  isSwapping,
}) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id, disabled: isLocked });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition: transition || "transform 0.3s ease", // Smooth slide on swap
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`h-20 my-2 ${
        isLocked ? "bg-red-400" : "bg-blue-200"
      } flex items-center justify-between px-4 ${isSwapping ? "lifted" : ""}`} // Apply lifted effect if needed
    >
      <div className="text-4xl text-gray-600 font-extrabold">
        {idx + "--" + id}
      </div>
      <button onClick={() => onLockToggle(id)}>
        {isLocked ? "Unlock" : "Lock"}
      </button>
      {!isLocked && <button onClick={() => onSwap(id)}>Swap</button>}
      <div {...(isLocked ? {} : { ...attributes, ...listeners })}>drag me</div>
    </div>
  );
}
