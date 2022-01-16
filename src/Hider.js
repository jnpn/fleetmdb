import { useState } from 'react';

import { choosing } from './prelude';

function Hider(props) {
  const [visible, setVisible] = useState(true);

  let titler = props.defaultTitleFn ? props.defaultTitleFn : choosing("hide", "show");
  let defaultTitle = <span>{ titler(visible) }</span>;
  let defaultMain = props.main || <p>Main</p>;
  let defaultMinimized = props.minimized || <div className="hidden"></div>;

  const toggle = () => setVisible(!visible);

  return (
      <div className="hider">
        <button onClick={toggle}>{ defaultTitle }</button>
      {visible ? defaultMain : defaultMinimized }
      { props.children }
      </div>
  )
  
}

export default Hider;
