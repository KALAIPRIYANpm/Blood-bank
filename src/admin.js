import React from 'react';
import { useEffect, useState } from 'react';
import { AdminRecords } from './Axios';
import './admin.css';
import {
    Box,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography,
    Paper,
    CircularProgress,
} from '@mui/material';

const Admin = () => {
    const [adminrecs, setAdminRecs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAdminRecords();
    }, []);

    const fetchAdminRecords = async () => {
        try {
            const temp = await AdminRecords();
            setAdminRecs(temp.rows || []);
        } catch (e) {
            console.log(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Box
            sx={{
                fontFamily: 'Roboto, sans-serif',
                backgroundColor: '#f9f9f9',
                minHeight: '100vh',
                padding: 4,
            }}
        >
            <Typography variant="h4" align="center" gutterBottom>
                Admin Records
            </Typography>

            {loading ? (
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                    <CircularProgress size={50} />
                </Box>
            ) : (
                <TableContainer component={Paper} elevation={3} sx={{ maxWidth: '90%', margin: '0 auto', borderRadius: 2 }}>
                    <Table>
                        <TableHead>
                            <TableRow sx={{ backgroundColor: '#424242' }}>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>S.No</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Name</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Contact</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Age</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Blood Group</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Previous Donation</TableCell>
                                <TableCell sx={{ color: 'white', fontWeight: 'bold' }}>Address</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminrecs.length > 0 ? (
                                adminrecs.map((val, index) => (
                                    <TableRow key={index} sx={{ '&:nth-of-type(odd)': { backgroundColor: '#f5f5f5' } }}>
                                        <TableCell>{val.s_no}</TableCell>
                                        <TableCell>{val.name}</TableCell>
                                        <TableCell>{val.contact}</TableCell>
                                        <TableCell>{val.age}</TableCell>
                                        <TableCell>{val.blood_group}</TableCell>
                                        <TableCell>{val.have_you_donated}</TableCell>
                                        <TableCell>{val.address}</TableCell>
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={7} align="center">
                                        No Records Found
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            )}
        </Box>
    );
};

export default Admin;
