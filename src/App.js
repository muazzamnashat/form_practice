import { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    if (e.target.name === 'name') setName(e.target.value);
    else if (e.target.name === 'email') setEmail(e.target.value);
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
