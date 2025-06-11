import { useEffect, useState } from "react";

import { Avatar, List } from "antd";

export default function Board() {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPostList(data);
      });
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <List
        itemLayout="horizontal"
        dataSource={postList}
        renderItem={(item, index) => {
          console.log(item);
          return (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                  />
                }
                title={
                  <a
                    href="https://ant.design"
                    style={{
                      display: "inline-block",
                      maxWidth: "600px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.title}
                  </a>
                }
                description={item.body}
              />
            </List.Item>
          );
        }}
      />
    </div>
  );
}
