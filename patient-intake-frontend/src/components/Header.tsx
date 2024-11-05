import type { FC } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";
import Logo from '../assets/LogoLightHorizontal.svg'

interface HeaderProps { }

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <Navbar className='flex flex-row px-5 pt-5'>
            <NavbarContent justify="start">
                <p className="font-bold text-inherit">Patient Intake Form</p>
            </NavbarContent>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <div className='flex'>
                    <img className='h-16' src={Logo} alt="React Logo" />
                </div>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="danger" href="#" variant="flat" onClick={() => window.location.reload()}>
                        Reset Form
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
export default Header;