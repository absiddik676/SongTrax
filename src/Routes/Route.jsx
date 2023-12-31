import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../page/Home/Home";
import SharePage from "../page/SharePage/SharePage";
import Edit from "../page/Edit/Edit";


const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/share',
                element:<SharePage/>
            },,
            {
                path:'/edit',
                element:<Edit/>
            }
        ]
    }
])

export default router