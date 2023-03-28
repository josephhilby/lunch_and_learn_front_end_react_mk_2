import MockRecipes from "../fixtures/mockReturnThailand";
import FavoriteButton from "./favoriteButton"

export default function RecipeCards() {
  const recipes = MockRecipes().data


  return (
    <div className="row d-inline-flex justify-content-around m-1">
      {
        recipes.length === 0 ?
          <p></p>
          :
          recipes.map((recipe) => (
            <div key={recipe.attributes.title} className="card shadow mb-4 p-1 border border-2 position-relative" style={{ width: '15rem' }}>
              <div className="position-absolute top-10 start-25 translate-middle badge rounded-circle">
                <FavoriteButton recipeInfo={recipe}/>
              </div>
              <img src={recipe.attributes.image} className="card-img-top" alt={recipe.attributes.title} />
              <div className="card-body text-center">
                <h6 className="card-title">{recipe.attributes.title}</h6>
              </div>
            </div>
          ))
      }
    </div>
  )
}