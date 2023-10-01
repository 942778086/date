import {createBrowserRouter} from "react-router-dom";

import HomePage from "../view/pc/page/homePage";
import News from "../view/pc/page/news";
import AddCredit from "../view/pc/page/addCredit";
import AboutUs from "../view/pc/page/aboutUs";
import ConcatUs from "../view/pc/page/concatUs";
import App from "../App";

const router = createBrowserRouter([
    {
        path: "/",
        element: App()
    },
    {
        path: "HomePage",
        element: HomePage()
    },
    {
        path: "News",
        element: News()
    },
    {
        path: "AddCredit",
        element: AddCredit()
    }, 
    {
        path: "AboutUs",
        element: AboutUs()
    }, 
    {
        path: "ConcatUs",
        element: ConcatUs()
    },
])

export default router;