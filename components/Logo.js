function Logo(props) {
  return (
    <img className="logo" src={`/static/logo/${props.name}.svg`} alt="Logo" />
  );
}

export default Logo;
