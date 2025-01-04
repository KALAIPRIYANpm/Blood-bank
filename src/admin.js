import React from 'react';
import { useEffect, useState } from 'react';
import { AdminRecords } from './Axios';
import './admin.css';

const Admin = () => {
    const [adminrecs, setAdminRecs] = useState([]);

    useEffect(() => {
        fetchAdminRecords();
    }, []);


    const fetchAdminRecords = async () => {
        try {
            const temp = await AdminRecords();
            // console.log("fetched records :",temp); 
            setAdminRecs(temp.rows || []); 
        } catch (e) {
            console.log(e);
        }
    };
    

    return (
        <>
            <div style={{ fontFamily: 'sans-serif' }}>
                <link
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                    rel="stylesheet"
                />


                <div>
                    <table className="table table-striped  col-md-12 col-sm-0">
                        <thead className="table table-hover">
                            <tr style={{backgroundColor:"grey"}}>
                                <th>
                                    <h3>S.no</h3>
                                </th>
                                <th>
                                    <h3>Name</h3>
                                </th>
                                <th>
                                    <h3>Contact</h3>
                                </th>
                                <th>
                                    <h3>Age</h3>
                                </th>
                                <th>
                                    <h3>Blood Group</h3>
                                </th>
                                <th>
                                    <h3>Previous Donation</h3>
                                </th>
                                <th>
                                    <h3>Address</h3>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {adminrecs.length > 0 ? (
                                adminrecs.map((val, index) => (
                                    <tr key={index}>
                                        <td>{val.s_no}</td>
                                        <td>{val.name}</td>
                                        <td>{val.contact}</td>
                                        <td>{val.age}</td>
                                        <td>{val.blood_group}</td>
                                        <td>{val.have_you_donated}</td>
                                        <td>{val.address}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7">No Records</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Admin;
