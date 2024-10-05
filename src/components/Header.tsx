import type { FC } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button } from "@nextui-org/react";
// import { AcmeLogo } from "./AcmeLogo.jsx";

interface HeaderProps { }

const Header: FC<HeaderProps> = ({ }) => {
    return (
        <Navbar className='px-5 pt-5'>
            <NavbarBrand>
                {/* <AcmeLogo /> */}
                <p className="font-bold text-inherit">Smiline Dentistry</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <p className="font-bold text-inherit">Patient Intake Form</p>
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem>
                    <Button as={Link} color="danger" href="#" variant="flat">
                        Reset Form
                    </Button>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    );
}
export default Header;