import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const MemberForget = () => {
  //必填資料
  const [userName, setUserName] = useState("");
  const [msg1, setMsg1] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
        
    if (userName.trim() === "") {
      setMsg1(" *請填寫「電子郵件」");
    } else {
      setMsg1("");
    }
    if (userName.trim() !== "") {
      showDialog();
    }
  }

  // 送出彈出視窗
  const [modalVisible, setModalVisible] = useState(false);

  const showDialog = () => {
    setModalVisible(true);
  };
  const hideDialog = () => {
    setModalVisible(false);
  };

  const handleOkButtonClick = () => {
    
    // 隱藏dialog和modal的邏輯
    hideDialog();
    navigate("/member");
  };

  useEffect(() => {
    // 在modalVisible改變時執行的效果
    if (modalVisible) {
      console.log("Modal is visible");
    } else {
      console.log("Modal is hidden");
    }
  }, [modalVisible]);

  return (
    <body>
      <main>
      {modalVisible && (
          <div className="modal">
            <div className="dialog">
              <div className="content">
                <div>請至email確認</div>
              </div>
              <div className="okBtn" onClick={handleOkButtonClick}>
                <img
                  src="./icon/icon _check small_.svg"
                  alt="check"
                />
              </div>
            </div>
          </div>
        )}
        <section id="member">
          <h3 className="title">忘記密碼</h3>
          <form
            action="/"
            name="contact"
            id="contact_form"
            method="GET"
            onSubmit={handleSubmit}
          >
            <div className="login1">
              {/* <label htmlFor="username">帳號：</label> */}
              <input
                type="text"
                name="username"
                id="username"
                title="請輸入電子郵件"
                placeholder="請輸入電子郵件"
                autoComplete="on"
                // required
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <span style={{ color: "#ff9b99" }}>{msg1}</span>

            </div>
            <div className="login2">
              <input type="submit" id="submit" value="送出" />
            </div>
            
          </form>
        </section>
      </main>
    </body>
  );
};

export default MemberForget;
