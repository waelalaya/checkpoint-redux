import { createStore } from 'redux'
import Todoreducer from '../Reducer/Reducer'



const Store = createStore(Todoreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)
export default Store;