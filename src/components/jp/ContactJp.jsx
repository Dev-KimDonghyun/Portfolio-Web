const ContactJp = () => {
  const contacts = [
    { label: "GitHub", value: "github.com/Dev-KimDonghyun" },
    { label: "Email", value: "hyungus723@gmail.com" },
  ];

  return (
    <div>
      {contacts.map(({ label, value }) => (
        <div key={label}>
          <p className="text-lg">
            <span className="text-blue-700 text-xl mr-2">{label}</span>
            {value}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ContactJp;
