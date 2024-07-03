import React from 'react'
import Review from '../Review/Review'

function Home() {
    return (
        <main>
            <section className='container'>
                <div className="title">
                    <h2>Review blog app</h2>
                    <div className="underline"></div>
                    <Review />
                </div>
            </section>
        </main>
    )
}

export default Home