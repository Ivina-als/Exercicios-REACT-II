import "./text.css";

export const Text = (props) => {
  const classes = props.bold ? "bold" : "";
  return <span className={classes}>{props.children}</span>;
};
