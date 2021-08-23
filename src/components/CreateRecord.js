import react from "react";

function CreateRecord(){

    const insertData = async ()=>{
    
        let record = {
          id:"1",
          name:"Abu Bakar",
          class:"BSCS",
          batch:"2018-2022",
          rollNo:"2317",
        }
  
        try {
         let recordInserting = await db.collection("students").add(record)
         console.log(recordInserting)
        } catch (error) {
          console.log("error",error)
        }
  
    }


    return (
        <div>
            
        </div>
    );

}

export default CreateRecord;