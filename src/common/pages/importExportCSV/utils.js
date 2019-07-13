export function getBlobURL(source) {
  const blob = new Blob([source], {
    type: 'application/json',
  });

  return URL.createObjectURL(blob);
}

export function readDataFromFile(event, callback) {
  const input = event.target;

  const reader = new FileReader();
  reader.onload = () => {
    const text = reader.result;
    if (callback) callback(text);
  };
  if (input.files.length > 0) {
    reader.readAsText(input.files[0]);
  }
}
