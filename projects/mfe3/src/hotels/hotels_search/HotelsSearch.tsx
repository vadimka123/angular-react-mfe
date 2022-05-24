import './hotels_search.css';

function HotelsSearch() {
  function onSearch() {
    alert('Not implemented for this demo!');
  }

  return (
    <div id='container'>
      <div>
        <img src='http://localhost:3002/logo192.png' width={50} alt='logo' />
      </div>
      <h1>Hotels</h1>
      <div>
        <input type='text' placeholder='From' />
      </div>
      <div>
        <input type='text' placeholder='To' />
      </div>
      <div>
        <button onClick={onSearch}>Search</button>
        <button>Terms...</button>
      </div>
    </div>
  );
}

export default HotelsSearch;
