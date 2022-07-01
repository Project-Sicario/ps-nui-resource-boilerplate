import { useState } from "react";
import {debugData, useNuiEvent, fetchNui} from "../nui";
import "./style.scss";

const Test: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useNuiEvent<boolean>('nui-test', (data) => {
    setIsVisible(data);
    console.log("Test nui is now open ?");
  }) 
  
  return(
    <div className="test" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
      <h1>Test</h1>
    </div>
  );
}

export default Test;