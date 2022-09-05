function downloadCV(type) {
  setTimeout(() => {
    const response = {
      file: "https://drive.google.com/uc?export=download&id=1jnhZDD07-TDVvoZpaSRUj_OJPBmMky66",
    };
    window.location.href = response.file;
  }, 100);
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { downloadCV };
