import React from 'react';
import Head from 'next/head';
import Nav from '../components/Nav';
import Hero from '../components/Hero';
import Logo from '../components/Logo';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      navActive: false,
    };
  }

  render() {
    return (
      <div className="app">
        <Head>
          <title>Volleystream</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="stylesheet" href="/static/css/bulma.min.css" type="text/css" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" type="text/css" />
          <link rel="stylesheet" href="/static/css/custom.css" type="text/css" />
          <link rel="stylesheet" href="/static/css/devices.min.css" type="text/css" />
        </Head>
        <Nav />
        <Hero />
        <section className="section row-container">
          <Logo name="osi" />
          <Logo name="ntnui" />
          <Logo name="forde" />
          <Logo name="bktromso" />
          <Logo name="oslovolley" />
          <Logo name="viking" />
          <Logo name="randaberg" />
          <Logo name="tvn" />
          <Logo name="tonsberg" />
          <Logo name="koll" />
          <Logo name="blindheim" />
          <Logo name="blussuvoll" />
          <Logo name="askim" />
          <Logo name="austratt" />
          <Logo name="stod" />
          <Logo name="dristug" />
          <Logo name="oksil" />
          <Logo name="vestli" />
          <Logo name="spiritlorenskog" />
          <Logo name="bsi" />
          <Logo name="egersund" />
          <Logo name="gneist" />
          <Logo name="ksk" />
          <Logo name="lierne" />
          <Logo name="sandnes" />
          <Logo name="sunnfjord" />
          <Logo name="askim" />
        </section>
      </div>
    );
  }

}

export default App;
