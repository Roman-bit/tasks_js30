const API_key = 'ZUyy0sJgOSdF6frQy9DFyYpUXrXr-yb0sV7FWY4edVc';
const input = document.getElementById('input');
let galleryContainer = document.getElementById('window');

function handleSearchQuery(event) {
  if (event.code === 'Enter') {
    galleryContainer.innerHTML = '';
    const url = buildUrl(event);
    getData(url);
  }
}

input.addEventListener("keydown", handleSearchQuery);

function buildUrl(event) {
  const query = event.target.value.trim();
  return `https://api.unsplash.com/search/photos?query=${query}&per_page=30&client_id=${API_key}`;
}

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  console.log(data);
  data.results.map(photo => showData(photo.urls.regular))
}

function showData(imageUrl) {
  const img = document.createElement('img');
  img.classList.add('img')
  img.src = imageUrl;
  img.alt = `image`;
  galleryContainer.append(img);
}

window.addEventListener('load', function(){
  const url = `https://api.unsplash.com/search/photos?query=winter&per_page=29&client_id=${API_key}`;
  getData(url);
})
