import { Routes, Route } from "react-router-dom";

import  Home  from "./routes/home/home.component";
import  Navigation  from "./routes/navigation/navigation.component";

const App = () => {
    return (
    <div className="title">
      <h1>✪$HOOT3R✪ FANPAGE</h1>
      <div className="global">
      <Routes>
        <Route path="/" element={<Navigation />}>    
          <Route index element={<Home />} />
        </Route>
      </Routes>
      <Home></Home>
    </div>
      </div>
    );
  };
  
  export default App;