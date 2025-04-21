import React, { useRef, useState } from "react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/shared/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useCallback } from "react";

const news = [
    {
        title: "Inauguración de obras",
        description: "La municipalidad inauguró nuevas obras en la zona rural para mejorar la calidad de vida de los pobladores, construyendo vías, servicios básicos y espacios recreativos adecuados para todos.",
        image: "https://diariocorreo.pe/resizer/A9y3Kbxk-a69w1TPi8at8hCtADM=/580x330/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/HGI7HSTQYJF4LNZ47HWS7GD3CE.jpg",
    },
    {
        title: "Campaña de salud",
        description: "Se llevó a cabo una campaña gratuita de salud para toda la población del distrito, incluyendo despistajes, vacunación, y orientación médica especializada en diferentes áreas.",
        image: "https://cdn.www.gob.pe/uploads/document/file/5042633/MPP%20retira%20publicidad%20de%20250%20postes%20de%20la%20ciudad.jpg",
    },
    {
        title: "Feria agropecuaria",
        description: "La feria agropecuaria reunió a productores locales con excelentes resultados de venta, intercambio de semillas, charlas técnicas y promoción de prácticas sostenibles.",
        image: "https://cdn.www.gob.pe/uploads/document/file/7717140/standard_1119928-480770830_1034675208695967_3002238943827089583_n.jpg",
    },
    {
        title: "Festival cultural",
        description: "Un evento lleno de color, música y tradiciones reunió a toda la comunidad para disfrutar de danzas típicas, gastronomía local y expresiones artísticas.",
        image: "https://cdn.www.gob.pe/uploads/document/file/6419216/standard_963605-445077142_844120334418123_4986675228728085132_n.jpg",
    },
    {
        title: "Nuevas becas escolares",
        description: "Anuncian becas integrales para estudiantes con alto rendimiento académico, que cubrirán matrícula, materiales y soporte económico mensual.",
        image: "https://cdn.www.gob.pe/uploads/document/file/6572714/standard_982535-449317513_865409738955849_8202016295460487955_n.jpg",
    },
];


const CarouselHome = () => {
    const [current, setCurrent] = useState(0);
    const autoplayRef = useRef(Autoplay({ delay: 7000, stopOnInteraction: false }));

    const handleNext = () => {
        setCurrent((prev) => (prev + 1) % news.length);
    };

    const handlePrev = () => {
        setCurrent((prev) => (prev - 1 + news.length) % news.length);
    };

    const handleMouseEnter = useCallback(() => {
        autoplayRef.current?.stop();
    }, []);

    const handleMouseLeave = useCallback(() => {
        autoplayRef.current?.play();
    }, []);

    return (
        <div
            className="w-full bg-[#009649] h-[60vh]"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Carousel
                plugins={[autoplayRef.current]}
                opts={{ align: "start" }}
                className="relative"
            >
                <CarouselContent
                    className="transition-transform ease-in-out duration-500"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {news.map((item, index) => (
                        <CarouselItem key={index} className="basis-full h-[60vh]">
                            <div className="overflow-hidden flex flex-col md:flex-row h-full">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-6/12 md:w-7/12 h-full object-fill"
                                />
                                <div className="w-6/12 md:w-4/12 p-6 select-none flex flex-col justify-center">
                                    <h3 className="font-bold text-xl mb-4 uppercase text-yellow-400">{item.title}</h3>
                                    <p className="text-base  text-white overflow-y-auto max-h-48">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Botones */}
                <CarouselPrevious className="ml-20 z-[999] cursor-pointer" onClick={handlePrev} />
                <CarouselNext className="mr-20 z-[999] cursor-pointer" onClick={handleNext} />
            </Carousel>
        </div>
    );
};

export default CarouselHome;
