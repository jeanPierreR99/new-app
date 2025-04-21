import React from "react";
import { NavLink } from "react-router-dom";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "../components/ui/dropdown-menu";
import { Button } from "../components/ui/button";
import { ChevronDown, Menu } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "../components/ui/sheet";

const Header = () => {
    return (
        <header className="bg-white border-b shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img
                        src="https://appmunitambopata.com/img/tambopata_logo_verde.webp"
                        alt="Logo"
                        className="h-10 w-auto"
                    />
                </div>

                {/* Menú para escritorio */}
                <nav className="hidden md:flex items-center gap-6">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `text-sm font-medium transition hover:text-primary ${isActive ? "text-primary font-semibold" : "text-muted-foreground"
                            }`
                        }
                    >
                        Inicio
                    </NavLink>

                    {/* Institucional */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm items-center flex font-medium text-muted-foreground hover:text-primary transition">
                            Institucional
                            <ChevronDown size={20} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem asChild>
                                <NavLink to="/nosotros">Sobre Nosotros</NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <NavLink to="/autoridades">Autoridades</NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <NavLink to="/organigrama">Organigrama</NavLink>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Servicios */}
                    <DropdownMenu>
                        <DropdownMenuTrigger className="text-sm flex items-center font-medium text-muted-foreground hover:text-primary transition">
                            Servicios
                            <ChevronDown size={20} />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem asChild>
                                <NavLink to="/tramites">Trámites en línea</NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <NavLink to="/reclamos">Libro de Reclamaciones</NavLink>
                            </DropdownMenuItem>
                            <DropdownMenuItem asChild>
                                <NavLink to="/pagos">Pago de Tributos</NavLink>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    <NavLink
                        to="/contacto"
                        className={({ isActive }) =>
                            `text-sm font-medium transition hover:text-primary ${isActive ? "text-primary font-semibold" : "text-muted-foreground"
                            }`
                        }
                    >
                        Contacto
                    </NavLink>
                </nav>

                {/* Menú para móviles */}
                <div className="md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="p-4">
                            <img
                                src="https://appmunitambopata.com/img/tambopata_logo_verde.webp"
                                alt="Logo"
                                className="h-20 object-contain"
                            />
                            <div className="flex flex-col gap-4 mt-6">
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition hover:text-primary ${isActive ? "text-primary font-semibold" : "text-muted-foreground"
                                        }`
                                    }
                                >
                                    Inicio
                                </NavLink>

                                <div>
                                    <p className="text-muted-foreground text-sm font-medium mb-1">
                                        Institucional
                                    </p>
                                    <div className="flex flex-col pl-3 gap-2">
                                        <NavLink to="/nosotros">Sobre Nosotros</NavLink>
                                        <NavLink to="/autoridades">Autoridades</NavLink>
                                        <NavLink to="/organigrama">Organigrama</NavLink>
                                    </div>
                                </div>

                                <div>
                                    <p className="text-muted-foreground text-sm font-medium mb-1">
                                        Servicios
                                    </p>
                                    <div className="flex flex-col pl-3 gap-2">
                                        <NavLink to="/tramites">Trámites en línea</NavLink>
                                        <NavLink to="/reclamos">Libro de Reclamaciones</NavLink>
                                        <NavLink to="/pagos">Pago de Tributos</NavLink>
                                    </div>
                                </div>

                                <NavLink
                                    to="/contacto"
                                    className={({ isActive }) =>
                                        `text-sm font-medium transition hover:text-primary ${isActive ? "text-primary font-semibold" : "text-muted-foreground"
                                        }`
                                    }
                                >
                                    Contacto
                                </NavLink>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;
