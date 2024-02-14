import RecipeComponent from "@/components/RecipeComponent";
import {Item} from "@/types/crafting";
import {getItem, getRecipe, filterEmptyStrings} from "@/utils/data";

export default async function Page({ params }: { params: { name: string } }) {
    const item: Item = await getItem(decodeURIComponent(params.name));

    return <main className="flex flex-col">
        <div className="bg-[#93c5fd] w-full h-64"></div>
        <div className="p-8">
            <div className="flex items-center gap-4 mb-10 w-full justify-center">
                <span className="text-4xl">{item.emoji}</span>
                <h1 className="text-4xl font-bold text-slate-800">{item.name}</h1>
            </div>
            <div className="flex flex-row flex-wrap gap-2 justify-center">
                {filterEmptyStrings(item.recipes).map(async (recipe, index) => {

                    const recipeData = await getRecipe(recipe);
                    const firstItem = await getItem(recipeData.first);
                    const secondItem = await getItem(recipeData.second);

                    return <RecipeComponent key={index} firstItem={firstItem} secondItem={secondItem} />
                })}
            </div>
        </div>
    </main>
}