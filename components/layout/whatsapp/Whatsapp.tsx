import Image from "next/image";

export default function Whatsapp() {
  return (
    <>
        <div
          id="whatsapp"
          className="block fixed w-16 h-16 right-2 bottom-2.5 z-10"
        >
          <div>
            <a
              href="https://api.whatsapp.com/send?phone=56999999999"
              target="_SEJ"
              rel="noreferrer"
            >
              <Image
                src="/img/whatsapp.png"
                priority
                alt="..."
                width="50"
                height="50"
              />
            </a>
          </div>
        </div>
      {/* ) : null} */}
    </>
  );
}
