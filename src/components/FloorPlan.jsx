import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  return (
    <div>
      {props.name}   
      <Kitchen name= 'Kitchen' /> 
      <LivingRoom name= 'LivingRoom' /> 
      <Bedroom name= 'Bedroom' /> 
      <Bath name= 'Bath' /> 
    </div>
  );
}

// Must export the component's function (or class)
export default FloorPlan;