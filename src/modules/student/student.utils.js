// utils/generateStudentId.js

const semesterCodeMap = {
  spring: '03',
  summer: '01',
  fall: '02',
};

const departmentCodeMap = {
  CSE: '001',
  EEE: '002',
  Civil: '003',
};

const generateStudentId = (sessionYear, semesterName, departmentName, count) => {
  const year = sessionYear.split('-')[0]; // '23'
  const yy = year.padStart(2, '0');
  const ss = semesterCodeMap[semesterName.toLowerCase()];
  const dd = departmentCodeMap[departmentName.toLowerCase()];
  const serial = String(count + 1).padStart(4, '0');

  return `${yy}${ss}${dd}${serial}`; // Final ID
};

export default generateStudentId;