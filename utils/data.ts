import {promises as fs} from "fs";
import {CraftingData} from "@/types/crafting";
import path from "path";

// cached data
let cdata: CraftingData;

export async function getData() {

    if (cdata) {
        return cdata;
    }

    const fpath = path.join(process.cwd(), 'crafting_data.json')
    const response = await fs.readFile(fpath, 'utf8');
    const data: CraftingData = JSON.parse(response);
    cdata = data;
    return data;
}

export async function getItem(id: string) {
    // fetch the item data from the server
    const data = await getData();

    if (!data.items[id]) { throw new Error("Item not found") }
    return data.items[id];
}

export async function getRecipe(id: string) {
    // fetch the item data from the server
    const data = await getData()
    if (!data.recipes[id]) { throw new Error("Item not found") }

    return data.recipes[id];
}

// filter function to remove empty strings from an array
export function filterEmptyStrings(arr: string[]) {
    return arr.filter((item) => item !== '');
}