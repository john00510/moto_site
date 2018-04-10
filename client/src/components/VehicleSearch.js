<div class="content">
  <div data-react="TypeAhead" class="vehicle-search--wrap">
    <form data-reactroot="" class="search-box" data-kmx="free-text-search">
      <div>
        <div class="search-box--wrap">
          <input autocomplete="off" name="FreeText" class="search-box--input" placeholder="Search All Cars By Make, Model, or Keyword" data-kmx="free-text-search-input" type="text" />
          <button type="submit" class="search-box--wrap--btn" data-kmx="free-text-search-submit">
            <svg class="search-box--wrap--btn--search" role="img" id="" viewBox="0 0 29.013 29.013">
              <path d="M28.482 25.917l-8.742-8.74a10.8 10.8 0 0 0 2.02-6.297C21.76 4.87 16.889 0 10.88 0S0 4.87 0 10.88c0 6.008 4.871 10.881 10.88 10.881 2.349 0 4.521-.754 6.297-2.02l8.741 8.74a1.811 1.811 0 0 0 2.564 0 1.815 1.815 0 0 0 0-2.564zM17.107 14.543a7.275 7.275 0 0 1-2.564 2.565c-1.078.635-2.32 1.024-3.663 1.024a7.253 7.253 0 1 1 7.253-7.254c-.001 1.345-.391 2.586-1.026 3.665z"></path>
            </svg>
          </button>
          <nav></nav>
        </div>
      </div>
    </form>
  </div>
  <div data-react="AdvancedSearchFlyouts">
    <div data-reactroot="" class="vehicle-search--wrap" data-kmx="vehicle-search">
      <div>
        <div class="advanced-box separator">
          <div class="advanced-box--label">or</div>
        </div>
      </div>
      <div class="advanced-box make-model ">
        <div class="advanced-box--label" data-kmx="make-model-search"><!-- react-text: 7 -->Make/Model<!-- /react-text -->
          <svg role="img" id="" viewBox="0 0 50 29.011">
            <path d="M49.498 5.284L26.152 28.511c-.303.299-.75.5-1.154.5-.4 0-.848-.201-1.15-.5L.502 5.284C.202 4.986 0 4.535 0 4.138s.202-.849.502-1.146L3.006.5c.303-.299.703-.5 1.155-.5.399 0 .849.201 1.15.499l19.687 19.588L44.688.499C44.99.201 45.439 0 45.844 0c.399 0 .848.201 1.15.499l2.504 2.492c.303.298.502.749.502 1.147s-.199.848-.502 1.146z"></path>
          </svg>
        </div>
        <div class="advanced-box--flyout hidden" data-kmx="make-model-search-list">
          <div class="make-model--flyout initial ">
            <div class="make-model--make-wrap "></div>
            <div class="make-model--model-wrap hidden">
              <div class="make-model--model-inner">
                <div class="make-model--model-head">
                  <span class="make-model--model-head--main-label">Select Models Below</span>
                  <div class="check-box ">
                    <input value="" type="hidden" />
                    <svg class="check-box--icon" role="img" id="" viewBox="0 0 18 15.003">
                      <path d="M18 2.847L5.952 15.003l-.084-.098-2.368-2.75L0 8.094l2.592-2.615 3.5 4.062L15.547 0 18 2.847z"></path>
                    </svg>
                  </div>
                  <span class="make-model--model-head--check-label">Select All</span>
                </div>
                <div></div>
              </div>
            </div>
            <div class="make-model--see-cars hidden">
              <span class="make-model--see-cars--label"></span>
              <div class="make-model--see-cars--btn-wrap">
                <a href="#" class="btn">Search Selected Cars</a>
              </div>
            </div>
            <div class="make-model--mobile-wrap hidden">
              <div class="make-model--mobile-wrap--inner">
                <p class="make-model--mobile-wrap--add-car">Add Another Car</p>
                <div class="make-model--mobile-wrap--add-car-btn ">
                  <span>+</span>
                </div>
              </div>
              <div class="make-model--see-cars hidden">
                <div class="make-model--see-cars--btn-wrap">
                  <a href="#" class="btn" data-kmx="make-model-search-submit">Search Selected Cars</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="advanced-box type-search ">
        <div class="advanced-box--label" data-kmx="type-search"><!-- react-text: 35 -->Type<!-- /react-text -->
          <svg role="img" id="" viewBox="0 0 50 29.011">
            <path d="M49.498 5.284L26.152 28.511c-.303.299-.75.5-1.154.5-.4 0-.848-.201-1.15-.5L.502 5.284C.202 4.986 0 4.535 0 4.138s.202-.849.502-1.146L3.006.5c.303-.299.703-.5 1.155-.5.399 0 .849.201 1.15.499l19.687 19.588L44.688.499C44.99.201 45.439 0 45.844 0c.399 0 .848.201 1.15.499l2.504 2.492c.303.298.502.749.502 1.147s-.199.848-.502 1.146z"></path>
          </svg>
        </div>
        <div class="advanced-box--flyout hidden" data-kmx="type-search-list">
          <div class="type-search--flyout">
            <div class="type-search--inner"></div>
            <div class="type-search--see-cars">
              <span class="type-search--see-cars--label">Select Vehicle Types From Above</span>
              <div class="type-search--see-cars--btn-wrap">
                <a href="#" class="btn" data-kmx="type-search-submit">Search Selected Cars</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="advanced-box price-search ">
        <div class="advanced-box--label" data-kmx="price-search"><!-- react-text: 46 -->Price<!-- /react-text -->
          <svg role="img" id="" viewBox="0 0 50 29.011">
            <path d="M49.498 5.284L26.152 28.511c-.303.299-.75.5-1.154.5-.4 0-.848-.201-1.15-.5L.502 5.284C.202 4.986 0 4.535 0 4.138s.202-.849.502-1.146L3.006.5c.303-.299.703-.5 1.155-.5.399 0 .849.201 1.15.499l19.687 19.588L44.688.499C44.99.201 45.439 0 45.844 0c.399 0 .848.201 1.15.499l2.504 2.492c.303.298.502.749.502 1.147s-.199.848-.502 1.146z"></path>
          </svg>
        </div>
        <div class="advanced-box--flyout hidden" data-kmx="price-search-inputs">
          <div class="price-search--flyout">
            <div class="price-search--inner">
              <div>
                <span class="slider--label">No Min</span>
                <span class="slider--label">$25K</span>
                <span class="slider--label">$50K</span>
                <span class="slider--label">$75K</span>
                <span class="slider--label last">No Max</span>
              </div>
              <p class="price-search--label">Set a Maximum And Minimum Price Range.</p>
              <span class="price-search--label form--error-message"></span>
            </div>
            <div class="price-search--see-cars">
              <span class="price-search--see-cars--label">Shopping Between:</span>
              <div class="price-search--see-cars--input-wrap">
                <input name="minPrice" data-kmx="min-price-input" class="form--field " value="No Min" type="text" />
              </div>
              <span class="price-search--see-cars--label">&amp;</span>
              <div class="price-search--see-cars--input-wrap">
                <input name="maxPrice" data-kmx="max-price-input" class="form--field " value="No Max" type="text" />
              </div>
              <div class="price-search--see-cars--btn-wrap">
                <a href="#" class="btn" data-kmx="price-search-submit">Shop This Range</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
