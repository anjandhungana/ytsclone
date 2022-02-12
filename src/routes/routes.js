import { Landing } from "../pages/Landing";
import { MovieDetails } from "../pages/MovieDetails";
import { Search } from "../pages/Search";

export const ROUTES = [
    {path:'/', element:<Landing/>, exact:true},
    {path:'/movie/:id', element:<MovieDetails/>, exact:true},
    {path:'/search/:keyword', element:<Search/>, exact:true},
];

