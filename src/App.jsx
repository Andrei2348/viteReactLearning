import Header from './components/header/Header'
import './App.css'
import TeachingSection from './components/TeachingSection'
import DifferencesSection from './components/DifferencesSection'
import { Fragment } from 'react'
import IntroSection from './components/IntroSection'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'
import EffectSection from './components/EffectSection'
import { useState } from 'react'

function getNumber() {
    let a = 1
    return a
}


function App() {
    const [tab, setTab] = useState('effect')

    return (
        <Fragment>
            <Header />
            <main>
                <h1>hello react!!!</h1>
                <IntroSection />
                {/* Переключение между табами */}
                <TabsSection active={tab} onChange={(current) => setTab(current)}/>
                {tab == 'main' && (
                    <>
                        <TeachingSection />
                        <DifferencesSection />
                    </>
                )}
                {tab == 'feedback' && <FeedbackSection />}
                {tab == 'effect' && <EffectSection />}
            </main>
        </Fragment>
    )
}

export default App
