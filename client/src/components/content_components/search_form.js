import React from 'react';

class SearchForm extends React.Component {
  render() {
    return(
      <div className="vehicle-search--wrap">
        <form className="search-box" action="/search" method="get">
          <div>
            <div class="search-box--wrap">
                <input
                  className="search-box--input"
                  id="FreeText"
                  name="free_text"
                  placeholder="Search All Cars By Make, Model, or Keyword"
                  type="text" value=""
                />
                <button className="search-box--wrap--btn" type="submit">
                    <svg className="search-box--wrap--btn--search" role="img" viewBox="0 0 29.013 29.013">
                        <path d="M28.482 25.917l-8.742-8.74a10.8 10.8 0 0 0 2.02-6.297C21.76 4.87 16.889 0 10.88 0S0 4.87 0 10.88c0 6.008 4.871 10.881 10.88 10.881 2.349 0 4.521-.754 6.297-2.02l8.741 8.74a1.811 1.811 0 0 0 2.564 0 1.815 1.815 0 0 0 0-2.564zM17.107 14.543a7.275 7.275 0 0 1-2.564 2.565c-1.078.635-2.32 1.024-3.663 1.024a7.253 7.253 0 1 1 7.253-7.254c-.001 1.345-.391 2.586-1.026 3.665z"></path>
                    </svg>
                </button>
                <span className="search-box--search-button"></span>
            </div>
          </div>
        </form>
    </div>
    );
  }
}

export default SearchForm;
