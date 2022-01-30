// import image from "./asset/buit.jpg"
import Menu from "./Menubar"
import { Box } from "@mui/material"
import  image from "../assets/FacultyMaterial.gif"

function Home() {
    return (
        <Box>
            <Menu/>
            <div className="base_container">
                <div className="title_container">Welcome to Zen portal!</div>
               <img alt="library" className= "image_container" src={image} /> 
            </div>
            
        </Box>
    )
}
export default Home