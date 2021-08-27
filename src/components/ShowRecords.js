import react from "react";

function ShowRecords(prop){

    return (
        <div className="container">
            <div className="row">
              <div className="col-8 mx-auto">
                <table>
                    <thead>
                        <th>#</th>
                        <th>Name</th>
                        <th>Roll No.</th>
                        <th>Class</th>
                        <th>Batch</th>
                    </thead>
                    <tbody>
                        {
                            prop.record.map((student,index)=>{
                                return (
                                    <tr>
                                        <td>{index+1}</td>
                                        <td>{student.name}</td>
                                        <td>{student.rollNo}</td>
                                        <td>{student.class}</td>
                                        <td>{student.batch}</td>
                                    </tr>
                                )
                            })
                        }
                        {
                            console.log(record)}
                    </tbody>
                </table>
              </div>
            </div>
        </div>
    );

}

export default ShowRecords;