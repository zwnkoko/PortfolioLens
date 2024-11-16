interface Props {
  placeHolder: string;
}
const SearchField = ({ placeHolder }: Props) => {
  return (
    <>
      <input
        type="text"
        name="ticker"
        id="ticker"
        className="border border-solid border-gray-500 px-3 rounded-md outline-sky-600 w-2/3 h-14"
        placeholder={placeHolder}
      />
    </>
  );
};

export default SearchField;
