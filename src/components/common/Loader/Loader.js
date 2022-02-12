import "./Loader.css";

export const Loader = () => {
  return (
    <div className="ripplecontainer">
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div>
  );
};
