// import {db} from './config/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import CreateRecord from './components/CreateRecord';
import ShowRecord from './components/ShowRecords';

function App() {


  // const fetchData = async ()=>{
    
  //   try {
     
  //     let fetchingRecord = await db.collection("students").get()
     
  //     fetchingRecord.forEach((singlRecord)=>{
  //        console.log(singlRecord.data())
  //     })

  //   } catch (error) {
  //     console.log("error",error)
  //   }

  // }

  // const deleteData = async ()=>{
    
  //   try {
     
  //     let deleteRecord = await db.collection("students").doc("jArbt6avOdxZ80WYyJSO").delete()
  //     console.log(deleteRecord.data())
  //   } catch (error) {
  //     console.log("error",error)
  //   }

  // }

  // const updateData = async ()=>{
    
  //   let updatedRecord = {
  //     id:"2",
  //     name:"Adnan Ikram",
  //     class:"BSCS",
  //     batch:"2018-2022",
  //     rollNo:"2305",
  //   }


  //   try {
     
  //     let updateRecord = await db.collection("students").doc("l1vJ9n0JLMwg3Zcx4b0q").update(updatedRecord)
  //     console.log(updateRecord.data())

  //   } catch (error) {

  //     console.log("error",error)
      
  //   }

  // }

  const record = [{
          id:"1",
          name:"Abu Bakar",
          class:"BSCS",
          batch:"2018-2022",
          rollNo:"2317"
  }]
  
  return (

    <div>
      <CreateRecord />
      <ShowRecord records={record} />
      {/* <button onClick={fetchData}>Show All Data</button><br /><br />
      <button onClick={deleteData}>Delete Record</button><br /><br />
      <button onClick={updateData}>Update Record</button><br /><br /> */}
    </div>
  );
}

export default App;
