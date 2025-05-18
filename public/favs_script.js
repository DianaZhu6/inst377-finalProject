async function createFavorites() {
  await fetch(`/api/favorites`, {
    method: 'POST',
    body: JSON.stringify({
      meal_name: `${document.getElementById('meal_name').value}`,
      meal_type: `${document.getElementById('meal_type').value}`,
      cooking_difficulty: `${document.getElementById('cooking_difficulty').value}`,
    }),
    
    headers: {
      'content-type': 'application/json',
    },
  }).then((result) => result.json());

  await loadFavoritesData();
}

async function loadFavoritesData() {
  await fetch(`/api/favorites`)
    .then((result) => result.json())
    .then((resultJson) => {
      const table = document.createElement('table');
      table.setAttribute('id', 'favoritesInfo');

      const tableRow = document.createElement('tr');

      const tableHeadingMealName = document.createElement('th');
      tableHeadingMealName.innerHTML = 'Meal Name';
      tableRow.appendChild(tableHeadingMealName);

      const tableHeadingMealType = document.createElement('th');
      tableHeadingMealType.innerHTML = 'Meal Type';
      tableRow.appendChild(tableHeadingMealType);

      const tableHeadingCookingDifficulty = document.createElement('th');
      tableHeadingCookingDifficulty.innerHTML = 'Cooking Difficulty';
      tableRow.appendChild(tableHeadingCookingDifficulty);

      table.appendChild(tableRow);

      resultJson.forEach((favorite) => {
        const favoriteTableRow = document.createElement('tr');
        const favoriteTableMealName = document.createElement('td');
        const favoriteTableMealType = document.createElement('td');
        const favoriteTableCookingDifficulty = document.createElement('td');

        favoriteTableMealName.innerHTML = favorite.meal_name;
        favoriteTableMealType.innerHTML = favorite.meal_type;
        favoriteTableCookingDifficulty.innerHTML = favorite.cooking_difficulty;

        favoriteTableRow.appendChild(favoriteTableMealName);
        favoriteTableRow.appendChild(favoriteTableMealType);
        favoriteTableRow.appendChild(favoriteTableCookingDifficulty);

        table.appendChild(favoriteTableRow);
      });

      const preExistingTable = document.getElementById('favoritesInfo');
      if (preExistingTable) {
        preExistingTable.remove();
      }

      document.body.appendChild(table);
    });
}

window.onload = loadFavoritesData;