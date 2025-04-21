import { Button } from "@/shared/components/ui/button";

const SectionMessage = () => {
    return (
        <section className="relative w-full bg-[#127500] py-16 px-6">
            {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
            <div className="relative z-10 flex flex-col items-center text-center ">
                <img
                    src="https://portal.munipuno.gob.pe/sites/default/files/2022-08/WhatsApp%20Image%202022-08-24%20at%205.32.48%20PM.jpeg"
                    alt="COPROSEC"
                    className="w-full h-[400px] object-cover mb-8"
                />
                <span className="text-4xl font-bold leading-tight mb-4 text-white">
                    Trabajando juntos por una ciudad más segura
                </span>
                <span className="text-lg mb-6 max-w-2xl mx-auto text-yellow-300">
                    Conoce las acciones de COPROSEC en nuestra comunidad. Nos enfocamos en la seguridad y bienestar de
                    cada ciudadano, colaborando con instituciones locales y fuerzas de seguridad.
                </span>
                <Button
                    className="bg-yellow-300 text-yellow-700 hover:bg-yellow-400 hover:text-yellow-700"
                >
                    Ver más sobre COPROSEC
                </Button>
            </div>
        </section>
    );
};

export default SectionMessage;
