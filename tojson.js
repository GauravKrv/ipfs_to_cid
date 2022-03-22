const ToJSON = () => {
  const data = { img_url: "", name: "", desc: "" };
  tojson = () => {
    // data.img_url = document.getElementById("file").innerHTML;
    data.name = document.getElementById("name").innerHTML;
    data.desc = document.getElementById("desc").innerHTML;
  };
  return (
    <div>
      <form action="">
        <input type="file" id="file" />
        <input type="text" name="name" id="name" />
        <input type="text" id="desc" />
        <button type="submit" onclick={tojson()}>
          Create
        </button>
      </form>
      <div>
        <h1>The JSON format of data obtained : </h1>
        <h3>{JSON.stringify(data)}</h3>
      </div>
    </div>
  );
};
