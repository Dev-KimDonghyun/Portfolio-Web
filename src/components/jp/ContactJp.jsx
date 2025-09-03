const ContactJp = () => {
  const contacts = [
    {
      label: "GitHub",
      value: "github.com/Dev-KimDonghyun",
      href: "https://github.com/Dev-KimDonghyun",
    },
    {
      label: "Email",
      value: "hyungus723@gmail.com",
      href: "mailto:hyungus723@gmail.com",
    },
  ];

  return (
    <div>
      {contacts.map(({ label, value, href }) => (
        <div key={label} className="my-2 md:my-0">
          <p className="text-md md:text-lg">
            <span className="text-emerald-800 text-lg md:text-xl mr-2">
              {label}
            </span>
            <br className="block md:hidden" />
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline cursor-pointer"
            >
              {value}
            </a>
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactJp;
