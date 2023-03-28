import Favorites from "../components/favorites";
import CountryForm from "../components/countryForm";
import RecipeCards from "../components/recipeCards";

export default function Dashboard() {
  return (
    <div className="container d-flex p-0">
      <br/>
      <div className="row">
        <div className="col-2 border rounded p-3">
          <Favorites/>
        </div>
        <div className="col">
          <CountryForm/>
          <RecipeCards/>
        </div>
      </div>
    </div>
  )
}