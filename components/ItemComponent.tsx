'use client'
import {Item} from "@/types/crafting";

// takes in a Recipe as a prop
export default async function ItemComponent({ item } : {item: Item}) {
    return (
        <a href={`/items/${item.name}`}>
            <div className="flex bg-slate-100 border-slate-200 border text-base font-semibold rounded-xl flex-shrink gap-2 px-4 py-2 items-center transition hover:scale-105">
                <span>{item.emoji}</span>
                <span className="text-slate-600 font-normal">{item.name}</span>
            </div>
        </a>
    );
}