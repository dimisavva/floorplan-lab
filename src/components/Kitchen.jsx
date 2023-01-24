import Sink from "./Sink";
import Oven from "./Oven";

const Kitchen = (props) => {
  return (
    <div>
      Kitchen
      <Sink name= 'Sink' /> 
      <Oven name= 'Oven' /> 
    </div>
  );
}

// Must export the component's function (or class)
export default Kitchen;