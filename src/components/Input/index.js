import React, { useState } from "react";
import styles from "./styles.module.css";

export const Input = (props) => {
  const [value, setValue] = useState("");
  const onChangeValue = (event) => {
    setValue(event.target.value);
  };

  const onSubmit = (e) => {
    if (e.key === "Enter") {
      props.onSubmit(value);
      setValue("");
    }
  };
  return (
    <input
      className={styles.container}
      value={value}
      onChange={onChangeValue}
      onKeyDown={onSubmit}
    />
  );
};
