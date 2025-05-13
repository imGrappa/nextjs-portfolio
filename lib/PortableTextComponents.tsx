const components = {
  types: {
    image: ({ value }: any) => (
      <img
        src={value.asset?.url}
        alt={value.alt || "image"}
        className="rounded-xl my-4"
      />
    ),
  },
  marks: {},
  block: {
    h1: ({ children }: any) => (
      <h1 className="text-2xl font-bold mt-6 mb-2">{children}</h1>
    ),
    h2: ({ children }: any) => (
      <h2 className="text-xl font-semibold mt-5 mb-2">{children}</h2>
    ),
    normal: ({ children }: any) => <p className="mb-4">{children}</p>,
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
