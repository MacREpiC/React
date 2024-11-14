import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App () {
    return (
        <section className="App">
            <TwitterFollowCard userName="MacREpiC8Z">
                Alejandro Melero Zhohal
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing userName="midudev">
                Miguel Ángel Durán 
            </TwitterFollowCard>
            <TwitterFollowCard userName="SpaceX">
                SpaceX
            </TwitterFollowCard>
        </section>
    )
}