const MenuEntry = ({clickHandler, label}) => (
  <li>
    <a onClick={clickHandler} href="#">
      {label}
    </a>
  </li>
);

const MenuReturn = () => (
  <button onClick={renderMainMenu}>
    Return to Menu
  </button>
);

const renderMainMenu = () => {
  const renderedLinks = links.map(link => (
    <MenuEntry
      key={link.label}
      clickHandler={link.clickHandler}
      label={link.label}/>
  ));

  ReactDOM.render(
    <div>
        <h1>Welcome to JavaScript 5</h1>
        <span>Example Code</span>
        <ul>
          {renderedLinks}
        </ul>
    </div>,
    document.getElementById('root')
  );
};
renderMainMenu();
