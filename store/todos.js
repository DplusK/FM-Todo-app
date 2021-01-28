export const state = () => ({
    list: [],
    fullList: [],
    state: 'all'
})

export const mutations = {
    add(state, text) {
        state.fullList.push({
            text,
            done: false
        })
        state.list = state.fullList
    },
    remove(state, { todo }) {
        state.fullList.splice(state.fullList.indexOf(todo), 1)
    },
    toggle(state, todo) {
        todo.done = !todo.done
    },
    all(state) {
        state.list = state.fullList
        state.state = 'all'
    },
    completed(state) {
        state.list = state.fullList.filter(todo => todo.done == true)
        state.state = 'completed'
    },
    active(state) {
        state.list = (state.fullList.filter(todo => todo.done == false))
        state.state = 'active'
    },
    clear(state) {
        state.fullList = state.fullList.filter(todo => todo.done == false)
        state.list = state.fullList
    }
}