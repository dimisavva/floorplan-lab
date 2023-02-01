import Sink from "./Sink";
import Oven from "./Oven";

const Kitchen = (props) => {
  return (
    <div>
      Kitchen
      <Oven name= 'Oven' /> 
      <Sink name= 'Sink' /> 
    </div>
  );
}

// Must export the component's function (or class)
export default Kitchen;