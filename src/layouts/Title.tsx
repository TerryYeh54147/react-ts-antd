import React from "react";
import { Flex } from "antd";

interface Param {
  collapsed: boolean;
  fontColor: string;
}

const title: React.FC<Param> = ({ collapsed, fontColor }) => {
  return (
    <>
      <Flex gap="small" wrap="wrap" justify="center">
        <img
          key={1}
          width="48"
          height="48"
          src="https://img.icons8.com/doodle/48/sticky-notes.png"
          alt="sticky-notes"
        />

        {!collapsed && (
          <h1 key={2} style={{ color: fontColor }}>
            {process.env.REACT_APP_TITLE}
          </h1>
        )}
      </Flex>
    </>
  );
};
export default title;
