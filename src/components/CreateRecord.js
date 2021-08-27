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
  
        // try {
        //  let recordInserting = await db.collection("students").add(record)
        //  console.log(recordInserting)
        // } catch (error) {
        //   console.log("error",error)
        // }
  
    }


    return (
        <div className="container">
            <div className="row">
              <div className="col-8 mx-auto">
                <form action="">
                  <div className="form-group my-3">
                    <input type="text" className="form-control" placeholder="Enter Your Name" />
                  </div>
                  <div className="form-group my-3">
                    <input type="text" className="form-control" placeholder="Enter Your Class" />
                  </div>
                  <div className="form-group my-3">
                    <input type="text" className="form-control" placeholder="Enter Your Roll No." />
                  </div>
                  <div className="form-group my-3">
                    <input type="text" className="form-control" placeholder="Enter Your Batch" />
                  </div>
                  <div className="form-group my-3">
                    <div className="d-grid">
                      <input type="submit" className="btn btn-primary btn-block"/>
                    </div>
                  </div>
                </form>
              </div>
            </div>
        </div>
    );

}

export default CreateRecord;