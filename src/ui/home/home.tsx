import "./home.css";

function Home() {
  return (
    <>
      <div id="home-header">
        <h1>{`Hi, my name is <Graham Rowe /> 👋`}</h1>
        <div>
          I'm a full-stack developer living near Indianapolis. I love building
          websites and applications that are fast, functional, and easy to use.
          From creating clean, responsive designs to solving tough backend
          challenges, I enjoy every part of the development process. If you're
          interested in working together, <a style={{textDecoration: 'underline'}} href='/contact'>let's chat.</a>
        </div>
      </div>
    </>
  );
}

export default Home;
