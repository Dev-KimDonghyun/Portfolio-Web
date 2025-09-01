const ContactJp = () => {
  const contacts = [
    { label: "GitHub", value: "github.com/Dev-KimDonghyun" },
    { label: "Email", value: "hyungus723@gmail.com" },
  ];

  return (
    <div>
      {contacts.map(({ label, value }) => (
        <div key={label} className="my-2 md:my-0">
          <p className="text-md md:text-lg">
            <span className="text-blue-700 text-lg md:text-xl mr-2">{label}</span><br className="block md:hidden"/>
            {value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactJp;
