const form = document.querySelector('.search-form');
const container = document.querySelector('.container-of-news');
const dropdown = document.querySelector('.most-popular');
const history = document.querySelector('.subtitle-of-piece3');

async function insertIvan() {
  const loader = await fetch('/news/showLoader', {
    method: 'POST',
  });
  const htmlOfLoader = await loader.json();
  container.innerHTML = htmlOfLoader.html;
}

async function insertNews({ news, search, exeptionWord = null }) {
  const response = await fetch('/news/getNews', {
    method: 'POST',
    body: JSON.stringify({
      news,
      search,
      exeptionWord,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const html = await response.json();
  container.innerHTML = html.html;
}

form.addEventListener('submit', async (event) => {
  try {
    event.preventDefault();

    insertIvan();

    const formSubmitted = event.target;

    const { search } = formSubmitted;
    const { exeptionWord } = formSubmitted;

    const newsFromSite = await fetch(
      `https://newsdata.io/api/1/news?apikey=pub_207827da1466540f19e402dbcd706b630e043&q=${search.value}`
    );

    const news = await newsFromSite.json();

    insertNews({
      news,
      search: search.value,
      exeptionWord: exeptionWord.value,
    });
  } catch (error) {
    console.error(error);
  }
});

dropdown.addEventListener('click', async (event) => {
  if (event.target.classList.contains('dropdown-item')) {
    try {
      event.preventDefault();

      insertIvan();

      const word = event.target.innerText;

      const newsFromSite = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_207827da1466540f19e402dbcd706b630e043&q=${word}`
      );

      const news = await newsFromSite.json();

      insertNews({
        news,
        search: word,
      });
    } catch (error) {
      console.error(error);
    }
  }
});
history.addEventListener('click', async (event) => {
  if (event.target.classList.contains('dropdown-item')) {
    try {
      event.preventDefault();

      insertIvan();

      const word = event.target.innerText;

      const newsFromSite = await fetch(
        `https://newsdata.io/api/1/news?apikey=pub_207827da1466540f19e402dbcd706b630e043&q=${word}`
      );

      const news = await newsFromSite.json();

      insertNews({
        news,
        search: word,
      });
    } catch (error) {
      console.error(error);
    }
  }
});
