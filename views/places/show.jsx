const React = require('react')
const Def = require('../default')

function show(data) {
  let comments = (
    <h3 className="inactive">
      No comments yet!
    </h3>
  )
  if (data.place.comments.length) {
    comments = data.place.comments.map(c=>{
      return (
        <div className="border">
          <h2 className="rant">{c.rant ? 'Rant!😡': 'Rave!😻'}</h2>
          <h4>{c.content}</h4>
          <h3>
            <strong>- {c.author}</strong>
          </h3>
          <h4>Rating: {c.stars}</h4>
        </div>
      )
    })
  }
  return (
    <Def>
      <main>
        <h1>Add a New Place</h1>
        <div className="row">
          <div className="col-sm-6">
            <img src={data.place.pic} alt={data.place.name} />
            <h3>
              Located in {data.place.city}, {data.place.state}
            </h3>
          </div>
          <div className="col-sm-6">
            <h1>{data.place.name}</h1>
            <h2>
              Rating
            </h2>
            <h3 className="inactive">
              Not Rated
            </h3>
            <br />
            <h2>
              Description
            </h2>
            <h3>
              {data.place.showEstablished()}
            </h3>
            <h4>
              Serving {data.place.cuisines}
            </h4>
            <br />
            <a href={`/places/${data.place.id}/edit`} className="btn btn-warning">
              Edit
            </a>{` `}
            <form method="POST" action={`/places/${data.place.id}?_method=DELETE`}>
              <button type="submit" className="btn btn-danger">
                Delete
              </button>
            </form>
          </div>
        </div>
        <hr />
        <h2>Comments</h2>
        {comments}
        <form method="POST" action={ `/place/${data/place.id}/comment` }>
          <div className="row">
            <div className="col-sm-6">
              <label htmlFor="author">Author</label>
              <input id="author" name="author" className="form-control"></input>
            </div>
            <div className="col-sm-6">
              <label htmlFor="content">Content</label>
              <textarea id="content" name="content" className="form-control"></textarea>
            </div>
          </div>
        </form>
      </main>
    </Def>
  )
}
module.exports = show

