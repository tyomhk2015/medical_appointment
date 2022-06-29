const Header: React.FC = () => {
  return (
    <div className={`flex justify-between items-center bg-white fixed top-0 px-10 py-4 shadow-[0_0_8px_0_rgba(0,0,0,0.5)] w-full`}>
      <h1 className={`font-bold text-blue-600 italic flex`}>
        <svg className={`mr-2 w-6 h-6`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        Medical Appointment
      </h1>
    </div>
  );
};

export default Header;
