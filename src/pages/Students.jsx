import { Box, Divider } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import CustomTypo from '../CustomComponents/CustomTypo'
import filter from "../assets/filter.png"
import CustomButton from "../CustomComponents/CustomButton"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import editIcon from "../assets/edit.png";
import deleteIcon from "../assets/deleteIcon.png";
import { SomeContext } from '../context/context'
import axios from 'axios'
import AddStudent from '../models/AddStudent'
import { WidthFull } from '@mui/icons-material'

export default function Students() {
    const xyz = useContext(SomeContext);
    const [data, setData] = useState([]);
    const [openAddStudent, setOpenAddStudent] = useState(false);
    useEffect(() => {
        axios.get('https://obscure-succotash-49qgjg69qxxf4x-4000.app.github.dev/api/data'
        )
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error.message);
            });
    }, []);

    const handleAddStudent = () => {
        setOpenAddStudent(true);
    }

    return (
        <>
            <Box sx={{ width: xyz.openSidebar ? "WidthFull" : "calc(100%-WidthFull)" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                    <Box>
                        <CustomTypo fontWeight="bold" fontSize="22px" color="#000000">
                            Students List
                        </CustomTypo>
                    </Box>
                    <Box SX={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <img src={filter} alt='filter' width="14px" height="19.25px" style={{ marginRight: "11px" }} />
                        <CustomButton fontSize="14px" color="#FFFFFF" padding="13px 27px 14px 26px" backgroundColor="#FEAF00" onClick={handleAddStudent}>
                            ADD NEW STUDENT
                        </CustomButton>
                    </Box>
                </Box>
                <Divider sx={{ color: "#E5E5E5", marginTop: "20px", marginBottom: "18px" }} />
                <Table sx={{ minWidth: "100%" }}>
                    <TableHead>
                        <TableRow sx={{ borderRadius: "8px" }}>
                            <TableCell sx={{ border: "none" }}>
                            </TableCell>
                            <TableCell sx={{ border: "none" }}>
                                <CustomTypo color="#ACACAC" fontSize="12px" >
                                    Name
                                </CustomTypo>
                            </TableCell>
                            <TableCell sx={{ border: "none" }}>
                                <CustomTypo color="#ACACAC" fontSize="12px" >
                                    Email
                                </CustomTypo>
                            </TableCell>
                            <TableCell sx={{ border: "none" }} >
                                <CustomTypo color="#ACACAC" fontSize="12px" >
                                    Phone
                                </CustomTypo>
                            </TableCell>
                            <TableCell sx={{ border: "none" }} >
                                <CustomTypo color="#ACACAC" fontSize="12px" >
                                    Enroll Number
                                </CustomTypo>
                            </TableCell>
                            <TableCell sx={{ border: "none" }}>
                                <CustomTypo color="#ACACAC" fontSize="12px" >
                                    Date of admission
                                </CustomTypo>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 }, backgroundColor: "#FFFFFF" }}
                            >
                                <TableCell sx={{ border: "none" }}>
                                    <img src="https://wallpapers.com/images/high/cartoon-profile-pictures-7snemqada9e47jj4.webp" style={{ borderRadius: "8px" }} alt="profile pic" width="65px" height="55px" />
                                </TableCell>
                                <TableCell sx={{ border: "none" }}>
                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                        {row.name}
                                    </CustomTypo>
                                </TableCell>
                                <TableCell align="left" sx={{ border: "none" }}>
                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                        {row.email}
                                    </CustomTypo>
                                </TableCell>
                                <TableCell align="left" sx={{ border: "none" }}>
                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500" >
                                        {row.phone}
                                    </CustomTypo>
                                </TableCell>
                                <TableCell align="left" sx={{ border: "none" }}>
                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500" >
                                        {row.enrollNumber}
                                    </CustomTypo>
                                </TableCell>
                                <TableCell align="left" sx={{ border: "none" }}>
                                    <CustomTypo color="#000000" fontSize="14px" fontWeight="500">
                                        {row.dateOfAdmission}
                                    </CustomTypo>
                                </TableCell>
                                <TableCell align="center" sx={{ border: "none" }}>
                                    <Box sx={{ display: "flex", gap: 2 }}>
                                        <img src={editIcon} alt='view' />
                                        <img src={deleteIcon} alt='view' />
                                    </Box>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
            <AddStudent openAddStudent={openAddStudent} setOpenAddStudent={setOpenAddStudent} />
        </>
    )
}
