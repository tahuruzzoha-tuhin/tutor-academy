import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../assets/css/header.css'
import '../assets/css/mediaFiles/headermedia.css';
import { AnimatePresence, motion } from 'framer-motion';



export default function Header() {
    const [paths, setPath] = useState(false);

    const mobnavani = {
        visible: {
            right: 0,
            transition: { duration: 0.75, ease: 'easeOut' }
        },
        hidden: {
            right: '-100%',
            transition: { duration: 1, ease: 'easeIn' }
        }
    }

    const hambutton = () => {
        setPath(!paths);
    }

    const pathname = useLocation();

    useEffect(() => {
        if (paths) {
            setPath(!paths);
        }

    }, [pathname])

    const headerProPic = () => {

        return (
            <div className="buttons">
                <Link to="">
                    <button>LOG IN</button>
                </Link>
                <Link to="">
                    <button>REGISTER</button>
                </Link>
            </div>
        )
    }


    return (
        <>
            <nav style={{ boxShadow: '0px 5px 5px 0px gray' }}>
                <div className="column">
                    <div className="hlogo">
                        <Link to="/">
                            <h1><span style={{ fontSize: '35px' }}>Tutor</span> <span style={{ fontSize: '30px' }}>Academy</span></h1>
                        </Link>
                    </div>
                </div>
                <div className="column">
                    <div className="navigation">
                        <ul>
                            <li>
                                <Link to="/home">HOME</Link>
                            </li>
                            <li>
                                <Link to='/about'>ABOUT US</Link>
                            </li>
                            <li>
                                <Link to='/contact'>CONTACT US</Link>
                            </li>

                            <li>
                                <Link to="/allsubjects">SERVICES</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="column">
                    {
                        headerProPic()
                    }
                </div>
                <div className="ham">
                    <button className="hambeggermenu" onClick={hambutton}><i className="fas fa-bars"></i></button>
                </div>
            </nav>
            <AnimatePresence exitBeforeEnter>
                {

                    paths ?
                        <motion.div className="hammenu" variants={mobnavani} animate='visible' initial='hidden' exit="hidden">
                            <div className="menham">
                                <ul>
                                    <Link to="/home">
                                        <li>
                                            HOME
                                        </li>
                                    </Link>
                                    <Link to='/about'>
                                        <li>
                                            ABOUT US
                                        </li>
                                    </Link>
                                    <Link to='/contact'>
                                        <li>
                                            CONTACT US
                                        </li>
                                    </Link>

                                    <Link to="/allsubjects">
                                        <li>
                                            SERVICES
                                        </li>
                                    </Link>
                                </ul>
                                <div className="butham">
                                    {
                                        headerProPic()
                                    }
                                </div>
                            </div>
                        </motion.div>
                        : ''
                }
            </AnimatePresence>
        </>
    )
}
