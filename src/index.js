import ReactDOM from 'react-dom/client'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App/App'

import { rootReducer } from './redux/rootReducer'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)
