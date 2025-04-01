import "./NewsContainer.css";

const NewsContainer = function ({ date, title, par, img, alt }) {
  return (
    <div className="news-container-content">
      <div className="news-container">
        <div className="news-card-left">
          <div className="new-card-date">{date}</div>
          <div className="top-content-card-title">{title}</div>
          <div className="top-content-card-par">{par}</div>
          <div className="icon-bar">
            <svg
              className="news-menu"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
            >
              <g id="Layer_2" data-name="Layer 2">
                <g id="layer_1-2" data-name="layer 1">
                  <path d="M47 48H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h46a1 1 0 0 1 1 1v46a1 1 0 0 1-1 1zM2 46h44V2H2z" />
                  <path
                    d="M34 25h8v2h-8zM22 25h10v2H22zM31 30h7v2h-7zM22 30h7v2h-7zM36 35h6v2h-6zM22 35h12v2H22zM22
                                            40h9v2h-9zM18 42H7a1 1 0 0 1-1-1V26a1 1 0 0 1 1-1h11a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1zM8 40h9V27H8zM41 22H7a1 1 0
                                            0 1-1-1v-6a1 1 0 0 1 1-1h34a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1zM8 20h32v-4H8zM4 4h2v2H4zM8 4h2v2H8zM12 4h2v2h-2zM1
                                            8h46v2H1z"
                  />
                </g>
              </g>
            </svg>
            <svg
              className="like"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                d="M27 11h-8.52L19 9.8A6.42 6.42 0 0 0 13 1a1 1 0 0 0-.93.63L8.32 11H5a3 3 0 0
                                        0-3 3v14a3 3 0 0 0 3 3h18.17a3 3 0 0 0 2.12-.88l3.83-3.83a3 3 0 0 0 .88-2.12V14a3 3 0
                                        0 0-3-3zM4 28V14a1 1 0 0 1 1-1h3v16H5a1 1 0 0 1-1-1zm24-3.83a1 1 0 0 1-.29.71l-3.83 3.83a1.05 1.05
                                        0 0 1-.71.29H10V12.19l3.66-9.14a4.31 4.31 0 0 1 3 1.89 4.38 4.38 0 0 1 .44 4.12l-1 2.57A1 1
                                        0 0 0 17 13h10a1 1 0 0 1 1 1z"
                data-name="thumb up android app aplication phone"
              />
            </svg>
            <svg
              className="dislike"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <path
                d="m29.12 5.71-3.83-3.83A3 3 0 0 0 23.17 1H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3
                                        3h3.32l3.75 9.37A1 1 0 0 0 13 31a6.42 6.42 0 0 0 6-8.8l-.52-1.2H27a3 3 0 0 0 3-3V7.83a3
                                        3 0 0 0-.88-2.12zM4 18V4a1 1 0 0 1 1-1h3v16H5a1 1 0 0 1-1-1zm24 0a1 1 0 0 1-1 1H17a1 1 0
                                        0 0-.93 1.37l1 2.57a4.38 4.38 0 0 1-.44 4.12 4.31 4.31 0 0 1-3 1.89L10 19.81V3h13.17a1 1
                                        0 0 1 .71.29l3.83 3.83a1 1 0 0 1 .29.71z"
                data-name="thumb down android app aplication phone"
              />
            </svg>
          </div>
        </div>
        <div className="news-card-right">
          <img src={img} alt={alt} />
        </div>
      </div>
    </div>
  );
};

export default NewsContainer;
