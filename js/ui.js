const uiModule = (function () {
  const mainContentWrapperEl = document.querySelector('#main-content');
  const searchDropdownEl = document.querySelector('#search-dropdown');


  const renderHomePage = (shows) => {
    let html = `
            <h1>Popular Shows</h1>
            </br>
            <div id="show-list">
        `;

    shows.forEach((show) => {
      html += `
             <div class="show-item" id="${show.id}">
                 <img src="${show.coverUrl}" alt="show cover image"/>
                <p>${show.name}</p>
             </div>
            `;
    });

    html += `</div>`;
    mainContentWrapperEl.innerHTML = html;
  }

  const renderSingleTvShowPage = (show) => {
    // Cast
    let castListHtml = '';
    let castCounter = 0;
    show.cast.forEach((string) =>{
      castCounter += 1;
      if (castCounter < 10){
        castListHtml += `
        <li class="cast-item">${string}</li>
        `
      }
    });
    // Seasons
    let seasonList = '';
    let numberOfSeasons = 0;
    show.seasons.forEach(({premiereDate, endDate}) =>{
      numberOfSeasons += 1;
      seasonList += `
      <li class="season-item">${premiereDate} - ${endDate}</li>
      `
    });
    // Crew
   let crewMembers = '';
   let counter = 0;
   show.crew.forEach((string) => {
    counter +=1;
    if (counter < 6){
      crewMembers += `
      <li class="cast-item">${string}</li>
      `
    }
    else {
      return;
    };
   })
   let listOfEpisodes = '';
   show.episodes.forEach((string) =>{
    listOfEpisodes += `<p class="episodes">${string}</p>`
   })
   // Akas
   let listOfAkas = '';
   if (Array.isArray(show.akas === true)){
    show.akas.forEach((string) =>{
      listOfAkas += `<p class="akas">${string}</p>`
     })
   };
  
   
  
    const finalHtml = `
    <h1>${show.name}</h1>
    <div class="detail-wrapper">
      <img src="${show.coverUrl}" alt="show cover" class="single-page-cover"/>
      <ul class="list-wrapper">
        <h1>Seasons(${numberOfSeasons})</h1>
        ${seasonList}
        <h1>Cast</h1>
        ${castListHtml}
        <h1>Crew</h1>
        ${crewMembers}
      </ul>
    </div>
    <div class="show-details">
      <h1>Show Details</h1>
      ${show.summary}
      </br>
      <div class="more">
        
        <div class="akas-list">
          <h1> List of A.K.A.S</h1>
          ${listOfAkas}
        </div>
        <div class="episode-list">
          <h1> Episode List</h1>
          ${listOfEpisodes}
        </div>
      </div>
    </div>
    `;
    mainContentWrapperEl.innerHTML = finalHtml;
  };
  
  const renderSearchDropdown = (shows) => {
    shows.forEach((show) => {
      const itemEl = document.createElement('div');
      itemEl.setAttribute('id', show.id);
      itemEl.classList.add('search-item');
      itemEl.textContent = show.name;
      searchDropdownEl.appendChild(itemEl);
    });
  };

  const clearDropdown = () => {
    searchDropdownEl.innerHTML = '';
  };
  return { renderHomePage, renderSearchDropdown, clearDropdown, renderSingleTvShowPage };
})();