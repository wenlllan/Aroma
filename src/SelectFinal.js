import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
const SelectFinal = () => {
  //必填資料
  const [userName, setUserName] = useState("");
  const [userTel, setUserTel] = useState("");
  const [userAdd, setUserAdd] = useState("");
  const [msg1, setMsg1] = useState("");
  const [msg2, setMsg2] = useState("");
  const [msg3, setMsg3] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (userName.trim() === "") {
      setMsg1(" *請填寫「姓名」");
    } else {
      setMsg1("");
    }
    if (userTel.trim() === "") {
      setMsg2(" *請填寫「電話」");
    } else {
      setMsg2("");
    }
    if (userAdd.trim() === "") {
      setMsg3(" *請填寫「地址」");
    } else {
      setMsg3("");
    }
    if (userName.trim() !== "" && userTel.trim() !== "" && userAdd.trim() !== "") {
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
    navigate('/');
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
                <div>試用索取完成</div>
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
          <h3 className="title">索取試用</h3>
          <form
            action=""
            name="contact"
            id="contact_form"
            method="post"
            onSubmit={handleSubmit}
          >
            <div className="login1">
              <div className="sign">
                <label for="name">姓名：</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  title="請輸入姓名"
                  placeholder="請輸入姓名"
                  autoComplete="on"
                  // required
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
                <span style={{ color: "#ff9b99" }}>{msg1}</span>
              </div>

              <div className="sign">
                <label for="tel">電話：</label>
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  title="請輸入連絡電話"
                  placeholder="請輸入號碼"
                  autoComplete="on"
                  // required
                  value={userTel}
                  onChange={(e) => setUserTel(e.target.value)}
                />
                <span style={{ color: "#ff9b99" }}>{msg2}</span>
              </div>
              <div className="sign">
                <label for="add">地址：</label>
                <input
                  type="add"
                  name="add"
                  id="add"
                  title="請輸入地址"
                  placeholder="請輸入地址"
                  autoComplete="on"
                  // required
                  value={userAdd}
                  onChange={(e) => setUserAdd(e.target.value)}
                />
                <span style={{ color: "#ff9b99" }}>{msg3}</span>
              </div>
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

export default SelectFinal;
