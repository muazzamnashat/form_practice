function App() {
  return (
    <>
      <h1>React form practice</h1>
      <form>
        <label>
          Name: <input type='text' name='name' value='' />
        </label>
        <br />
        <label>
          Email: <input type='text' name='email' value='' />
        </label>
        <br />
        <input type='submit' />
      </form>
    </>
  );
}

export default App;
