import MockFavorite from "../fixtures/mockReturnFavorite";

export default function Favorites() {
  const favorites = MockFavorite().data

  return (
    <div>
      <h2>
        <div className="mb-1 mt-1 text-center border border-primary rounded position-relative">
          <h5 className="m-1 fw-bold overflow-hidden">Favorites</h5>
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger fs-6">{favorites.length}</span>
        </div>
      </h2>
      <div className="">
        {
          favorites.length === 0 ?
            <div className="nav-item">
              <p className="nav-link active" aria-current="page">No Favorites</p>
            </div>
            :
            favorites.map((favorite) => (
              <div key={favorite.id} className="card mb-1 text-center border">
                <a className="nav-link active m-1" aria-current="page" href={favorite.attributes.recipe_link}>{favorite.attributes.recipe_title}</a>
              </div>
            ))
        }
      </div>
    </div>
  )
}