import { useReducer } from 'react';

function App() {
  const initialState = {
    name: '',
    email: '',
  };

  const reducer = (state, action) => {
    const { type, payload } = action;
    return { ...state, [type]: payload };
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const { name, email } = state;

  const handleChange = (e) => {
    dispatch({ type: e.target.name, payload: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('The name is:', name, 'and the email is :', email);
  };
  return (
    <>
      <h1>React form practice</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type='text' name='name' value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Email:
          <input
            type='text'
            name='email'
            value={email}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type='submit' />
      </form>
    </>
  );
}

export default App;
