const React = require('react');

function NewsTopics({ topics }) {
  return (
    <>
      <button
        class="btn btn-secondary dropdown-toggle filter dropdown-nash"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        История поиска
      </button>
      <ul className="dropdown-menu">
        {topics.map((topic) => (
          <li
            className="topic dropdown-item"
            id="first-container"
            href="#"
            key={topic.id}
          >
            {topic.exception ? (
              <>
                {topic.mainWord}
                &nbsp;(за исключением "{topic.exception}")
              </>
            ) : (
              topic.mainWord
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

{
  /* <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown link
  </a>

  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */
}
module.exports = NewsTopics;
