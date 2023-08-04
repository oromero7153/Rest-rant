const React = require('react')
const Def = require('../default')

function new_form(data) {
  let message = ''
  if (data.message){
    message = (
      <h4 className="alert-danger">
        {data.message}
      </h4>
    )
  }
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        {message}
        <form method="POST" action="/places">
          <div>
            <label htmlFor="name">Place Name</label>
            <input id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="founded">Founded Year</label>
            <input type='number' className="form-control" id="founded" name="founded" value= {new Date().getFullYear()} />
          </div>
          <div>
            <label htmlFor="pic">Place Picture</label>
            <input id="pic" name="pic" />
          </div>
          <div>
            <label htmlFor="city">City</label>
            <input id="city" name="city" />
          </div>
          <div>
            <label htmlFor="state">State</label>
            <input id="state" name="state" />
          </div>
          <div>
            <label htmlFor="cuisines">Cuisines</label>
            <input id="cuisines" name="cuisines" required />
          </div>
          <input type="submit" value="Add Place" />
        </form>

      </main>
    </Def>
  )
}

module.exports = new_form
