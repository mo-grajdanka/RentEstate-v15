function applyFilters(dataArray, filterState) {
    return dataArray.filter(item => {
               
        if (filterState.purpose && filterState.purpose !== "" && item.purpose !== filterState.purpose) {
            return false;
        }
      
        if (filterState.place && filterState.place !== "" && item.place !== filterState.place) {
            return false;
        }
       
        if (filterState.minArea !== null && filterState.minArea !== "" && item.area < Number(filterState.minArea)) {
            return false;
        }
       
        if (filterState.maxArea !== null && filterState.maxArea !== "" && item.area > Number(filterState.maxArea)) {
            return false;
        }
       
        return true;
    });
}

function updateAreaFilterOptions(filteredData, currentFilters, allPossibleAreas) {
   
    const uniqueAreasFromFilteredData = [...new Set(filteredData.map(item => item.area))].sort((a, b) => a - b);

    
    const minAreaMenu = document.querySelector('[data-filter-key="minArea"] .filter-options');
    if (minAreaMenu) {
       
        let areasToShow = [...uniqueAreasFromFilteredData];
        
        if (currentFilters.maxArea !== null && currentFilters.maxArea !== "") {
            const maxLimit = Number(currentFilters.maxArea);
            areasToShow = areasToShow.filter(area => area <= maxLimit);
        }
       
        minAreaMenu.innerHTML = areasToShow.map(area => `
            <li><a href="#" data-value="${area}" class="block px-4 py-2 hover:bg-purple-100">${area} м²</a></li>
        `).join('');
        
       
    }

    const maxAreaMenu = document.querySelector('[data-filter-key="maxArea"] .filter-options');
    if (maxAreaMenu) {

        let areasToShow = [...uniqueAreasFromFilteredData];

        if (currentFilters.minArea !== null && currentFilters.minArea !== "") {
            const minLimit = Number(currentFilters.minArea);
            areasToShow = areasToShow.filter(area => area >= minLimit);
        }
        maxAreaMenu.innerHTML = areasToShow.map(area => `
            <li><a href="#" data-value="${area}" class="block px-4 py-2 hover:bg-purple-100">${area} м²</a></li>
        `).join('');

    }
}


function updateFilterButtonLabels(filters, allPossibleAreas) {

    const placeWrapper = document.querySelector(`[data-filter-key="place"]`);
    if (placeWrapper) {
        const placeButton = placeWrapper.querySelector('.filter-toggle .filter-label');
        const placeholder = placeWrapper.querySelector('.filter-toggle').dataset.placeholder || 'Площадка';
        if (filters.place && filters.place !== "") {

            placeButton.textContent = filters.place; 
            placeWrapper.querySelector('.filter-toggle').classList.add('bg-purple-600', 'text-white');
        } else {
            placeButton.textContent = placeholder;
            placeWrapper.querySelector('.filter-toggle').classList.remove('bg-purple-600', 'text-white');
        }
    }

   // Для purpose
    const purposeWrapper = document.querySelector('[data-filter-key="purpose"]');
    if (purposeWrapper) {
        const purposeButton = purposeWrapper.querySelector('.filter-toggle .filter-label');
        const placeholder   = purposeWrapper.querySelector('.filter-toggle').dataset.placeholder || 'Назначение';

        const labels = {
            land:       'Земельные участки',
            office:     'Офисные помещения',
            warehouse:  'Складские помещения',
            production: 'Производственные',
            retail:     'Торговые площади'
        };

        if (filters.purpose && filters.purpose !== "") {
            purposeButton.textContent = labels[filters.purpose] ?? filters.purpose;
            purposeWrapper.querySelector('.filter-toggle')
                          .classList.add('bg-purple-600', 'text-white');
        } else {
            purposeButton.textContent = placeholder;
            purposeWrapper.querySelector('.filter-toggle')
                          .classList.remove('bg-purple-600', 'text-white');
        }
    }

    // Для minArea
    const minAreaWrapper = document.querySelector(`[data-filter-key="minArea"]`);
    if (minAreaWrapper) {
        const minAreaButton = minAreaWrapper.querySelector('.filter-toggle .filter-label');
        const minAll = Math.min(...allPossibleAreas);
        if (filters.minArea !== null && filters.minArea !== "") {
            minAreaButton.textContent = `От ${filters.minArea} м²`;
            minAreaWrapper.querySelector('.filter-toggle').classList.add('bg-purple-600', 'text-white');
        } else {
            minAreaButton.textContent = `От ${minAll} м²`;
            minAreaWrapper.querySelector('.filter-toggle').classList.remove('bg-purple-600', 'text-white');
        }
    }

    // Для maxArea
    const maxAreaWrapper = document.querySelector(`[data-filter-key="maxArea"]`);
    if (maxAreaWrapper) {
        const maxAreaButton = maxAreaWrapper.querySelector('.filter-toggle .filter-label');
        const maxAll = Math.max(...allPossibleAreas);
        if (filters.maxArea !== null && filters.maxArea !== "") {
            maxAreaButton.textContent = `До ${filters.maxArea} м²`;
            maxAreaWrapper.querySelector('.filter-toggle').classList.add('bg-purple-600', 'text-white');
        } else {
            maxAreaButton.textContent = `До ${maxAll} м²`;
            maxAreaWrapper.querySelector('.filter-toggle').classList.remove('bg-purple-600', 'text-white');
        }
    }
}


function getFiltersFromUrl(urlSearchParams) {
    return {
        purpose: urlSearchParams.get('purpose'),
        place: urlSearchParams.get('place'),
        minArea: urlSearchParams.get('minArea'), // Получаем как строку или null
        maxArea: urlSearchParams.get('maxArea')  // Получаем как строку или null

    };
}


function updateUrlWithFilters(currentUrl, filters, purposeFromUrl) {

    Object.entries(filters).forEach(([key, value]) => {
        if (value === null || value === "" || value === undefined) {
            currentUrl.searchParams.delete(key);
        } else {
            currentUrl.searchParams.set(key, value);
        }
    });

    if (purposeFromUrl && !currentUrl.searchParams.has('purpose')) {
        currentUrl.searchParams.set('purpose', purposeFromUrl);
    }
    return currentUrl;
}


function enforceAreaFilterRules(filters, allPossibleAreas) {
    let corrected = false;
    if (filters.minArea !== null && filters.minArea !== "" &&
        filters.maxArea !== null && filters.maxArea !== "" &&
        Number(filters.minArea) > Number(filters.maxArea)) {

            filters.maxArea = null;
            corrected = true;
    }
    return corrected;
}


