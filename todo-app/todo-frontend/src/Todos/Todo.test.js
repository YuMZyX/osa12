// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Todo from './Todo';

describe('<Todo />', () => {
  let container;
  const onClickDelete = jest.fn()
  const onClickComplete = jest.fn()

  beforeEach(() => {
    const todo = {
      text: 'A test todo',
      done: false
    }

    /* eslint-disable-next-line */
    container = render(<Todo todo={todo} onClickDelete={onClickDelete} onClickComplete={onClickComplete} />).container 
  });

  test('Renders text and done fields', () => {
    /* eslint-disable-next-line */
    const text = container.querySelector('.text');
    expect(text).toHaveTextContent('A test todo');

    /* eslint-disable-next-line */
    const todo = container.querySelector('.todo');
    expect(todo).toHaveTextContent('This todo is not done');
  });

});

