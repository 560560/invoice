const SET_NAME_SEARCH_SELECTOR = "buyers-selector/SET_NAME_SEARCH_SELECTOR"
const SET_SORTING = "buyers-selector/SET_SORTING"

let initialState = {

    buyers: [
        {id: 0, name: "Жора", averageCheck: 5204, purchaseCount: 7, totalRevenue: 38043},
        {id: 1, name: "Маша", averageCheck: 2100, purchaseCount: 3, totalRevenue: 7020},
        {id: 2, name: "Сеня", averageCheck: 4407, purchaseCount: 4, totalRevenue: 17030},
        {id: 3, name: "Вова", averageCheck: 2200, purchaseCount: 10, totalRevenue: 42000},
        {id: 4, name: "Лена", averageCheck: 5320, purchaseCount: 2, totalRevenue: 9897},
        {id: 5, name: "Оля", averageCheck: 1260, purchaseCount: 3, totalRevenue: 4120},
        {id: 6, name: "Костя", averageCheck: 6350, purchaseCount: 11, totalRevenue: 78040},
        {id: 7, name: "Света", averageCheck: 5200, purchaseCount: 8, totalRevenue: 42000},
        {id: 8, name: "Жора", averageCheck: 1250, purchaseCount: 9, totalRevenue: 42000},
        {id: 9, name: "Вова", averageCheck: 2240, purchaseCount: 6, totalRevenue: 12780},
        {id: 10, name: "Оля", averageCheck: 7200, purchaseCount: 7, totalRevenue: 53400},
        {id: 11, name: "Михаил", averageCheck: 5200, purchaseCount: 5, totalRevenue: 26200},
        {id: 12, name: "Марина", averageCheck: 5200, purchaseCount: 12, totalRevenue: 61700},
        {id: 13, name: "Вова", averageCheck: 13600, purchaseCount: 12, totalRevenue: 162000},
        {id: 14, name: "Жора", averageCheck: 6100, purchaseCount: 3, totalRevenue: 17980},
    ],
    nameSearchSelector: null,
    sortingBy: "id",
    sortingFlow: "increase"
}

let buyersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NAME_SEARCH_SELECTOR:
            return {
                ...state,
                nameSearchSelector: action.payload
            }
        case SET_SORTING :
            return {
                ...state,
                sortingBy: action.field,
                sortingFlow: action.flow
            }

        default :
            return state
    }
}

export const setNameSearchSelector = (payload) => {
    return {type: SET_NAME_SEARCH_SELECTOR, payload}
}

export const setSorting = (field, flow) => {
    return {type: SET_SORTING, field, flow}
}

export default buyersReducer