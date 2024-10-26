"use client";
import React from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

export function SortableItem(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...workers}
      className="h-20 my-2 bg-blue-200 flex items-center justify-center"
    >
      <div className="text-4xl text-gray-600 font-extrabold">{props.id}</div>
    </div>
  );
}
