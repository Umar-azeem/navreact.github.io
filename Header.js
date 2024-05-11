import React from "react";
const Header = () => {
    const content = <>
        <div className="">
            <ul>
                <link to="Home">
                    <li>Home</li>
                </link>
                <link to="About">
                    <li>About</li>
                </link>
                <link to="Services">
                    <li>Services</li>
                </link>
                <link to="Project">
                    <li>Project</li>
                </link>
                <link to="Contact">
                    <li>Contact</li>
                </link>

            </ul>
        </div>

    </>
    return (
        <>
            <nav>
                <div className="h-10vh justify-between z-50 text-white lg:py-5 px-4 py-4 flex-1">
                    <div className="flex item-center flex-1">
                        <Span className="text-3xl font-bold">Logo</Span>
                    </div>
                    <div className="lg:flex md:flex lg:flex-1 items-center justify-end font-normal hidden">
                        <div className="flex-10">
                            <ul className="flex gap-8 mr-16 text-[18px]">
                                <link to="Home">
                                    <li>Home</li>
                                </link>
                                <link to="About">
                                    <li>About</li>
                                </link>
                                <link to="Services">
                                    <li>Services</li>
                                </link>
                                <link to="Project">
                                    <li>Project</li>
                                </link>
                                <link to="Contact">
                                    <li>Contact</li>
                                </link>
                            </ul>
                        </div>
                    </div>
                </div>


            </nav>
        </>
    )
}
export default Header;