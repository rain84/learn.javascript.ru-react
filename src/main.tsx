import ReactDOM from 'react-dom/client'

import { restaurants } from 'constants/mock'
import { createElement } from 'react'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
  <>
    <header>
      <h1 style={{ textAlign: 'center' }}>Restaurant App</h1>
    </header>
    <main style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
        <h2>Created with JSX</h2>
        <section>
          <h1>Name: {restaurants[0].name}</h1>
          <h3>Menu</h3>
          <ul>
            <li>{restaurants[0].menu[0].name}</li>
            <li>{restaurants[0].menu[1].name}</li>
            <li>{restaurants[0].menu[2].name}</li>
          </ul>
          <h3>Reviews</h3>
          <ul>
            <li>{restaurants[0].reviews[0].text}</li>
            <li>{restaurants[0].reviews[1].text}</li>
          </ul>
        </section>
        <section>
          <h1>Name: {restaurants[1].name}</h1>
          <h3>Menu</h3>
          <ul>
            <li>{restaurants[1].menu[0].name}</li>
            <li>{restaurants[1].menu[1].name}</li>
          </ul>
          <h3>Reviews</h3>
          <ul>
            <li>{restaurants[1].reviews[0].text}</li>
            <li>{restaurants[1].reviews[1].text}</li>
            <li>{restaurants[1].reviews[2].text}</li>
          </ul>
        </section>
        <section>
          <h1>Name: {restaurants[2].name}</h1>
          <h3>Menu</h3>
          <ul>
            <li>{restaurants[2].menu[0].name}</li>
            <li>{restaurants[2].menu[1].name}</li>
            <li>{restaurants[2].menu[2].name}</li>
          </ul>
          <h3>Reviews</h3>
          <ul>
            <li>{restaurants[2].reviews[0].text}</li>
          </ul>
        </section>
        <section>
          <h1>Name: {restaurants[3].name}</h1>
          <h3>Menu</h3>
          <ul>
            <li>{restaurants[3].menu[0].name}</li>
            <li>{restaurants[3].menu[1].name}</li>
          </ul>
          <h3>Reviews</h3>
          <ul>
            <li>{restaurants[3].reviews[0].text}</li>
            <li>{restaurants[3].reviews[1].text}</li>
          </ul>
        </section>
      </div>
      <div>
        <h2>Created with React.createElement()</h2>
        {createRestaurants()}
      </div>
    </main>
  </>
)

function createRestaurants() {
  const result = [
    /* Item 1 */
    createElement('section', {
      key: '1',
      children: [
        createElement('h1', {
          key: restaurants[0].name,
          children: `Name: ${restaurants[0].name}`,
        }),
        createElement('h3', { key: 'Menu', children: `Menu` }),
        createElement('ul', {
          key: '2',
          children: [
            createElement('li', {
              key: restaurants[0].menu[0].id,
              children: restaurants[0].menu[0].name,
            }),
            createElement('li', {
              key: restaurants[0].menu[1].id,
              children: restaurants[0].menu[1].name,
            }),
            createElement('li', {
              key: restaurants[0].menu[2].id,
              children: restaurants[0].menu[2].name,
            }),
          ],
        }),
        createElement('h3', { key: 'reviews', children: `Reviews` }),
        createElement('ul', {
          key: '3',
          children: [
            createElement('li', {
              key: restaurants[0].reviews[0].text,
              children: restaurants[0].reviews[0].text,
            }),
            createElement('li', {
              key: restaurants[0].reviews[0].text,
              children: restaurants[0].reviews[1].text,
            }),
          ],
        }),
      ],
    }),

    /* Item 2 */
    createElement('section', {
      key: '4',
      children: [
        createElement('h1', {
          key: restaurants[1].name,
          children: `Name: ${restaurants[1].name}`,
        }),
        createElement('h3', { key: 'Menu', children: `Menu` }),
        createElement('ul', {
          key: '5',
          children: [
            createElement('li', {
              key: restaurants[1].menu[0].id,
              children: restaurants[1].menu[0].name,
            }),
            createElement('li', {
              key: restaurants[1].menu[1].id,
              children: restaurants[1].menu[1].name,
            }),
          ],
        }),
        createElement('h3', { key: 'reviews', children: `Reviews` }),
        createElement('ul', {
          key: '6',
          children: [
            createElement('li', {
              key: restaurants[1].reviews[0].text,
              children: restaurants[1].reviews[0].text,
            }),
            createElement('li', {
              key: restaurants[1].reviews[1].text,
              children: restaurants[1].reviews[1].text,
            }),
            createElement('li', {
              key: restaurants[1].reviews[2].text,
              children: restaurants[1].reviews[2].text,
            }),
          ],
        }),
      ],
    }),

    /* Item 3 */
    createElement('section', {
      key: '7',
      children: [
        createElement('h1', {
          key: restaurants[2].name,
          children: `Name: ${restaurants[2].name}`,
        }),
        createElement('h3', { key: 'Menu', children: `Menu` }),
        createElement('ul', {
          key: '5',
          children: [
            createElement('li', {
              key: restaurants[2].menu[0].id,
              children: restaurants[2].menu[0].name,
            }),
            createElement('li', {
              key: restaurants[2].menu[1].id,
              children: restaurants[2].menu[1].name,
            }),
            createElement('li', {
              key: restaurants[2].menu[2].id,
              children: restaurants[2].menu[2].name,
            }),
          ],
        }),
        createElement('h3', { key: 'reviews', children: `Reviews` }),
        createElement('ul', {
          key: '8',
          children: [
            createElement('li', {
              key: restaurants[2].reviews[0].text,
              children: restaurants[2].reviews[0].text,
            }),
          ],
        }),
      ],
    }),

    /* Item 4 */
    createElement('section', {
      key: '9',
      children: [
        createElement('h1', {
          key: restaurants[3].name,
          children: `Name: ${restaurants[3].name}`,
        }),
        createElement('h3', { key: 'Menu', children: `Menu` }),
        createElement('ul', {
          key: '10',
          children: [
            createElement('li', {
              key: restaurants[3].menu[0].id,
              children: restaurants[3].menu[0].name,
            }),
            createElement('li', {
              key: restaurants[3].menu[1].id,
              children: restaurants[3].menu[1].name,
            }),
          ],
        }),
        createElement('h3', { key: 'reviews', children: `Reviews` }),
        createElement('ul', {
          key: '11',
          children: [
            createElement('li', {
              key: restaurants[3].reviews[0].text,
              children: restaurants[3].reviews[0].text,
            }),
            createElement('li', {
              key: restaurants[3].reviews[1].text,
              children: restaurants[3].reviews[1].text,
            }),
          ],
        }),
      ],
    }),
  ]

  return result
}
