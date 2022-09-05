const ACCESS_TOKEN_MAP_BOX = `access_token=${process.env.MAP_BOX_TOKEN}`

export const fetchLocalMapBox = (local) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
)
  .then(response => response.json())
  .then(data => data);