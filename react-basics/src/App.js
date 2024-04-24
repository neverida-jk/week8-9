import React from 'react';
import SubjectList from './SubjectList';
import TempConverter from './TempConverter';


function App() {
  const CMSCSubjects = [
    { code: "CMSC100", description: "Web Programming", id: 1 },
    { code: "CMSC150", description: "Scientific Computation", id: 2 },
    { code: "CMSC22", description: "Object-Oriented Programming", id: 3 },
  ];
  
  const CHEMSubjects = [
    { code: "CHEM100", description: "Introduction to Organic Chemistry", id: 1 },
    { code: "CHEM10", description: "Chemical Kinetics", id: 2 },
    { code: "CHEM11", description: "Introduction to Biochemistry", id: 3 },
  ];

  return (
    <div>  
      <TempConverter />
      <SubjectList data={CMSCSubjects} title={'Computer Science'} />
      <SubjectList data={CHEMSubjects} title={'Chemistry'} />
    </div>
  );
}

export default App;
