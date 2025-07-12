import { render } from 'preact'
import { App } from './app.tsx'

document.addEventListener('DOMContentLoaded', ()=> {
    const root = document.querySelector('#transformation')

    if (root) {
        render(<App />, root!)
    }
})
