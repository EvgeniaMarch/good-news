const form = document.querySelector('.search-form');
const container = document.querySelector('.container-of-news');

form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();

    const mostPopular = await fetch('/news/getPopular', {
      method: 'POST',
    });

    const loader = await fetch('/news/showLoader', {
      method: 'POST',
    });
    const htmlOfLoader = await loader.json();
    container.innerHTML = htmlOfLoader.html;

    const formSubmitted = event.target;

    const { search } = formSubmitted;
    const { exeptionWord } = formSubmitted;

    const newsFromSite = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_207827da1466540f19e402dbcd706b630e043&q=${search.value}`
    );

    const news = await newsFromSite.json();

    const response = await fetch('/news/getNews', {
      method: 'POST',
      body: JSON.stringify({
        news,
        search: search.value,
        exeptionWord: exeptionWord.value,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const html = await response.json();
    container.innerHTML = html.html;
  } catch (error) {
    console.error(error);
  }
});
