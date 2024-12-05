const baseUrl = 'https://api.osquare.live/api/';

export const apiUrls = {

    // User
    login:`${baseUrl}User/Login`,

    // Employee
    employee:`${baseUrl}Employee/GetByUserId?id=`,
    employees:`${baseUrl}Employee/GetAll`,

    // Shift
    shift : `${baseUrl}Shift/GetById?id=`,

}