import { Box, Typography } from "@mui/material"
import { Link } from "react-router-dom"
function Menu() {
    return (
        <Box sx={{ width: "100%", height: 70, display: "flex", alignItems: "center", justifyContent: "center", justifySelf: "center",bgcolor:"#e6cb67", }}>
            <Box component={Link} to={"/"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, borderRadius:2,height:10,'&:hover': { bgcolor:"white" } }}>
            <Typography sx={{ fontSize: 19, fontWeight: "bold", }}>Home</Typography></Box>
            <Box component={Link} to={"/MentorForm"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2,  borderRadius:2,height:10,'&:hover': {bgcolor:"white" } }}>
            <Typography sx={{ fontSize: 19, fontWeight: "bold", }}>Create Mentor</Typography></Box>
            <Box component={Link} to={"/StudentForm"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2,  borderRadius:2,height:10,'&:hover': { bgcolor:"white" } }}>
             <Typography sx={{ fontSize: 19, fontWeight: "bold", }}>Create Student</Typography></Box>
            <Box component={Link} to={"/MentorTable"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2,  borderRadius:2,height:10,'&:hover': { bgcolor:"white" } }}>
            <Typography sx={{ fontSize: 19, fontWeight: "bold", }}>Mentor List</Typography></Box>
            <Box component={Link} to={"/AssignStudentsToMentor"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, borderRadius:2,height:10,'&:hover': { bgcolor:"white" } }}>
            <Typography sx={{ fontSize: 19, fontWeight: "bold", }}>AssignStudentsToMentor</Typography></Box>
            <Box component={Link} to={"/AssignorChangeMentor"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, borderRadius:2,height:10,'&:hover': { bgcolor:"white" } }}>
            <Typography sx={{ fontSize: 19, fontWeight: "bold", }}>AssignorChangeMentor</Typography></Box>
            <Box component={Link} to={"/StudentTable"} sx={{ display: "flex", justifyContent: "center", alignItems: "center", textDecoration: "none", color: "black", padding: 2, borderRadius:2,height:10,'&:hover': { bgcolor:"white" } }}>
            <Typography sx={{ fontSize: 19, fontWeight: "bold", }}>Student List</Typography></Box>           
        </Box>
    )
 
}
export default Menu