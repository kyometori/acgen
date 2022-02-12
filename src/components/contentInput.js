export default function contentInput(props) {

  const handleChange = e => {
    props.onContentChange(e.target.value);
  }

  return (
    <fieldset>
      <legend>訊息內容</legend>
      <input
        type="text"
        value={props.content}
        onChange={handleChange}
        style={{
          width: '80vw',
          height: '30px'
        }}
      />
    </fieldset>
  );
}
