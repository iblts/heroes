import { Theme } from '@radix-ui/themes'
import '@radix-ui/themes/styles.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { store } from './lib/store'
import { GamePage } from './pages/game-page'
import { HomePage } from './pages/home-page'

const router = createBrowserRouter([
	{
		path: '/',
		Component: HomePage,
	},
	{
		path: '/game',
		Component: GamePage,
	},
])

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<Provider store={store}>
			<Theme>
				<RouterProvider router={router} />
			</Theme>
		</Provider>
	</StrictMode>
)
