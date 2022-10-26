const Footer = () => {
  return (
    <footer className="text-center lg:text-left text-gray-600">
      <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">    
      </div>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          <div className="">
            <h6 className="
                uppercase
                font-semibold
                mb-4
                flex
                items-center
                justify-center
                md:justify-start
              ">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z" />
                </svg>
              eustatis.eu
            </h6>
          </div>
          <div className="">
            <h6 className="uppercase font-semibold mb-4 flex justify-center lg:justify-end">
              Kontakt
            </h6>
            <p className="flex items-center mb-4 justify-center lg:justify-end ">
              <svg fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              eustatiseu@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;