import './App.css'

function App() {

  return (
    <>
    <h1 className='apptitle'>
      <font color="#FF2626">G</font>
      <font color="#FFD523">O</font>
      <font color="#0F52BA">K</font>
      <font color="#FF9966">I</font>
      <font color="#00C1D4">D</font>
    </h1>
    <p className='quote'>Safe Browsing World for Kids</p>
    <form id="searchform" method='post' action='#'>
      <input className='querybox' name="query" placeholder='Search Your Thoughts Here.....!!!' />  <br />
      <button className='submit' type="submit">Search</button>
    </form>
    </>
  )
}

export default App
