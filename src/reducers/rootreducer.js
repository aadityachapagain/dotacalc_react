const initState = {
    heros: []
}

const rootReducer = (state = initState, action ) => {
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter(post => {
            return action.id !== post.id
        })
        return {
            ...state,
            posts:newPosts
        }
    }

    if (action.type === 'ADD_TODO'){
        return {
            ...state,
            todos:[...state.todos, {id:Math.random(),content: action.todo}]
        }
    }

    if (action.type === 'DELETE_TODO'){
        let newTodos = state.todos.filter(todo => {
            return action.id !== todo.id
        })
        return {
            ...state,
            todos: newTodos
        }
    }
    return state;
}

export default rootReducer