import { useState, useEffect } from 'react';
import { NavLink, Link } from "react-router-dom";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaChevronDown,
    FaChevronRight,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn,
    FaHeart
} from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import '../App.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const [activeMobileSubSubmenu, setActiveMobileSubSubmenu] = useState(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const menuData = [
        { name: "Home", path: "/" },
        {
            name: "About",
            path: "/about",
            submenu: [
                { name: "About Us", path: "/about/about-us" },
                // { name: "Organizational Profile", path: "/about/profile" },
                // { name: "Governing Body", path: "/about/governing-body" },
                // { name: "Organogram", path: "/about/organogram" },
                { name: "Legal Document", path: "/about/legal-documents" },
                { name: "Strategy And Roadmap", path: "/about/roadmap" },
                { name: "Founder Notes", path: "/about/founder-notes" },
            ]
        },
        {
            name: "Activities",
            path: "/activities",
            submenu: [
                {
                    name: "Activities",
                    path: "/activities/all",
                    subsubmenu: [
                        { name: "Health and Wellbeing", path: "/activities/all/health" },
                        { name: "Women’s Participation, ownership to Land and resources, and Governance", path: "/activities/all/womens-governance" },
                        { name: "Education and Child Development", path: "/activities/all/education" },
                        { name: "Sustainable Livelihoods and Natural Resource Management", path: "/activities/all/sustainable-livelihoods" },
                        { name: "Covid Relief", path: "/activities/all/covid-relief" },
                        // { name: "Environmental Sustainability and Climate Resilience", path: "/activities/all/environmental-climate" },
                        // { name: "Disaster Management and Social Inclusion", path: "/activities/all/disaster-inclusion" },
                        // { name: "Networking and Capacity Building", path: "/activities/all/networking-capacity" },
                    ]
                },
                { name: "Experience & Highlights", path: "/activities/highlights" },
            ]
        },
        // {
        //     name: "Reports & Reflections",
        //     path: "/reports",
        //     submenu: [
        //         {
        //             name: "Reports",
        //             path: "/reports/all",
        //             subsubmenu: [
        //                 { name: "Annual Report", path: "/reports/all/annual" },
        //                 { name: "Financial Report", path: "/reports/all/financial" },
        //             ]
        //         },
        //         {
        //             name: "Impact, Insights, Learnings",
        //             path: "/reports/impact",
        //             subsubmenu: [
        //                 { name: "Case Studies", path: "/reports/impact/case-studies" },
        //                 { name: "Publications", path: "/reports/impact/publications" },
        //                 { name: "Learning", path: "/reports/impact/learning" },
        //                 { name: "Testimonials", path: "/reports/impact/testimonials" },
        //             ]
        //         },
        //     ]
        // },
        {
            name: "Reports",
            path: "/reports",
            submenu: [
                {
                    name: "Annual Report",
                    path: "/reports/annual",
                },
                {
                    name: "Financial Report",
                    path: "/reports/financial",
                },
            ]
        },
        // {
        //     name: "Get Involved",
        //     path: "/get-involved",
        //     submenu: [
        //         { name: "Volunteer Opportunities", path: "/get-involved/volunteer" },
        //         { name: "Partnership", path: "/get-involved/partnership" },
        //         { name: "Donation Information", path: "/get-involved/donation-info" },
        //     ]
        // },
        {
            name: "Gallery",
            path: "/gallery",
            submenu: [
                {
                    name: "Photo Gallery",
                    path: "/gallery/photos",
                    subsubmenu: [
                        { name: "Community Interactions", path: "/gallery/photos/community" },
                        { name: "Events", path: "/gallery/photos/events" },
                        { name: "Activities", path: "/gallery/photos/activities" },
                        { name: "Other", path: "/gallery/photos/other" },
                        { name: "Awards & Certificates", path: "/gallery/photos/awards-certificates" },
                        { name: "Club Photos", path: "/gallery/photos/club" },
                        { name: "Health", path: "/gallery/photos/health" },
                        { name: "Education", path: "/gallery/photos/education" },
                    ]
                },
                { name: "Video Gallery", path: "/gallery/videos" },
                { name: "Social Media", path: "/gallery/social" },
            ]
        },
        { name: "Contact Us", path: "/contact" }
    ];

    const navLinkStyles = ({ isActive }) =>
        `text-base font-semibold transition-colors duration-200 hover:text-sky-500 pb-1 flex items-center gap-1 ${isActive ? 'text-sky-600 border-b-2 border-sky-600' : 'text-gray-600'
        }`;

    const mobileNavLinkStyles = ({ isActive }) =>
        `text-base font-semibold py-2 transition-colors duration-200 block ${isActive ? 'text-sky-600 pl-2 border-l-4 border-l-sky-600' : 'text-gray-700'
        }`;

    const handleMobileClose = () => {
        setIsOpen(false);
        setActiveMobileSubmenu(null);
        setActiveMobileSubSubmenu(null);
    };

    const toggleMobileSubmenu = (index) => {
        setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
        setActiveMobileSubSubmenu(null);
    };

    const toggleMobileSubmenuDirect = (combinedIndex) => {
        setActiveMobileSubSubmenu(activeMobileSubSubmenu === combinedIndex ? null : combinedIndex);
    };

    return (
        <header className={`w-full bg-white shadow-sm border-b border-gray-100 fixed top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-1' : 'py-0'}`}>
            <div className={`px-4 flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-3'}`}>

                {/* LOGO SECTION */}
                <Link to="/" className="flex items-center gap-3 ml-0 shrink-0 cursor-pointer">
                    <img
                        className={`border border-gray-200 rounded-full object-cover shadow-sm transition-all duration-300 ${isScrolled ? 'h-12 w-12' : 'h-16 w-16 md:h-20 md:w-20'
                            }`}
                        src="logo.png"
                        src="https://res.cloudinary.com/ddptxvwrj/image/upload/v1781018440/daptaLogo1_pyyjio.jpg"
                        alt="daptalogo"
                    />
                    <p className={`font-extrabold tracking-wider text-gray-800 transition-all duration-300 ${isScrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'
                        }`}>
                        DAPTA
                    </p>
                </Link>

                {/* DESKTOP RIGHT CONTENT CONTAINER */}
                <div className={`hidden lg:flex flex-1 transition-all duration-300 ${isScrolled ? 'flex-row items-center justify-between pl-4' : 'flex-col gap-4'}`}>

                    {/* TOP CONTACT & SOCIAL BAR */}
                    <div className={`transition-all duration-300 ${isScrolled
                        ? 'flex items-center gap-4 xl:gap-6 border-b-0 pb-0 order-2 ml-auto'
                        : 'flex w-full justify-between border-b border-gray-50 pb-2'
                        }`}>
                        {/* Left Side: Contact details */}
                        <div className={`flex items-center text-gray-600 ${isScrolled ? 'gap-4 xl:gap-6 text-xs xl:text-sm' : 'gap-6 text-sm'}`}>
                            <a href="tel:+919437029124" className="flex items-center gap-2 hover:text-sky-600 transition-colors shrink-0">
                                <FaPhoneAlt className="text-sky-500 text-xs" />
                                <span className="font-semibold">+91 9437029124</span>
                            </a>
                            <a href="mailto:dapta@gmail.com" className="flex items-center gap-2 hover:text-sky-600 transition-colors shrink-0">
                                <FaEnvelope className="text-sky-500 text-sm" />
                                <span className="font-semibold">dapta@gmail.com</span>
                            </a>
                        </div>

                        {/* Right Side: Social Media & Donate Button (Removes smoothly on scroll) */}
                        <div className={`flex items-center gap-4 transition-all duration-300 origin-right ${isScrolled ? 'max-w-0 opacity-0 overflow-hidden pointer-events-none scale-x-0' : 'max-w-xl opacity-100'
                            }`}>
                            <div className="flex items-center gap-4 text-gray-500 border-r border-gray-200 pr-4">
                                <a href="#" className="hover:text-sky-600 transition-colors"><FaFacebookF size={18} /></a>
                                <a href="#" className="hover:text-sky-600 transition-colors"><FaTwitter size={18} /></a>
                                <a href="#" className="hover:text-sky-600 transition-colors"><FaInstagram size={18} /></a>
                                <a href="#" className="hover:text-sky-600 transition-colors"><FaLinkedinIn size={18} /></a>
                            </div>
                            <NavLink
                                to="/get-involved/donation-info"
                                className="bg-rose-500 hover:bg-rose-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5 transition-all transform hover:scale-105 shrink-0"
                            >
                                <FaHeart size={10} />
                                <span>Donate Us</span>
                            </NavLink>
                        </div>
                    </div>

                    {/* NAV BAR LINKS CONTAINER */}
                    <nav className={`flex items-center transition-all duration-300 ${isScrolled ? 'justify-start  gap-x-5 xl:gap-x-7 order-1' : 'justify-between w-full relative'
                        }`}>
                        {menuData.map((item, index) => (
                            <div key={index} className="relative group py-2">
                                <NavLink to={item.path} className={navLinkStyles} end={item.path === "/"}>
                                    <span>{item.name}</span>
                                    {item.submenu && <FaChevronDown className="text-[10px] text-gray-400 group-hover:text-sky-500 transition-transform duration-200 group-hover:rotate-180" />}
                                </NavLink>

                                {/* LEVEL 2 Dropdown */}
                                {item.submenu && (
                                    <div className="absolute left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl py-2 opacity-0 scale-95 invisible group-hover:opacity-100 group-hover:scale-100 group-hover:visible transition-all duration-200 origin-top-left z-50">
                                        {item.submenu.map((subItem, subIndex) => (
                                            <div key={subIndex} className="relative group/sub">
                                                <NavLink
                                                    to={subItem.path}
                                                    className={({ isActive }) =>
                                                        `flex items-center justify-between px-4 py-2.5 text-sm font-medium transition-colors duration-150 text-gray-700 hover:bg-sky-50 hover:text-sky-600 ${isActive ? 'bg-sky-50/70 text-sky-600 font-semibold border-l-4 border-sky-500' : ''
                                                        }`
                                                    }
                                                >
                                                    <span>{subItem.name}</span>
                                                    {subItem.submenu && <FaChevronRight className="text-[10px] text-gray-400 group-hover/sub:text-sky-600" />}
                                                </NavLink>

                                                {/* LEVEL 3 Flyout */}
                                                {subItem.subsubmenu && (
                                                    <div className="absolute left-full top-0 ml-0.5 w-72 bg-white border border-gray-100 rounded-lg shadow-xl py-2 opacity-0 scale-95 invisible group-hover/sub:opacity-100 group-hover/sub:scale-100 group-hover/sub:visible transition-all duration-150 origin-top-left z-50">
                                                        {subItem.subsubmenu.map((deepItem, deepIndex) => (
                                                            <NavLink
                                                                key={deepIndex}
                                                                to={deepItem.path}
                                                                className={({ isActive }) =>
                                                                    `block px-4 py-2 text-xs font-medium transition-colors duration-150 text-gray-600 hover:bg-sky-50 hover:text-sky-600 ${isActive ? 'bg-sky-50 text-sky-600 font-semibold' : ''
                                                                    }`
                                                                }
                                                            >
                                                                {deepItem.name}
                                                            </NavLink>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                </div>

                {/* MOBILE HAMBURGER BUTTON */}
                <div className="flex lg:hidden items-center">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-700 hover:text-sky-600 focus:outline-none p-2"
                        aria-label="Toggle Menu"
                    >
                        {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                    </button>
                </div>
            </div>

            {/* MOBILE DRAWER OVERLAY */}
            <div
                className={`lg:hidden w-full bg-white border-t border-gray-100 shadow-xl absolute top-full left-0 transition-all duration-300 ease-in-out transform ${isOpen ? "opacity-100 translate-y-0 visible" : "opacity-0 -translate-y-4 invisible pointer-events-none"
                    }`}
            >
                <div className="px-5 py-4 flex flex-col gap-6 max-h-[80vh] overflow-y-auto">
                    <nav className="flex flex-col gap-1">
                        {menuData.map((item, index) => (
                            <div key={index} className="border-b border-gray-50 last:border-0 py-1">
                                {item.submenu ? (
                                    <div>
                                        <button
                                            onClick={() => toggleMobileSubmenu(index)}
                                            className="w-full flex items-center justify-between py-2 text-lg font-semibold text-gray-700 hover:text-sky-600 focus:outline-none"
                                        >
                                            <span>{item.name}</span>
                                            <FaChevronDown className={`text-xs text-gray-400 transition-transform duration-200 ${activeMobileSubmenu === index ? 'rotate-180 text-sky-500' : ''}`} />
                                        </button>

                                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileSubmenu === index ? 'max-h-[1000px] opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                            <div className="bg-gray-50 rounded-lg p-2 flex flex-col gap-1">
                                                {item.submenu.map((subItem, subIndex) => {
                                                    const combinedKey = `${index}-${subIndex}`;
                                                    return (
                                                        <div key={subIndex}>
                                                            {subItem.subsubmenu ? (
                                                                <div>
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            toggleMobileSubmenuDirect(combinedKey);
                                                                        }}
                                                                        className="w-full flex items-center justify-between py-2 px-2 text-sm font-semibold text-gray-600 hover:text-sky-600 focus:outline-none"
                                                                    >
                                                                        <span>{subItem.name}</span>
                                                                        <FaChevronDown className={`text-[10px] text-gray-400 transition-transform duration-200 ${activeMobileSubSubmenu === combinedKey ? 'rotate-180 text-sky-500' : ''}`} />
                                                                    </button>

                                                                    <div className={`overflow-hidden transition-all duration-200 ${activeMobileSubSubmenu === combinedKey ? 'max-h-[500px] opacity-100 mt-0.5 mb-1' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                                                        <div className="bg-white border border-gray-100 rounded-md p-1 pl-3 flex flex-col gap-0.5">
                                                                            {subItem.subsubmenu.map((deepItem, deepIndex) => (
                                                                                <NavLink
                                                                                    key={deepIndex}
                                                                                    to={deepItem.path}
                                                                                    className={mobileNavLinkStyles}
                                                                                    onClick={handleMobileClose}
                                                                                >
                                                                                    {deepItem.name}
                                                                                </NavLink>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            ) : (
                                                                <NavLink
                                                                    to={subItem.path}
                                                                    className="text-sm font-semibold py-2 px-2 transition-colors duration-200 block text-gray-600 hover:text-sky-600"
                                                                    onClick={handleMobileClose}
                                                                >
                                                                    {subItem.name}
                                                                </NavLink>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <NavLink to={item.path} className="text-lg font-semibold py-2 block text-gray-700" onClick={handleMobileClose} end={item.path === "/"}>
                                        {item.name}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* MOBILE CONTACT INFO FOOTER */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                        <div className="flex flex-col gap-3 text-sm text-gray-600">
                            <a href="tel:+918260647549" className="flex items-center gap-3 py-1">
                                <FaPhoneAlt className="text-sky-500" />
                                <span className="font-semibold text-gray-700">+91 8260647549</span>
                            </a>
                            <a href="mailto:dapta@gmail.com" className="flex items-center gap-3 py-1">
                                <FaEnvelope className="text-sky-500" />
                                <span className="font-semibold text-gray-700">dapta@gmail.com</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Navbar;