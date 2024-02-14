import {Item, CraftingData} from "@/types/crafting";
import ItemComponent from "@/components/ItemComponent";
import {getData} from "@/utils/data";

export const metadata = {
    title: 'Infinite Craft Recipes',
}

export default async function Home() {
    const data: CraftingData = await getData();
    // data.items is an object with keys as item names and values as Item objects

    return <main className="flex flex-col">
        <div className="bg-[#fef9c3] w-full h-64"></div>
        <div className="p-8">
            <div className="flex items-center gap-4  w-full justify-center">
                <span className="text-4xl">🔨</span>
                <h1 className="text-4xl font-bold text-slate-800">Infinite Craft Recipes</h1>
            </div>

            <div className="flex justify-center mb-10 mt-2">
                <p>This is a frontend for my <a className="text-blue-400" href="https://github.com/BlueFalconHD/infinitecraftrecipes">infinitecraftrecipes</a> project. Please note this doesn't find all recipes, just ones with its current pool of items.</p>
            </div>

            <div className="flex flex-row flex-wrap gap-2">
                {Object.values(data.items).map((item, index) => (
                    <ItemComponent key={index} item={item} />
                ))}
            </div>
        </div>
    </main>
}