export default function AttachmentInput(props) {
  const handleChange = e => {
    props.onAttachmentChange(e.target.value);
  }

  return (
    <fieldset>
      <legend><nobr>附件圖片網址</nobr><nobr>（對，只能一張圖片，麻煩用副檔名結尾）</nobr></legend>
      <input
        type="text"
        value={props.url}
        onChange={handleChange}
        style={{
          width: '80vw',
          height: '30px'
        }}
      />
    </fieldset>
  );
}
