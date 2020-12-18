import { useState } from "react";
import "./App.css";

import { DatePicker, InputNumber, Card } from "antd";

const { RangePicker } = DatePicker;
const tabList = [
  {
    key: "tab1",
    tab: "Hello",
  },
  {
    key: "tab2",
    tab: "Goodbye",
  },
];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

function Elephant() {
  const [key, setKey] = useState("tab1");
  function onTabChange(key, type) {
    console.log(key, type);
    setKey(key);
  }
  return (
    <div className="App">
      <h1>example</h1>
      <p>how much would you pay?</p>
      <InputNumber />
      <p>
        <a href="https://socialmagicweekly.substack.com/">subscribe!</a>
      </p>
      <Card
        style={{ width: "50%", textAlign: "left" }}
        title="Card title"
        extra={<a href="#">More</a>}
        tabList={tabList}
        activeTabKey={key}
        onTabChange={(key) => {
          onTabChange(key, "key");
        }}
      >
        {contentList[key]}
      </Card>
      <RangePicker style={{ margin: "10px" }} />
    </div>
  );
}

export default Elephant;
