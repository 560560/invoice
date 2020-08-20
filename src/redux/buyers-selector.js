export const getBuyersSelector = (state) => {
    let sortingField = state.buyersPage.sortingBy
    if (state.buyersPage.nameSearchSelector && state.buyersPage.buyers) {
        return [...state.buyersPage.buyers]
            .filter(buyer => buyer.name.toLowerCase().includes(state.buyersPage.nameSearchSelector))
            .sort((prev, next) => {
                if (state.buyersPage.sortingFlow === "increase") return prev[sortingField] - next[sortingField]
                else if (state.buyersPage.sortingFlow === "decrease") return next[sortingField] - prev[sortingField]
            })
    } else
        return [...state.buyersPage.buyers]
            .sort((prev, next) => {
                if (state.buyersPage.sortingFlow === "increase") return prev[sortingField] - next[sortingField]
                else if (state.buyersPage.sortingFlow === "decrease") return next[sortingField] - prev[sortingField]
            })
}
