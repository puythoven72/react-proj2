


function Search(props) {


    return (
        <div className ="container-fluid ">
        <form className = "needs-validation search-form" noValidate>

            <div className="row ">
                <div className ="col-md-12 col-lg-10"> 
                <input type="text" className="form-control" placeholder="Enter Search Criteria" aria-label="Search" id="searchInput" required minLength="5" maxLength = "30" onChange={props.handleSearchInput}/>
                    <div className="valid-feedback">Valid.</div>
                    <div className="invalid-feedback">Please Enter Valid Search Criteria.</div>

                </div>
                <div className="col-md-12 col-lg-2"> 
                <button type="button" className="btn btn-primary  web-search " id="searchButton" onClick={props.handleSearch}>Search</button></div>
            </div>

            <div className="radio-div col-lg-6 col-md-12 d-lg-inline-flex d-flex justify-content-lg-center">

                <div className="form-check form-check-inline">
                    <input type="radio" id="gif" name="type" value="Gif" defaultChecked  onClick={props.handleOption} />
                    <label htmlFor ="gif">Gif</label>
                </div>

                <div className="form-check form-check-inline">
                    <input type="radio" id="sticker" name="type" value="Sticker" onClick={props.handleOption}/>
                    <label htmlFor ="sticker">Sticker</label>
                </div>
            </div>

            <div className="col-lg-3 col-md-12 d-lg-inline-flex d-md-block amt-input">
                <div className="  d-lg-block col-lg-12 ">
                    <div className="d-lg-block">
                        <input type="number" onChange={props.handleSearchAmt} className="form-control" placeholder="Number Of Items" aria-label="Search Count" id="searchCount" required minLength="1" maxLength = "3"/>

                        <div className="valid-feedback">Valid.</div>
                        <div className="invalid-feedback ">Please Enter an Amt (1-50).</div>
                    </div>
                </div>
            </div>

            <div className="d-grid gap-2 mobile-search">
                <button className="btn btn-primary mobile-search" onClick={props.handleSearch} type="button">Search</button>

            </div>

            <div className="row">
                <div className=" d-flex justify-content-center">
                    <div id="return-count" className="col-md-2"></div>
                </div>
            </div>

        </form>
    </div>
    );


}

export default Search;