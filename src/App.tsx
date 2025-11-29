import { Button } from "antd";
import { CiCircleFilled } from "@ant-design/icons";

function App() {
  return (
    <div className="justify-center items-center h-screen flex">
      <Button type="primary" className="flex items-center gap-2">
        <CiCircleFilled size={16} />
        Hello world with Ant Design + Tailwind CSS!
      </Button>
    </div>
  );
}

export default App;
