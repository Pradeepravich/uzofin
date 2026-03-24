import "../assets/css/custom-styles.css";
import bgSection1 from "../assets/images/bg-section1.jpg";
import logo from "../assets/images/logo.png";
import downArrow from "../assets/images/arrow-down.png";
import arrowIcon from "../assets/images/btn-arrow.png";
import slide1 from "../assets/images/slide1.png";
import slide2 from "../assets/images/slide2.png";
import slide3 from "../assets/images/slide3.png";
import slide4 from "../assets/images/slide4.png";
import slide5 from "../assets/images/slide5.png";
import slide6 from "../assets/images/slide6.png";
import slide7 from "../assets/images/slide7.png";
import businessPay from "../assets/images/business-pay.png";
import bgSection2 from "../assets/images/bg-section2.jpg";
import arrowUp from "../assets/images/arrow-up.png";
import ctaBg from "../assets/images/bg-apis-section.png";

const Home = () => {
  const features = [
    {
      title: "Dashboard",
      desc: "Manage banking, payments, and merchants in one place.",
    },
    {
      title: "AI-Driven Decisions",
      desc: "Automate approvals, verification, and financial operations.",
    },
    {
      title: "Unified Dashboard",
      desc: "Manage banking, payments, and merchants seamlessly.",
    },
    {
      title: "Developer-Friendly APIs",
      desc: "Build, integrate, and launch faster.",
    },
    {
      title: "Enterprise-Grade Security",
      desc: "Bank-level encryption and compliance.",
    },
    {
      title: "Scalable Infrastructure",
      desc: "Designed for startups to enterprises.",
    },
  ];

  return (
    <div className="home">
      <div
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${bgSection1})` }}
      >
        {/* HEADER */}
        <header className="header">
          <div className="logo">
            <img src={logo} alt="UzoFin Logo" />
          </div>

          <nav className="nav flex gap-6">
            <a href="#" className="flex items-center gap-1 group">
              AI Banking
            </a>

            <a href="#" className="flex items-center gap-1 group">
              Payments
              <img
                src={downArrow}
                className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
              />
            </a>

            <a href="#" className="flex items-center gap-1 group">
              Payouts
              <img
                src={downArrow}
                className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
              />
            </a>

            <a href="#" className="flex items-center gap-1 group">
              Support
              <img
                src={downArrow}
                className="w-3 h-3 transition-transform duration-300 group-hover:rotate-180"
              />
            </a>
          </nav>

          <button className="relative p-[1px] rounded-full bg-gradient-to-r from-[#440178] to-[#8C01FA]">
            <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#8C01FA] to-black text-white">
              <span className="text-base font-normal">START BUILDING</span>

              <img
                src={arrowIcon}
                alt="arrow"
                className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
              />
            </div>
          </button>
        </header>

        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-content">
            <h1>
              AI-powered <span>Banking & Payment Solutions</span>
            </h1>

            <h1>built for Modern Businesses</h1>

            <p>
              UzoFin brings intelligent automation, real-time payments, and
              seamless financial operations together so you can scale without
              friction.
            </p>

            <div className="hero-buttons">
              <button className="relative p-[1px] rounded-full bg-gradient-to-r from-[#440178] to-[#8C01FA]">
                <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#8C01FA] to-black text-white">
                  <span className="text-base font-normal">START BUILDING</span>

                  <img
                    src={arrowIcon}
                    alt="arrow"
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </button>
              <button className="relative p-[1px] rounded-full border-[1px] border-[#BA9CFF] bg-[#000000]">
                <div className="flex items-center gap-2 px-5 py-2 rounded-full  text-white">
                  <span className="text-base font-normal">READ DOCS</span>

                  <img
                    src={arrowIcon}
                    alt="arrow"
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* BRANDS */}
      <section className="bg-black text-center py-10 px-4">
        <p className="text-xl md:text-base tracking-widest text-[#37CCF7] mb-6">
          POWERING TOOLS AND INTEGRATION FOR COMPANIES AROUND THE WORLD
        </p>
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          <span>
            <img src={slide1} alt="Brave" className="h-8" width="115px" />
          </span>
          <span>
            <img src={slide2} alt="Magicden" className="h-8" width="115px" />
          </span>
          <span>
            <img src={slide3} alt="Lallaplaza" className="h-8" width="115px" />
          </span>
          <span>
            <img src={slide4} alt="Jump" className="h-8" width="115px" />
          </span>
          <span>
            <img src={slide5} alt="Google" className="h-8" width="115px" />
          </span>
          <span>
            <img src={slide6} alt="Discord" className="h-8" width="115px" />
          </span>
          <span>
            <img src={slide7} alt="Circle" className="h-8" width="115px" />
          </span>
        </div>
      </section>

      <section
        className="relative text-white overflow-hidden px-6 md:px-16 py-20 bg-cover "
        style={{
          backgroundImage: `url(${bgSection2})`,
          backgroundPosition: "50% 25%",
        }}
      >
        {/* BACKGROUND GLOW */}
        <div className="absolute inset-0">
          <div className="absolute w-[500px] h-[500px] bg-purple-600 opacity-20 blur-[120px] top-10 left-10"></div>
          <div className="absolute w-[500px] h-[500px] bg-green-500 opacity-20 blur-[120px] bottom-0 right-0"></div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-[50%_50%] gap-12 items-start">
          {/* LEFT SIDE */}
          <div className="flex flex-col justify-center">
            <h2 className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed mx-auto">
              Your Business Pays Are Now <br />
              Faster and Secure
            </h2>

            <img
              src={businessPay}
              alt="graphic"
              className="w-full max-w-md mx-auto"
            />
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-10 text-center md:text-left">
            <div className="space-y-10 text-center md:text-left">
              {/* STAT 1 */}
              <div>
                <h1
                  className="text-5xl md:text-6xl 
  bg-gradient-to-r from-[#8C01FA] via-[#19FB9B] to-[#00F0FF] 
  bg-clip-text text-transparent 
  drop-shadow-[0_0_15px_rgba(140,1,250,0.6)]"
                >
                  11.5M+
                </h1>
                <p className="text-xs text-gray-400 mt-2 tracking-wide">
                  TRANSACTIONS PROCESSED MONTHLY
                </p>
              </div>

              {/* STAT 2 */}
              <div>
                <h1
                  className="text-4xl md:text-6xl bg-gradient-to-r from-[#00BCD4] to-[#0047FF] 
  bg-clip-text text-transparent 
  drop-shadow-[0_0_15px_rgba(140,1,250,0.6)]"
                >
                  99.9%
                </h1>
                <p className="text-xs text-gray-400 mt-2 tracking-wide">
                  PLATFORM UPTIME AND RELIABILITY
                </p>
              </div>

              {/* STAT 3 */}
              <div>
                <h1
                  className="text-4xl md:text-6xl bg-gradient-to-r from-[#00FFBD] to-[#025B8C] 
  bg-clip-text text-transparent 
  drop-shadow-[0_0_15px_rgba(140,1,250,0.6)]"
                >
                  70% Faster
                </h1>
                <p className="text-xs text-gray-400 mt-2 tracking-wide">
                  MERCHANT ONBOARDING WITH AI AUTOMATION
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="business-pays py-1 px-4">
          <div className="relative grid grid-cols-1 md:grid-cols-[25%_75%] gap-5 items-center">
            <div className="text-left">
              <h2 className="text-2xl md:text-3xl font-normal mb-4 mx-auto text-left">
                Our Intelligent <br /> Financial Suite
              </h2>
              <ul className="list-disc">
                <li>
                  <p className="text-sm text-gray-400 max-w-sm mx-auto">
                    Tools That Accelerate Every Step Of Your Financial Workflow.
                  </p>
                </li>
              </ul>
            </div>
            <div className="space-y-10 text-center md:text-left ">
              {/* FEATURE CARDS */}
              <div className="relative mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* LEFT COLUMN */}
                <div className="flex flex-col gap-10">
                  {/* AI Banking */}
                  <div className="bg-[#0303034D] backdrop-blur-md p-5 rounded-xl border border-black/10 max-w-sm bg-opacity-[30%]">
                    <h3 className="text-sm font-semibold border-l-2 border-cyan-400 pl-3 mb-3">
                      AI Banking
                    </h3>

                    <p className="text-xs text-gray-400">
                      Smart, automated digital banking for businesses. Instant
                      onboarding, intelligent insights, and real-time account
                      operations.
                    </p>

                    <p className="mt-4 text-white font-semibold">3,969</p>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Transactions Per Second
                    </p>
                  </div>

                  {/* Payouts */}
                  <div className="bg-[#0303034D] backdrop-blur-md p-5 rounded-xl border border-black/10 max-w-sm ml-6 bg-opacity-[30%]">
                    <h3 className="text-sm font-semibold border-l-2 border-purple-500 pl-3 mb-3">
                      Payouts
                    </h3>

                    <p className="text-xs text-gray-400">
                      Bulk, automated payouts built for high-volume businesses.
                      Reliable, trackable, and lightning-fast disbursements.
                    </p>

                    <p className="mt-4 text-white font-semibold">
                      163,077,581,394
                    </p>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Total Transactions
                    </p>
                  </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="flex flex-col gap-10 mt-10 md:mt-0">
                  {/* Payments (TOP OFFSET) */}
                  <div className="bg-[#0303034D] backdrop-blur-md p-5 rounded-xl border border-black/10 max-w-sm ml-auto bg-opacity-[30%]">
                    <h3 className="text-sm font-semibold border-l-2 border-yellow-400 pl-3 mb-3">
                      Payments
                    </h3>

                    <p className="text-xs text-gray-400">
                      Fast, secure, and scalable payment infrastructure. Send
                      and receive money globally with ease.
                    </p>

                    <p className="mt-4 text-white font-semibold">1,675</p>
                    <p className="text-[10px] text-gray-500 uppercase">
                      Validator Nodes
                    </p>
                  </div>

                  {/* Merchant */}
                  <div className="bg-[#0303034D] backdrop-blur-md p-5 rounded-xl border border-black/10 max-w-sm ml-auto bg-opacity-[30%]">
                    <h3 className="text-sm font-semibold border-l-2 border-green-400 pl-3 mb-3">
                      Merchant Onboarding
                    </h3>

                    <p className="text-xs text-gray-400">
                      Frictionless onboarding for merchants at any scale.
                      Automated KYC verification and risk assessments—done in
                      minutes.
                    </p>

                    <p className="mt-4 text-white font-semibold">100%</p>
                    <p className="text-[10px] text-gray-500 uppercase">
                      On-time Merchant Onboard
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relative bg-black text-white py-24 px-6 md:px-16 overflow-hidden">
          {/* 🔥 HEADING */}
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl">
              Why{" "}
              <span className="bg-gradient-to-r from-[#714DFF] via-[#9C83FF] to-[#E151FF] bg-clip-text text-transparent">
                UzoFin?
              </span>
            </h2>

            <p className="mt-4 text-sm text-gray-400 leading-relaxed">
              Discover endless creativity with PromptVerse. Generate diverse
              content effortlessly using prompts. Stay updated with real-time
              trends, automate tasks, and extract insights from any document or
              URL. All within a sleek, futuristic design. Create more,
              effortlessly.
            </p>
          </div>

          {/* 🔥 FEATURE GRID */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {features.map((item, index) => (
              <div key={index} className="group cursor-pointer">
                {/* TITLE + ICON */}
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">{item.title}</h3>

                  <img
                    src={arrowUp}
                    alt="arrow"
                    className="w-4 h-4 opacity-60 group-hover:translate-x-1 group-hover:-translate-y-1 transition"
                  />
                </div>

                {/* DESCRIPTION */}
                <p className="mt-2 text-xs text-blue-400 group-hover:text-white transition">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* 🔥 CTA SECTION */}
          <div
            className="relative mt-24 text-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${ctaBg})` }}
          >

            <div className="absolute inset-0 bg-black/50"></div>
            
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-full h-[200px] bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.2),transparent_60%)] blur-2xl"></div>
            </div>

            <div className="relative z-10 py-16 px-6">
              <h2 className="text-3xl md:text-5xl font-normal">
                Build Faster with Our{" "}
                <span className="bg-gradient-to-r from-[#714DFF] via-[#9C83FF] to-[#E151FF] bg-clip-text text-transparent">
                  Powerful API’s
                </span>
              </h2>

              <p className="mt-4 text-sm text-gray-400">
                Plug into secure, developer-friendly financial APIs and launch
                in days, not months
              </p>

              <button className="relative p-[1px] rounded-full bg-gradient-to-r from-[#440178] to-[#8C01FA] mt-6">
                <div className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#8C01FA] to-black text-white">
                  <span className="text-base font-normal">START BUILDING</span>

                  <img
                    src={arrowIcon}
                    alt="arrow"
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </button>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};
export default Home;
