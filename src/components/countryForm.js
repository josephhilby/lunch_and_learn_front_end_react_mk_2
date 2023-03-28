import CountriesList from "../assets/countriesList";

export default function CountryForm() {
  const countries_list = CountriesList()


  return(
    <div className="row">
      <form>
        <div className="mb-2">
          <label htmlFor="country_select" className="from-label">Select a Country</label>
          <select id="country_select" className="form-select" aria-label="Default select example" data-live-search="true">
            {
              countries_list.map((country) => (
                <option key={country.name} value={country.name}>{country.name}</option>
              ))
            }
          </select>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-primary">Submit</button> &nbsp;
          <button type="submit" className="btn btn-secondary">I'm Feeling Lucky</button>
        </div>
      </form>
    </div>
  )
}