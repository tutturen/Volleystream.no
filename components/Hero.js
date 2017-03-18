
export default () => (
  <section className="hero is-danger is-medium is-bold red-gradient is-special" style={{ overflow: 'hidden' }}>
        <div className="hero-text">
          <h1 className="title is-1 is-weight-700">
            Stream norsk volleyball på toppnivå.
          </h1>
          <h1 className="title is-3">Bli med å gjøre det enklere å se norsk volleyball.</h1>
          <p className="control">
            <a
              className="button is-large is-danger is-inverted has-red-text"
              href="https://guide.volleystream.no"
            >
              Les vår guide
            </a>
          </p>
        </div>
        <div className="phone-container is-hidden-touch">
          <div className="marvel-device iphone6 silver">
            <div className="top-bar"></div>
            <div className="sleep"></div>
            <div className="volume"></div>
            <div className="camera"></div>
            <div className="sensor"></div>
            <div className="speaker"></div>
            <div className="screen">
              <img src="/static/images/volleyball-2.jpg" />
            </div>
            <div className="home"></div>
            <div className="bottom-bar"></div>
          </div>
      </div>
  </section>
);
