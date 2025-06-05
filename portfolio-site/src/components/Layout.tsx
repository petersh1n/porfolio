import { useRef } from "react";
import { Sidebar } from "./Layout/Sidebar";
import { Content } from "./Layout/Content";
import { Manual } from "./Layout/Manual";
import "../styles/Layout.scss";

export default function Layout() {
  const sectionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="Layout">
      <Sidebar />
      <div className="MainContent">
        <div className="LeftContext">
          <Manual section="Home" />
          <div id="Search">
            <div>검색창</div>
            <div>Logo</div>
          </div>
        </div>
        <div className="RightContainer">
          <Content ref={sectionRef} />
          <div id="footer">
            <div>마지막 이미지</div>
            <div>마지막 말</div>
            <div>싸인</div>
            <div>- - -</div>
            <div>링크</div>
          </div>
        </div>
      </div>
    </div>
  );
}
