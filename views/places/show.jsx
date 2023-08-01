const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>
            <div>
            <h3>Rating</h3>
            <p>No rating</p>
            </div>
            <div>
            <h3>Comments</h3>
            <p>No Comments</p>
            </div>
          </main>
        </Def>
    )
}

module.exports = show

