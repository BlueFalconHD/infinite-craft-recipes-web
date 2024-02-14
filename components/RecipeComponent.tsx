'use client'
import {Item} from "@/types/crafting";

// takes in a Recipe as a prop
export default async function RecipeComponent({ firstItem, secondItem } : {firstItem: Item, secondItem: Item}) {
    return (
        <div className="flex bg-slate-100 border-slate-200 border text-base font-semibold rounded-xl flex-shrink gap-2 px-4 py-2 items-center h-[42px]">
            <span>{firstItem.emoji}</span>
            <span className="text-slate-600 font-normal">{firstItem.name}</span>
            <span className="text-slate-400">+</span>
            <span>{secondItem.emoji}</span>
            <span className="text-slate-600 font-normal">{secondItem.name}</span>
        </div>
    );
}