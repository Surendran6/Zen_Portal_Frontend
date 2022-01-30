import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MentorForm from './Components/MentorForm';
import StudentForm from './Components/StudentForm';
import AssignorChangeMentor from './Components/AssignorChangeMentor';
import MentorTable from './Components/MentorTable';
import StudentTable from './Components/StudentTable';
import AssignStudentsToMentor from './Components/AssignStudentsToMentor';
import { AssignMentorProvider } from './Context/AssignMentors';
import ShowMentorStudents from './Components/ShowMentorStudents';
import Home from './Components/Homepage';

function App() {
  // return (
  //   <div className="container">
  //     <h2 style={{textAlign:"center",color:"rgb(88, 32, 218)",marginBottom:"2rem"}}>Zen Mentors</h2>
  //     <AssignMentorProvider>
  //       <div className="row">
  //         <div className="col-md-5 col-sm-12">
  //           <MentorForm />
  //           <StudentForm />
  //           <AssignorChangeMentor />
  //           <AssignStudentsToMentor />
  //           <ShowMentorStudents /> 
  //         </div>
  //         <div className="col-md-7 col-sm-12">
  //           <MentorTable />
  //           <StudentTable />
  //         </div>
  //       </div>
  //     </AssignMentorProvider>
  //   </div>
  // );
  return (
    <AssignMentorProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/MentorForm" element={<MentorForm />} />
        <Route path="/StudentForm" element={<StudentForm />} />
        <Route path="/MentorTable" element={<MentorTable />} />
        <Route path="/AssignStudentsToMentor" element={   <AssignStudentsToMentor />} />
        <Route path="/ShowMentorStudents" element={<ShowMentorStudents /> } />
        <Route path="/StudentTable" element={<StudentTable />} />
        <Route exact path="/AssignorChangeMentor" element={<AssignorChangeMentor />} />
        <Route exact path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
    </AssignMentorProvider>
  )
}

export default App;
