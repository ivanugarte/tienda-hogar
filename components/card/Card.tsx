import Link from "next/link";

export default function Cards() {
    return (
        <div className="flex justify-center flex-wrap">

            {/* casa 01  */}
            <div className="mt-36 ml-4 rounded-lg shadow-lg bg-white max-w-sm mr-4">
                <a href="/casas/#Casal605m2">
                    <img className="rounded-t-lg " src="/img/polera.png" alt="" />
                </a>
                <div className="ml-4">
                    <p className="text-base text-center">
                        Polera de muestra para la página</p>
                    <p className="mt-4 text-center">Precio 15.000</p>
                </div>
            </div>

            {/* casa 02  */}
            <div className="mt-36 ml-4 rounded-lg shadow-lg bg-white max-w-sm mr-4">
                <a href="/casas/#Casal107m2">
                    <img className="rounded-t-lg" src="/img/polera1.jpg" alt="" />
                </a>
                <div className="ml-4">
                    <p className="text-base">
                        Polera de muestra para la página</p>
                    <p className="mt-4">Precio 15.000</p>
                </div>
            </div>
            <div className="mt-36 ml-4 rounded-lg shadow-lg bg-white max-w-sm mr-4">
                <a href="/casas/#Casal605m2">
                    <img className="rounded-t-lg " src="/img/polera2.jpg" alt="" />
                </a>
                <div className="ml-4">
                    <p className="text-base text-center">
                        Polera de muestra para la página</p>
                    <p className="mt-4 text-center">Precio 15.000</p>
                </div>
            </div>

            <div className="mt-36 ml-4 rounded-lg shadow-lg bg-white max-w-sm mr-4">
                <a href="/casas/#Casal605m2">
                    <img className="rounded-t-lg " src="/img/polera3.jpg" alt="" />
                </a>
                <div className="ml-4">
                    <p className="text-base text-center">
                        Polera de muestra para la página</p>
                    <p className="mt-4 text-center">Precio 15.000</p>
                </div>
            </div>

            <div className="mt-36 ml-4 rounded-lg shadow-lg bg-white max-w-sm mr-4">
                <a href="/casas/#Casal605m2">
                    <img className="rounded-t-lg " src="/img/polera.png" alt="" />
                </a>
                <div className="ml-4">
                    <p className="text-base text-center">
                        Polera de muestra para la página</p>
                    <p className="mt-4 text-center">Precio 15.000</p>
                </div>
            </div>

            <div className="mt-36 ml-4 rounded-lg shadow-lg bg-white max-w-sm mr-4">
                <a href="/casas/#Casal605m2">
                    <img className="rounded-t-lg " src="/img/polera1.jpg" alt="" />
                </a>
                <div className="ml-4">
                    <p className="text-base text-center">
                        Polera de muestra para la página</p>
                    <p className="mt-4 text-center">Precio 15.000</p>
                </div>
            </div>

        </div>
    )
}