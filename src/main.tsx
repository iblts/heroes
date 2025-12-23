import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { store } from './lib/store'
import { HomePage } from './pages/home-page'

const router = createBrowserRouter([
	{
		path: '/',
		Component: HomePage,
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</StrictMode>
)
