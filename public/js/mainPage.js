const form = document.querySelector('.d-flex');
const container = document.querySelector('.container-of-news');

form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();
    const formSubmitted = event.target;

    const { search } = formSubmitted;

    const newsFromSite = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_207827da1466540f19e402dbcd706b630e043&q=${search.value}`
    );
    const news = await newsFromSite.json();
    // console.log(news);

    const response = await fetch('/news/getNews', {
      method: 'POST',
      body: JSON.stringify({
        news,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const html = await response.json();
    console.log(html);

    // const response = await fetch('/news/getNews', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     title: news.results[1].title,
    //     subtitle: news.results[1].description,
    //     image: news.results[1].image_url,
    //     link: news.results[1].link,
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const html = await response.json();
    container.innerHTML = html.html;
  } catch (error) {
    console.error(error);
  }
});
