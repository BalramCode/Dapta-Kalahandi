import { useState } from 'react';
import { NavLink } from "react-router-dom";
import {
    FaPhoneAlt,
    FaEnvelope,
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaHeart,
    FaChevronDown,
    FaChevronRight
} from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import '../App.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    // State to track mobile accordion states
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const [activeMobileSubSubmenu, setActiveMobileSubSubmenu] = useState(null);

    // Updated array configuration supporting deep nesting
    const menuData = [
        { name: "Home", path: "/" },
        {
            name: "About",
            path: "/about",
            submenu: [
                { name: "About Us", path: "/about/about-us" },
                { name: "Organizational Profile", path: "/about/profile" },
                { name: "Governing Body", path: "/about/governing-body" },
                { name: "Organogram", path: "/about/organogram" },
                { name: "Legal Document", path: "/about/legal-documents" },
                { name: "Strategy Roadmap", path: "/about/roadmap" },
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
                    // Deep nested items added here
                    subsubmenu: [
                        { name: "Health and Wellbeing", path: "/activities/all/health" },
                        { name: "Women’s Participation, ownership to Land and resources, and Governance", path: "/activities/all/womens-governance" },
                        { name: "Education and Child Development", path: "/activities/all/education" },
                        { name: "Sustainable Livelihoods and Natural Resource Management", path: "/activities/all/sustainable-livelihoods" },
                        { name: "Environmental Sustainability and Climate Resilience", path: "/activities/all/environmental-climate" },
                        { name: "Disaster Management and Social Inclusion", path: "/activities/all/disaster-inclusion" },
                        { name: "Networking and Capacity Building", path: "/activities/all/networking-capacity" },
                    ]
                },
                { name: "Experience & Highlights", path: "/activities/highlights" },
            ]
        },
        {
            name: "Reports & Reflections",
            path: "/reports",
            submenu: [
                {
                    name: "Reports",
                    path: "/reports/all",
                    subsubmenu: [
                        { name: "Annual Report", path: "/reports/all/annual" },
                        { name: "Financial Report", path: "/reports/all/financial" },
                    ]
                },
                {
                    name: "Impact, Insights, Learnings",
                    path: "/reports/impact",
                    subsubmenu: [
                        { name: "Case Studies", path: "/reports/impact/case-studies" },
                        { name: "Publications", path: "/reports/impact/publications" },
                        { name: "Learning", path: "/reports/impact/learning" },
                        { name: "Testimonials", path: "/reports/impact/testimonials" },
                    ]
                },
            ]
        },
        {
            name: "Get Involved",
            path: "/get-involved",
            submenu: [
                { name: "Volunteer Opportunities", path: "/get-involved/volunteer" },
                { name: "Partnership", path: "/get-involved/partnership" },
                { name: "Donation Information", path: "/get-involved/donation-info" },
            ]
        },
        {
            name: "Gallery",
            path: "/gallery",
            submenu: [
                {
                    name: "Photo Gallery",
                    path: "/gallery/photos",
                    // Deep nested items accurately extracted from your layout image:
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

    const socialLinkStyles = "text-gray-500 hover:text-sky-600 transition-colors duration-200";

    const handleMobileClose = () => {
        setIsOpen(false);
        setActiveMobileSubmenu(null);
        setActiveMobileSubSubmenu(null);
    };

    const toggleMobileSubmenu = (index) => {
        setActiveMobileSubmenu(activeMobileSubmenu === index ? null : index);
        setActiveMobileSubSubmenu(null); // Reset deep layers on outer switch
    };

    const toggleMobileSubSubmenu = (subIndex) => {
        setActiveMobileSubSubmenu(activeMobileSubSubmenu === subIndex ? null : subIndex);
    };

    return (
        <header className="w-full bg-white shadow-sm border-b border-gray-100 relative z-50">
            <div className="px-4 py-3 flex items-center justify-between gap-8 ">

                {/* LOGO SECTION */}
                <div className="flex items-center gap-3 ml-0 shrink-0">
                    <img
                        className="h-16 w-16 md:h-20 md:w-20 border border-gray-200 rounded-full object-cover shadow-sm"
                        src="logo.png"
                        alt="daptalogo"
                    />
                    <p className="text-2xl md:text-3xl font-extrabold tracking-wider text-gray-800">DAPTA</p>
                </div>

                {/* DESKTOP RIGHT CONTENT STACK */}
                <div className="hidden lg:flex flex-1 flex-col gap-4">

                    {/* TOP BAR CONTACTS, SOCIALS & DONATE */}
                    <div className="flex flex-wrap items-center justify-between border-b border-gray-50 pb-2 gap-4">
                        <div className="flex items-center gap-6 text-sm text-gray-600">
                            <a href="tel:+918260647549" className="flex items-center gap-2 hover:text-sky-600 transition-colors">
                                <FaPhoneAlt className="text-sky-500 text-xs" />
                                <span>+91 8260647549</span>
                            </a>
                            <a href="mailto:dapta@gmail.com" className="flex items-center gap-2 hover:text-sky-600 transition-colors">
                                <FaEnvelope className="text-sky-500 text-sm" />
                                <span>dapta@gmail.com</span>
                            </a>
                        </div>

                        <div className="flex items-center gap-6">
                            <nav className="flex items-center gap-4">
                                <NavLink to="/facebook" className={socialLinkStyles} aria-label="Facebook"><FaFacebookF size={16} /></NavLink>
                                <NavLink to="/instagram" className={socialLinkStyles} aria-label="Instagram"><FaInstagram size={18} /></NavLink>
                                <NavLink to="/twitter" className={socialLinkStyles} aria-label="Twitter"><FaTwitter size={18} /></NavLink>
                                <NavLink to="/youtube" className={socialLinkStyles} aria-label="Youtube"><FaYoutube size={18} /></NavLink>
                            </nav>

                            <NavLink to="/donate">
                                <button className="flex items-center gap-2 bg-sky-500 hover:bg-sky-600 text-white font-semibold py-2 px-5 rounded-full shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 text-sm">
                                    <FaHeart size={14} />
                                    <span>Donate Us</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>

                    {/* DESKTOP NAV BAR CONTAINER */}
                    <nav className="flex items-center justify-between w-full lg:max-w-5xl relative">
                        {menuData.map((item, index) => (
                            <div key={index} className="relative group py-2">
                                <NavLink to={item.path} className={navLinkStyles} end={item.path === "/"}>
                                    <span>{item.name}</span>
                                    {item.submenu && <FaChevronDown className="text-[10px] text-gray-400 group-hover:text-sky-500 transition-transform duration-200 group-hover:rotate-180" />}
                                </NavLink>

                                {/* LEVEL 2: Desktop Dropdown Submenu */}
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
                                                    {subItem.subsubmenu && <FaChevronRight className="text-[10px] text-gray-400 group-hover/sub:text-sky-600" />}
                                                </NavLink>

                                                {/* LEVEL 3: Desktop Flyout Subsubmenu (Opens to the right side) */}
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

                    {/* Mobile Navigation List */}
                    <nav className="flex flex-col gap-1">
                        {menuData.map((item, index) => (
                            <div key={index} className="border-b border-gray-50 last:border-0 py-1">
                                {item.submenu ? (
                                    <div>
                                        {/* LEVEL 1 Mobile Toggle Header */}
                                        <button
                                            onClick={() => toggleMobileSubmenu(index)}
                                            className="w-full flex items-center justify-between py-2 text-lg font-semibold text-gray-700 hover:text-sky-600 focus:outline-none"
                                        >
                                            <span>{item.name}</span>
                                            <FaChevronDown className={`text-xs text-gray-400 transition-transform duration-200 ${activeMobileSubmenu === index ? 'rotate-180 text-sky-500' : ''}`} />
                                        </button>

                                        {/* LEVEL 2 Accordion Container */}
                                        <div className={`overflow-hidden transition-all duration-300 ${activeMobileSubmenu === index ? 'max-h-[600px] opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                                            <div className="bg-gray-50 rounded-lg p-2 flex flex-col gap-1">
                                                {item.submenu.map((subItem, subIndex) => (
                                                    <div key={subIndex}>
                                                        {subItem.subsubmenu ? (
                                                            <div>
                                                                {/* LEVEL 2 Mobile Toggle Header with Nested Items */}
                                                                <button
                                                                    onClick={() => toggleMobileSubmenu(subIndex)} // Unique control string can also be mapped
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        toggleMobileSubSubmenu(subIndex);
                                                                    }}
                                                                    className="w-full flex items-center justify-between py-2 px-2 text-sm font-semibold text-gray-600 hover:text-sky-600 focus:outline-none"
                                                                >
                                                                    <span>{subItem.name}</span>
                                                                    <FaChevronDown className={`text-[10px] text-gray-400 transition-transform duration-200 ${activeMobileSubSubmenu === subIndex ? 'rotate-180 text-sky-500' : ''}`} />
                                                                </button>

                                                                {/* LEVEL 3 Accordion Container */}
                                                                <div className={`overflow-hidden transition-all duration-200 ${activeMobileSubSubmenu === subIndex ? 'max-h-60 opacity-100 mt-0.5 mb-1' : 'max-h-0 opacity-0 pointer-events-none'}`}>
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
                                                            /* Standard Second Level Mobile Link */
                                                            <NavLink
                                                                to={subItem.path}
                                                                className="text-sm font-semibold py-2 px-2 transition-colors duration-200 block text-gray-600 hover:text-sky-600"
                                                                onClick={handleMobileClose}
                                                            >
                                                                {subItem.name}
                                                            </NavLink>
                                                        )}
                                                    </div>
                                                ))}
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

                    {/* CONTACT INFO FOOTER FOR MOBILE */}
                    <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
                        <div className="flex flex-col gap-3 text-sm text-gray-600">
                            <a href="tel:+918260647549" className="flex items-center gap-3 py-1">
                                <FaPhoneAlt className="text-sky-500" />
                                <span className="font-medium text-gray-700">+91 8260647549</span>
                            </a>
                            <a href="mailto:dapta@gmail.com" className="flex items-center gap-3 py-1">
                                <FaEnvelope className="text-sky-500" />
                                <span className="font-medium text-gray-700">dapta@gmail.com</span>
                            </a>
                        </div>

                        <div className="flex items-center justify-between gap-4 mt-2">
                            <div className="flex items-center gap-4">
                                <NavLink to="/facebook" className={socialLinkStyles} onClick={handleMobileClose} aria-label="Facebook"><FaFacebookF size={18} /></NavLink>
                                <NavLink to="/instagram" className={socialLinkStyles} onClick={handleMobileClose} aria-label="Instagram"><FaInstagram size={20} /></NavLink>
                                <NavLink to="/twitter" className={socialLinkStyles} onClick={handleMobileClose} aria-label="Twitter"><FaTwitter size={20} /></NavLink>
                                <NavLink to="/youtube" className={socialLinkStyles} onClick={handleMobileClose} aria-label="Youtube"><FaYoutube size={20} /></NavLink>
                            </div>

                            <NavLink to="/donate" onClick={handleMobileClose}>
                                <button className="flex items-center gap-2 bg-sky-500 text-white font-semibold py-2.5 px-6 rounded-full shadow text-sm">
                                    <FaHeart size={14} />
                                    <span>Donate Us</span>
                                </button>
                            </NavLink>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
}

export default Navbar;