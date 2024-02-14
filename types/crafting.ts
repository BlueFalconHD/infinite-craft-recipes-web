export type Item = {
    emoji: string
    name: string
    recipes: string[]
}

export type Recipe = {
    first: string
    second: string
    result: string
}

export type CraftingData = {
    // object with keys of type string and values of type Item
    items: Record<string, Item>,
    recipes: Record<string, Recipe>
};
