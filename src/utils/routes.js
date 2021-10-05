import About from "../pages/About";
import ContactUs from "../pages/ContactUs";
import Home from "../pages/Home";
import InAllSubjects from "../pages/InAllSubjects";
import NotFound from "../pages/NotFound";


const pathUrl = [
    {
        path: '/',
        exact: true,
        components: () => <Home />
    }, {
        path: '/home',
        exact: true,
        components: () => <Home />
    }, {
        path: '/about',
        exact: true,
        components: () => <About />
    }, {
        path: '/contact',
        exact: true,
        components: () => <ContactUs />
    }, {
        path: '/allsubjects',
        exact: true,
        components: () => <InAllSubjects />
    }, {
        path: '*',
        components: () => <NotFound />
    }
]

export default pathUrl;