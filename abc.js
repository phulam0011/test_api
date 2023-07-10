const fs = require('fs');
const fetch = require('node-fetch');

async function query(filename) {
  const data = fs.readFileSync(filename);
  const response = await fetch(
    'https://api-inference.huggingface.co/models/thesis123/whisper-base-test-vi',
    {
      headers: { Authorization: 'Bearer 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' },
      method: 'POST',
      body: data,
    }
  );

  const result = await response.json();
  return result;
}
query('.\\QA.flac').then((response) => {
  console.log(JSON.stringify(response));
});
