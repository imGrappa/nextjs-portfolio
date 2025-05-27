const components = {
  types: {
    image: ({ value }: any) => (
      <img
        src={value.asset?.url}
        alt={value.alt || "image"}
        className="rounded-xl my-4 w-full"
      />
    ),
  },
  marks: {
    link: ({ children, value }: any) => {
      const href = value?.href || "#";
      const isExternal = href.startsWith("http");
      return (
        <a
          href={href}
          target={isExternal ? "_blank" : "_self"}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-blue-600 underline hover:text-blue-800"
        >
          {children}
        </a>
      );
    },
  },
  block: {
    normal: ({ children }: any) => {
      // Eğer çocuklar arasında sadece bir link varsa <p> ile sarmalama!
      const onlyContainsLink =
        children.length === 1 &&
        typeof children[0] === "object" &&
        children[0].type === "a";

      return onlyContainsLink ? (
        <>{children}</>
      ) : (
        <p className="mb-4">{children}</p>
      );
    },
    h1: ({ children }: any) => (
      <h1 className="text-2xl font-bold mt-6 mb-2">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl font-semibold mt-5 mb-2">{children}</h2>
    ),
    h3: ({ children }: any) => (
      <h3 className="text-lg font-semibold mt-4 mb-2">{children}</h3>
    ),
    h4: ({ children }: any) => (
      <h4 className="text-sm mt-3 mb-2">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc ml-6 mb-4">{children}</ul>
    ),
    number: ({ children }: any) => (
      <ol className="list-decimal ml-6 mb-4">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: any) => <li>{children}</li>,
    number: ({ children }: any) => <li>{children}</li>,
  },
};

export default components;
