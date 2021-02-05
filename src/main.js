import React, { useRef, useState, useCallback, useContext } from "react";
import ReactDOM from "react-dom";

const data = {
  name: "xxx"
}

const TestContext = React.createContext({
  user: data, setusername: function () {
    data.name = "yyy"
  }
});

function Message() {
  const { user } = useContext(TestContext)
  return <div >{user.name}</div>;
}
function App() {
  const { setusername } = useContext(TestContext)
  const ref = useRef();
  let otherName = useMemo(() => {
    return "xxx"
  }, []);
  const [d, setd] = useState({ d: 1 });
  const click = useCallback(function () {
    setd({ d: d.d + 1 });
    setusername()
  });
  console.log(d.d)
  return <div onClick={click}>{d.d} <Message></Message></div>;
}

ReactDOM.render(<App />, document.getElementById(`root`));
