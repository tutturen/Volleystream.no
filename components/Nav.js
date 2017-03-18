import React from 'react';
import classNames from 'classnames';

class Nav extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      active: !this.state.active,
    });
  }

  render() {
    return (
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item" href="/">
            <img
              src="https://guide.volleystream.no/general/images/logo.svg"
              alt="Volleystream logo"
              className="margin-right-4"
            />
            <h1 className="title is-5">Volleystream</h1>
          </a>
        </div>

        <span className="nav-toggle" onClick={this.toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className={classNames('nav-right', 'nav-menu', { 'is-active': this.state.active })}>
          <a className="nav-item" href="http://score.volleystream.no">
            Scoreboard
          </a>
          <a className="nav-item" href="http://blusstv.volleystream.no">
            BlussTV
          </a>
          <a className="nav-item" href="https://guide.volleystream.no">
            Guide
          </a>

          <span className="nav-item">
            <a className="button" href="https://github.com/nvbf">
              <span className="icon">
                <i className="fa fa-github"></i>
              </span>
              <span>GitHub</span>
            </a>
          </span>
        </div>
      </nav>
    );
  }

}

export default Nav;
