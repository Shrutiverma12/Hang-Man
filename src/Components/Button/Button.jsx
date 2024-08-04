import getButtonStyling from "./getButtonStyling";
function Button({ buttonType, text, styleType, onClickHandler }) {
  return (
    <button
      type={buttonType}
      onClick={onClickHandler}
      className={`px-4 py-2 mx-2 my-2 ${getButtonStyling(
        styleType
      )} text-white rounded-md transition-all`}
    >
      {text}
    </button>
  );
}

export default Button;
