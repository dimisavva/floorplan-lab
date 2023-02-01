import Bedroom from "./Bedroom";
import Kitchen from "./Kitchen";
import Bath from "./Bath";
import LivingRoom from "./LivingRoom";

const FloorPlan = (props) => {
  const bedNum = [' 1', ' 2', ' 3']
  const bathSize = ['Full ', 'Half ']
  return (
    < >
    <div>
      {props.name}   
      <Bedroom name= 'Bedroom' bedNum= {bedNum[0]}/> 
      <Kitchen name= 'Kitchen' /> 
      <Bath name= 'Bath' bathSize= {bathSize[0]}/> 
      <Bedroom name= 'Bedroom' bedNum= {bedNum[1]}/> 
      <LivingRoom name= 'Living Room' /> 
      <Bath name= 'Bath' bathSize= {bathSize[1]}/> 
      <Bedroom name= 'Bedroom' bedNum= {bedNum[2]}/> 
    </div>
    </ > 
  );
}

// Must export the component's function (or class)
export default FloorPlan;