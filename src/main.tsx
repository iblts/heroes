import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HeroesList } from './features/select-hero/heroes-list'
import './index.css'

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<HeroesList />
	</StrictMode>
)
