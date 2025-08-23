import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

const Clerk_Publishable_Key: string = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!Clerk_Publishable_Key) {
    throw new Error('Clerk not Configured!')
}

createRoot(document.getElementById('root')!).render(
    <ClerkProvider publishableKey={Clerk_Publishable_Key}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </ClerkProvider>
)