import ReactDOM from 'react-dom/client'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App/App'

import { rootReducer } from './redux/rootReducer'

// const composeEnhancers =
//     typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//         ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//               // Specify extension’s options like name, actionsDenylist, actionsCreators, serialize...
//           })
//         : compose

// const enhancer = composeEnhancers(
//     applyMiddleware(thunk)
//     // other store enhancers if any
// )
// const store = createStore(rootReducer, enhancer)

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

// const store = createStore(
//     rootReducer,
//     compose(applyMiddleware(thunk) window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
// )

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
