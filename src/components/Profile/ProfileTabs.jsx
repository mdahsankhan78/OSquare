import React, { useState } from 'react'
import EmployeementInfo from '../../api/EmployeementInfo'
import EmlpoyeePersonalInfo from '../../api/EmployeePersonalInfo';
import EmployeePersonalContactInfo from '../../api/EmployeePersonalContactInfo';
import EmployeeOfficialContactInfo from '../../api/EmployeeOfficialContactInfo';
import EmployeeEmergencylInfo from '../../api/EmployeeEmergencyInfo';
import EmployeeBankInfo from '../../api/EmployeeBankInfo';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "./../ui/tabs"
import Spinner from '../ui/Spinner';
import ProfileCard from './ProfileCard';

const ProfileTabs = () => {
  const [employee, setEmployee] = useState(null);
  const [employeementInfo, setemployeementInfo] = useState(null);
  const [employeePersonalInfo, setemployeePersonalInfo] = useState(null);
  const [employeePersonalContactInfo, setemployeePersonalContactInfo] = useState(null);
  const [employeeBankInfo, setemployeeBankInfo] = useState(null);
  const [employeeEmergencyInfo, setemployeeEmergencyInfo] = useState(null);
  const [employeeOfficialInfo, setemployeeOfficialInfo] = useState(null);

  const handleEmployeeFetched = (data) => {
    setEmployee(data);
  };
  const handleEmployeementFetched = (data) => {
    setemployeementInfo(data);
  };
  const handleOfficialContactFetched = (data) => {
    setemployeeOfficialInfo(data);
  };
  const handleBankFetched = (data) => {
    setemployeeBankInfo(data);
  };
  const handlePersonalFetched = (data) => {
    setemployeePersonalInfo(data);
  };
  const handlePersonalContactFetched = (data) => {
    setemployeePersonalContactInfo(data);
  };
  const handleEmergencyFetched = (data) => {
    setemployeeEmergencyInfo(data);
  };

  return (
    <>
      <Tabs defaultValue='employeement'>
        <TabsList>
          <TabsTrigger value='employeement'>Employeement Info</TabsTrigger>
          <TabsTrigger value='personal'>Personal Info</TabsTrigger>
          <TabsTrigger value='official'>Official Contact</TabsTrigger>
          <TabsTrigger value='emergency'>Emergency Contact</TabsTrigger>
          <TabsTrigger value='personalcontact'>Personal Contact Info</TabsTrigger>
          <TabsTrigger value='bank'>Bank Info</TabsTrigger>
        </TabsList>

        <TabsContent value='employeement'>
          <EmployeementInfo onDataFetched={handleEmployeementFetched} Employee={handleEmployeeFetched} />
          {employeementInfo ?
            <>
              <div className=" shadow-card p-4 rounded-lg bg-card overflow-x-auto space-y-2 data-scroll text-accent">
                <h1 className='text-accent text-xl'>Employment Information</h1>
                <div className="grid grid-cols-2 gap-x-4">
                  <p>Company</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Station</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Department</p>
                  <p>{employeementInfo.company ? employeementInfo.company : employee.department}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Designation</p>
                  <p>{employeementInfo.company ? employeementInfo.company : employee.designation}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Role</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Employee Category</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Employee Type</p>
                  <p>{employeementInfo.company ? employeementInfo.company : 'Developer'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Grade</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Years in Service</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Confirmation Date</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Joining Date</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Probation Expiry Date</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Reference Channel</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Last Organization Served</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Designation At Time Of Joining</p>
                  <p>{employeementInfo.company ? employeementInfo.company : '---'}</p>
                </div>
              </div>
            </>
            :
            <Spinner />
          }

          <ProfileCard text1={'Employee Card Front'} text2={'Employee Card Back'} text3={'Health Card Front'} text4={'Health Card Back'}/>
        </TabsContent>

        <TabsContent value='personal'>
          <EmlpoyeePersonalInfo onDataFetched={handlePersonalFetched} />
          {employeePersonalInfo ?
            <>
              <div className=" shadow-card p-4 rounded-lg bg-card overflow-x-auto space-y-2 data-scroll text-accent">
              <h1 className='text-accent text-xl'>Personal Information</h1>
                <div className="grid grid-cols-2 gap-x-4">
                  <p>Father Name</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>CNIC</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Gender</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Address</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Date of birth</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>CNIC Expiry</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Marital Status</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Nationality</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Religion</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Blood Group</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Last Qualification</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Passport No.</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Driving License No.</p>
                  <p>{employeePersonalInfo.company ? employeePersonalInfo.company : '---'}</p>
                </div>
              </div>
              <ProfileCard text1={'CNIC Front'} text2={'CNIC Back'} text3={'Driving License Front'} text4={'Driving License Back'}/>
            </>
            :
            <Spinner />
          }
        </TabsContent>

        <TabsContent value='official'>
          <EmployeeOfficialContactInfo onDataFetched={handleOfficialContactFetched} />
          {employeeOfficialInfo ?
            <>
              <div className=" shadow-card p-4 rounded-lg bg-card overflow-x-auto space-y-2 data-scroll text-accent">
              <h1 className='text-accent text-xl'>Official Contact</h1>
                <div className="grid grid-cols-2 gap-x-4">
                  <p>Official Email</p>
                  <p>{employeeOfficialInfo.company ? employeeOfficialInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Official Phone</p>
                  <p>{employeeOfficialInfo.company ? employeeOfficialInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Official Mobile Number</p>
                  <p>{employeeOfficialInfo.company ? employeeOfficialInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Credit Limit</p>
                  <p>{employeeOfficialInfo.company ? employeeOfficialInfo.company : '---'}</p>
                </div>

              </div>
            </>
            :
            <Spinner />
          }
        </TabsContent>

        <TabsContent value='emergency'>
          <EmployeeEmergencylInfo onDataFetched={handleEmergencyFetched} />
          {employeeEmergencyInfo ?
            <>
              <div className=" shadow-card p-4 rounded-lg bg-card overflow-x-auto space-y-2 data-scroll text-accent">
              <h1 className='text-accent text-xl'>Emergency Contact 1</h1>
                <div className="grid grid-cols-2 gap-x-4">
                  <p>Contact Person</p>
                  <p>{employeeEmergencyInfo.company ? employeeEmergencyInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Relation</p>
                  <p>{employeeEmergencyInfo.company ? employeeEmergencyInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Contact No.</p>
                  <p>{employeeEmergencyInfo.company ? employeeEmergencyInfo.company : '---'}</p>
                </div>

              </div>
              <div className=" shadow-card p-4 rounded-lg bg-card overflow-x-auto space-y-2 data-scroll text-accent mt-4">
              <h1 className='text-accent text-xl'>Emergency Contact 2</h1>
                <div className="grid grid-cols-2 gap-x-4">
                  <p>Contact Person</p>
                  <p>{employeeEmergencyInfo.company ? employeeEmergencyInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Relation</p>
                  <p>{employeeEmergencyInfo.company ? employeeEmergencyInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Contact No.</p>
                  <p>{employeeEmergencyInfo.company ? employeeEmergencyInfo.company : '---'}</p>
                </div>

              </div>
            </>
            :
            <Spinner />
          }
        </TabsContent>

        <TabsContent value='personalcontact'>
          <EmployeePersonalContactInfo onDataFetched={handlePersonalContactFetched} />
          {employeePersonalContactInfo ?
            <>
              <div className=" shadow-card p-4 rounded-lg bg-card overflow-x-auto space-y-2 data-scroll text-accent">
              <h1 className='text-accent text-xl'>Personal Contact Information</h1>
                <div className="grid grid-cols-2 gap-x-4">
                  <p>Phone Number</p>
                  <p>{employeePersonalContactInfo.company ? employeePersonalContactInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Mobile Number 1</p>
                  <p>{employeePersonalContactInfo.company ? employeePersonalContactInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Mobile Number 2</p>
                  <p>{employeePersonalContactInfo.company ? employeePersonalContactInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>WhatsApp Number</p>
                  <p>{employeePersonalContactInfo.company ? employeePersonalContactInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Email Address</p>
                  <p>{employeePersonalContactInfo.company ? employeePersonalContactInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Present Address</p>
                  <p>{-employeePersonalContactInfo.company ? employeePersonalContactInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Country</p>
                  <p>{employeePersonalContactInfo.company ? employeePersonalContactInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>City</p>
                  <p>{employeePersonalContactInfo.company ? employeePersonalContactInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Permanent Address</p>
                  <p>{employeePersonalContactInfo.company ? employeePersonalContactInfo.company : '---'}</p>
                </div>

              </div>
            </>
            :
            <Spinner />
          }
        </TabsContent>

        <TabsContent value='bank'>
          <EmployeeBankInfo onDataFetched={handleBankFetched} />
          {employeeBankInfo ?
            <>
              <div className=" shadow-card p-4 rounded-lg bg-card overflow-x-auto space-y-2 data-scroll text-accent">
              <h1 className='text-accent text-xl'>Bank Details</h1>
                <div className="grid grid-cols-2 gap-x-4">
                  <p>Bank name</p>
                  <p>{employeeBankInfo.company ? employeeBankInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Bank Branch</p>
                  <p>{employeeBankInfo.company ? employeeBankInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Bank Account Number</p>
                  <p>{employeeBankInfo.company ? employeeBankInfo.company : '---'}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-4">
                  <p>Bank Account Title</p>
                  <p>{employeeBankInfo.company ? employeeBankInfo.company : '---'}</p>
                </div>

              </div>
            </>
            :
            <Spinner />
          }
        </TabsContent>
      </Tabs>
    </>
  )
}

export default ProfileTabs