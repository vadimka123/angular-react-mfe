import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div>
        <img src='../logo192.png' width={50} alt='logo' />
      </div>
      <h1>Welcome!</h1>

      <p>
        <Link to='/hotels'>Search Hotels</Link>
      </p>
    </>
  );
}

export default Home;
