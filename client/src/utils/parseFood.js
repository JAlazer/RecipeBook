// turns fooditems into
// [{ foodName, foodQuantity }...] for rendering.
export default function parseFoodsList(rawFoodItem) {
    if (!rawFoodItem) return []
    if (Array.isArray(rawFoodItem)) return rawFoodItem
    const matches = rawFoodItem.match(/\(([^)]+)\)/g) || []
    return matches.map((entry) => {
        const [foodName, foodQuantity] = entry.slice(1, -1).split(',')
        return { foodName, foodQuantity }
    })
}

