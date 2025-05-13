import Link from "next/link";

export default function Works() {
  return (
    <>
      <div>
        <h3 className="text-xl font-bold mb-2 mt-3">Projects</h3>
        <blockquote className="border-l-2 pl-3 italic text-sm text-muted-foreground mb-6">
          Coding unforgettable digital experiences.
        </blockquote>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="group hover-transform">
            <Link
              href="https://korayaslan.com/assets/ozan-min-bbh6sH4i.webp"
              className="block w-auto h-32 rounded-xl overflow-hidden relative"
            >
              <img
                src="https://korayaslan.com/assets/ozan-min-bbh6sH4i.webp"
                alt="Ozan SuperApp's Website"
                loading="lazy"
                className="object-cover w-full block transition-all duration-[5s] transform-y-custom"
              />
            </Link>
            <Link
              className="text-center block mt-2"
              href="https://korayaslan.com/assets/ozan-min-bbh6sH4i.webp"
            >
              <h3 className="text-lg">Ozan SuperApp</h3>
              <p className="text-sm text-muted-foreground">
                Front-end Development
              </p>
            </Link>
          </div>
          <div className="group hover-transform">
            <Link
              href="https://korayaslan.com/assets/klamp-min-41YSJ4kE.webp"
              className="block w-auto h-32 rounded-xl overflow-hidden relative"
            >
              <img
                src="https://korayaslan.com/assets/klamp-min-41YSJ4kE.webp"
                alt="KlampHost's Website"
                loading="lazy"
                className="object-cover w-full block transition-all duration-[5s] transform-y-custom"
              />
            </Link>
            <Link
              className="text-center block mt-2"
              href="https://korayaslan.com/assets/klamp-min-41YSJ4kE.webp"
            >
              <h3 className="text-lg">KlampHost</h3>
              <p className="text-sm text-muted-foreground">
                Front-end Development
              </p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
