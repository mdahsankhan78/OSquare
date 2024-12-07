const baseUrl = 'https://api.osquare.live/api/';

export const apiUrls = {

    // User
    login:`${baseUrl}User/Login`,

    // Employee
    employee:`${baseUrl}Employee/GetByUserId?id=`,
    employees:`${baseUrl}Employee/GetAll`,
    employeementInfo: `${baseUrl}EmployeementInformation/GetByEmployeeId?id=`,
    employeeBankInfo: `${baseUrl}EmployeeBankInformation/GetByEmployeeId?id=`,
    employeeEmergencyInfo: `${baseUrl}EmployeeEmergencyContact/GetByEmployeeId?id=`,
    employeeOfficialContactinfo: `${baseUrl}EmployeeOfficialContact/GetByEmployeeId?id=`,
    employeePersonalinfo: `${baseUrl}EmployeePersonalInformation/GetByEmployeeId?id=`,
    employeePersonalContactinfo: `${baseUrl}EmployeePersonalContactInformation/GetByEmployeeId?id=`,
    employeeTasks: `${baseUrl}EmployeeTask/GetByEmployeeId?id=`,

    // Shift
    shift : `${baseUrl}Shift/GetById?id=`,

    // UserSettings
    userSettings : `${baseUrl}UserSettings/GetByUserId?userId=`,
    allUserSettings : `${baseUrl}UserSettings/GetAll`,

    //Attendance
    attendancebyId1 : `${baseUrl}Attendance/GetByEmployee?id=`,
    attendancebyId2 : `&startDate=`,
    attendancebyId3 : `&endDate=`,


}