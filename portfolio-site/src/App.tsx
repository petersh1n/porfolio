const App = () => {
  return (
    <div className="App">
      <div className="">
        {/* User manual Section - Left*/}
        <div>
          <div>
            <div id="homeManual">
              <h1>Peter Shin</h1>
              <div>
                <h2>동양대학교 재학중</h2>
                <h2>프론트엔드 개발자</h2>
              </div>
            </div>
            <div id="WorkManual">
              <h1>Portfolio</h1>
              <div>
                <h2>나의 포트폴리오 사이트</h2>
                <h2>개발중입니다.</h2>
              </div>
            </div>
          </div>

          <div id="Search">
            <div>검색창</div>
            <div>Logo</div>
          </div>
        </div>

        {/* User Section - Right*/}
        <div>
          <div id="Home">
            <div>나를 나타내는 이미지</div>
            <div>내가 코딩을 시작하게된 계기</div>
          </div>
          <div id="Work">
            <div>Airbnb clone coding</div>
            <div>SnackLab</div>
            <div>-------------------</div>
          </div>
          <div id="Review Notes">
            <div>노션 정리 노트</div>
            <div>-------------------</div>
          </div>
          <div id="My Self">
            <div>
              <div>증명사진</div>
              <div>자기소개</div>
            </div>
            <div>
              <div>
                <div>
                  <div id="past">
                    <div>과거사진</div>
                    <div>철도와 관련된 나의 과거</div>
                  </div>
                  <div id="present">
                    <div>현재사진</div>
                    <div>현재 학교 생활 및 코딩 생활</div>
                  </div>
                </div>
                <div id="blank"></div>
              </div>
              <div>-------------------</div>
            </div>
          </div>
          <div id="Section 5">
            <div id="Photo">
              <div id="CPhoto">
                <section>
                  <div>
                    <ul>
                      <li>1</li>
                      <li>2</li>
                      <li>3</li>
                      <li>4</li>
                      <li>5</li>
                    </ul>
                  </div>
                  <fieldset>
                    <div>
                      <button>d</button>
                      <button>b</button>
                    </div>
                  </fieldset>
                </section>
              </div>
              <div id="LPhoto"></div>
              <div id="RPhoto"></div>
            </div>
            <div>-------------------</div>
            <div id="footer">
              <div>마지막 이미지</div>
              <div>마지막 말</div>
              <div>싸인</div>
              <div>- - -</div>
              <div>링크</div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default App;
