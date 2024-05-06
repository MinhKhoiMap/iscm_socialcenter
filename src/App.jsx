import { useEffect, useState } from "react";

// Components
import Button from "./components/Button/Button";

// Assets
import "./App.css";
import logo from "./assets/images/logo/iscm_logo.webp";
import linkedin from "./assets/images/icons/brand-linkedin.svg";
import website from "./assets/images/icons/unlink.svg";
import fb from "./assets/images/icons/brand-facebook.svg";
import youtube from "./assets/images/icons/brand-youtube.svg";
import award from "./assets/images/icons/award.svg";
import link from "./assets/images/icons/link.svg";
import notebook from "./assets/images/icons/notebook.svg";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.scrollY >= 200) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={`opacity-0 transition-all fixed top-4 left-1/2 -translate-x-1/2 z-[999] w-full max-w-[580px] ${
          showNav && "navbar--show"
        } `}
      >
        <Navbar />
      </div>
      <div className="bg-[#960c0c] min-h-[100vh] py-16 px-4">
        <div className="max-w-[580px] flex flex-col items-center mx-auto">
          <figure className="iscm_logo w-24 h-24 rounded-full overflow-hidden mb-4">
            <img src={logo} alt="logo ISCM" />
          </figure>
          <h1 className="uppercase text-white text-[20px] font-[700]">
            iscm - ueh
          </h1>
          <h2 className="text-center align-baseline text-white text-base font-[500]">
            Viện Đô thị Thông minh và Quản Lý - Institute of Smart City and
            Management
          </h2>
          <div className="w-full mt-8">
            <h3 className="text-white text-center mb-4 font-[700]">
              Liên hệ - Contact us
            </h3>
            <div className="w-full">
              <Button
                icon={linkedin}
                title="LinkedIn"
                link={"https://www.linkedin.com/company/iscm-ueh/"}
              />
              <Button
                icon={website}
                title="Website"
                link={"https://www.iscm.ueh.edu.vn/"}
              />
              <Button
                icon={fb}
                title="Facebook"
                link={"https://www.facebook.com/ISCM.UEH"}
              />
              <Button
                icon={youtube}
                title="Youtube"
                link={"https://www.youtube.com/@instituteofsmartcityandman8501"}
              />
              <Button
                icon={youtube}
                title="ISCM StudioLab"
                link={"https://www.youtube.com/@iscmstudiolab2172"}
              />
            </div>
          </div>
          <div className="w-full mt-4">
            <h3 className="text-white text-center mb-4 font-[700]">
              Chương trình học - Study Program
            </h3>
            <div className="w-full">
              <Button
                icon={award}
                title="Cao Học - Graduate"
                link={"https://www.iscm.ueh.edu.vn/vi/course_graduate/"}
              />
              <Button
                icon={link}
                title="Đại Học - Undergraduate"
                link={"https://www.iscm.ueh.edu.vn/vi/course_undergraduate/"}
              />
              <Button
                icon={notebook}
                title="Khóa học ngắn hạn - Short Course"
                link={"https://www.iscm.ueh.edu.vn/vi/course_shortcourse/"}
              />
            </div>
          </div>
          <div className="mt-6">
            <a
              href="mailto:iscm@ueh.edu.vn"
              target="_blank"
              className="flex flex-col items-center"
            >
              <svg
                enable-background="new 0 0 24 24"
                viewBox="0 0 24 24"
                className="w-12 h-10 hover:scale-110 transition-transform duration-200"
                style={{ fill: "white" }}
              >
                <title data-testid="svgTitle" id="title_0.8231513934249679">
                  Email
                </title>
                <path d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z"></path>
                <path d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z"></path>
                <path d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z"></path>
                <path d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z"></path>
              </svg>
              <p className="text-white mt-2">iscm@ueh.edu.vn</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
