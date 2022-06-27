import type { NextPage } from "next";

const TailwindCSS: NextPage = () => {
  return (
    <>
      <div
        className={`grid min-h-[100vh] w-[100vw] grid-cols-1 place-content-center place-items-center gap-10 bg-[url(https://tyomhk2015.github.io/nier_prop/image/bg/1.jpg)] bg-cover bg-center py-20 px-10 lg:grid-cols-3`}
      >
        {/* Weather */}
        <div
          className={`group relative m-auto h-[600px] w-[80vw] max-w-[360px] place-self-stretch rounded-lg border-2 border-solid border-slate-700 bg-white px-5 py-8 transition-all duration-500 hover:z-10 hover:scale-110 hover:bg-slate-600`}
        >
          <h2 className={`text-5xl font-bold group-hover:text-white`}>
            Weather
          </h2>
          {/* Weather Categories */}
          <ul className={`mt-5`}>
            <li
              className={`flex items-center justify-between rounded-xl border-2 border-solid border-slate-700 bg-blue-100 p-4 shadow-[0_2px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
            >
              <div>
                <p className={`text-xl font-bold italic`}>Casius</p>
                <p className={`text-sm`}>Mars, 12AM</p>
              </div>
              <div className={`flex items-center`}>
                <svg
                  className={`h-12 w-12`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                  ></path>
                </svg>
                <p className={`ml-2 text-4xl font-bold`}>85°F</p>
              </div>
            </li>
            <li
              className={`mt-3 flex items-center justify-between rounded-xl border-2 border-solid border-slate-700 bg-amber-100 p-4 shadow-[0_2px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
            >
              <div>
                <p className={`text-xl font-bold italic`}>Dlacria</p>
                <p className={`text-sm`}>Earth, 12AM</p>
              </div>
              <div className={`flex items-center`}>
                <svg
                  className={`h-12 w-12`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
                <p className={`ml-2 text-4xl font-bold`}>55°F</p>
              </div>
            </li>
            <li
              className={`mt-3 flex items-center justify-between rounded-xl border-2 border-solid border-slate-700 bg-emerald-100 p-4 shadow-[0_2px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
            >
              <div>
                <p className={`text-xl font-bold italic`}>Tokyo</p>
                <p className={`text-sm`}>Reiwa, 11PM</p>
              </div>
              <div className={`flex items-center`}>
                <svg
                  className={`h-12 w-12`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
                  ></path>
                </svg>
                <p className={`ml-2 text-4xl font-bold`}>44°F</p>
              </div>
            </li>
            <li
              className={`mt-3 flex items-center justify-between rounded-xl border-2 border-solid border-slate-700 bg-red-300 p-4 shadow-[0_2px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
            >
              <div>
                <p className={`text-xl font-bold italic`}>Rome</p>
                <p className={`text-sm`}>Mars, 12AM</p>
              </div>
              <div className={`flex items-center`}>
                <svg
                  className={`h-12 w-12`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  ></path>
                </svg>
                <p className={`ml-2 text-4xl font-bold`}>66°F</p>
              </div>
            </li>
          </ul>
          {/* Plus button */}
          <svg
            className={`mx-auto mt-10 h-12 w-12 rounded-full border-2 border-solid border-slate-700 shadow-[0_2px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer group-hover:border-white group-hover:stroke-white`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            ></path>
          </svg>
        </div>

        {/* Work w/ best designers */}
        <div
          className={`group relative m-auto h-[600px] w-[80vw] min-w-[300px] max-w-[360px] place-self-stretch rounded-lg border-2 border-solid border-slate-700 bg-white px-5 py-6 transition-all duration-500 hover:z-10 hover:scale-110 hover:bg-slate-600`}
        >
          {/* X button */}
          <svg
            className={`h-10 w-10 rounded-full border-2 border-solid border-slate-700 shadow-[0_1px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer group-hover:border-white group-hover:stroke-white`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
          <h2 className={`mt-4 text-center font-bold group-hover:text-white`}>
            SIMPLE TAG
          </h2>
          <p
            className={`mt-2 text-center text-3xl font-bold group-hover:text-white`}
          >
            Work with Nomad members
          </p>
          {/* Grid 2x2 */}
          <ul className={`mt-6 grid grid-cols-2 grid-rows-2 gap-3`}>
            <li
              className={`group rounded-xl border-2 border-solid border-black bg-amber-200 px-10 py-14 transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
            >
              <svg
                className={`m-auto h-6 w-6 group-hover:stroke-slate-700`}
                fill="none"
                stroke="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </li>
            <li
              className={`group rounded-xl border-2 border-solid border-black bg-purple-400 px-10 py-14 transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
            >
              <svg
                className={`m-auto h-6 w-6 group-hover:stroke-slate-700`}
                fill="none"
                stroke="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </li>
            <li
              className={`group rounded-xl border-2 border-solid border-black bg-orange-400 px-10 py-14 transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
            >
              <svg
                className={`m-auto h-6 w-6 group-hover:stroke-slate-700`}
                fill="none"
                stroke="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </li>
            <li
              className={`group rounded-xl border-2 border-solid border-black bg-blue-400 px-10 py-14 transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
            >
              <svg
                className={`m-auto h-6 w-6 group-hover:stroke-slate-700`}
                fill="none"
                stroke="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
            </li>
          </ul>
          <p
            className={`mt-4 rounded-2xl bg-emerald-600 px-4 py-3 text-center text-lg font-bold tracking-wider text-white transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
          >
            Let's get it done
          </p>
        </div>

        {/* Friends */}
        <div
          className={`group relative m-auto h-[600px] w-[80vw] min-w-[300px] max-w-[360px] place-self-stretch rounded-lg border-2 border-solid border-slate-700 bg-orange-500 px-5 py-8 transition-all duration-500 hover:z-10 hover:scale-110 hover:bg-slate-600`}
        >
          {/* Back Button */}
          <svg
            className={`absolute h-10 w-10 rounded-full border-2 border-solid border-slate-700 bg-white shadow-[0_1px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer group-hover:border-white`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <h2
            className={`text-center text-3xl font-bold group-hover:text-white`}
          >
            Friends
          </h2>

          {/* Search */}
          <div className={`relative`}>
            <input
              className={`mt-6 w-full rounded-xl border-2 border-solid border-slate-900 p-2 pr-8 shadow-[0_1px_0_1px_rgba(0,0,0,1)]`}
              type="text"
              placeholder="Standing here, I realize..."
            />
            <span className={`absolute top-[50%] right-1.5`}>
              <svg
                className={`h-6 w-6`}
                fill="none"
                stroke="#ccc"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </span>
          </div>

          {/* Friend list */}
          <ul>
            <li
              className={`mt-4 flex items-center justify-between rounded-xl border-2 border-solid border-slate-900 bg-white p-2 transition-all duration-200 hover:scale-105 hover:cursor-pointer`}
            >
              <div className={`flex items-center`}>
                <div>
                  <img
                    className={`block w-12 rounded-full`}
                    src="https://i1.sndcdn.com/avatars-CmK4djv0aNyRoOHu-kgMK5w-t200x200.jpg"
                    alt=""
                  />
                </div>
                <div className={`ml-2`}>
                  <p className={`font-bold`}>Steven Armstrong</p>
                  <p className={`text-sm`}>Senator</p>
                </div>
              </div>
              <button
                className={`rounded-lg border-2 border-solid border-slate-900 bg-yellow-400 px-3 py-1 shadow-[0_1px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
              >
                Invite
              </button>
            </li>
            <li
              className={`mt-4 flex items-center justify-between rounded-xl border-2 border-solid border-slate-900 bg-white p-2 transition-all duration-200 hover:scale-105 hover:cursor-pointer`}
            >
              <div className={`flex items-center`}>
                <div>
                  <img
                    className={`block w-12 rounded-full`}
                    src="https://i.pinimg.com/736x/12/ca/57/12ca57422e313fe5e062de6ad7d4c807.jpg"
                    alt=""
                  />
                </div>
                <div className={`ml-2`}>
                  <p className={`font-bold`}>Jack the Ripper</p>
                  <p className={`text-sm`}>Mercenary</p>
                </div>
              </div>
              <button
                className={`rounded-lg border-2 border-solid border-slate-900 bg-yellow-400 px-3 py-1 shadow-[0_1px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
              >
                Invite
              </button>
            </li>
            <li
              className={`mt-4 flex items-center justify-between rounded-xl border-2 border-solid border-slate-900 bg-white p-2 transition-all duration-200 hover:scale-105 hover:cursor-pointer`}
            >
              <div className={`flex items-center`}>
                <div>
                  <img
                    className={`block w-12 rounded-full`}
                    src="https://preview.redd.it/jph6dn63x1z81.jpg?width=640&crop=smart&auto=webp&s=1f467fb7ffb1894401476528cb333c93b382340e"
                    alt=""
                  />
                </div>
                <div className={`ml-2`}>
                  <p className={`font-bold`}>Jetstream Sam</p>
                  <p className={`text-sm`}>Mercenary</p>
                </div>
              </div>
              <button
                className={`rounded-lg border-2 border-solid border-slate-900 bg-black px-3 py-1 font-bold text-white shadow-[0_1px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
              >
                Invited
              </button>
            </li>
            <li
              className={`mt-4 flex items-center justify-between rounded-xl border-2 border-solid border-slate-900 bg-white p-2 transition-all duration-200 hover:scale-105 hover:cursor-pointer`}
            >
              <div className={`flex items-center`}>
                <div>
                  <img
                    className={`block w-12 rounded-full`}
                    src="https://nomadcoders.co/m.svg"
                    alt=""
                  />
                </div>
                <div className={`ml-2`}>
                  <p className={`font-bold`}>Nomad</p>
                  <p className={`text-sm`}>Unknown</p>
                </div>
              </div>
              <button
                className={`rounded-lg border-2 border-solid border-slate-900 bg-yellow-400 px-3 py-1 shadow-[0_1px_0_1px_rgba(0,0,0,1)] transition-all duration-200 hover:scale-110 hover:cursor-pointer`}
              >
                Invite
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TailwindCSS;
