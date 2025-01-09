```
module.exports = {
  whatsapp: {
    session: 'session',
    phoneNumberId: 'phone_number_id',
    businessApi: {
      token: 'business_api_token',
    },
  },
  server: {
    port: 3000,
  },
  database: {
    uri: 'mongodb_uri',
    collection: 'collection_name',
  },
  sendImage: (image_path) => {
    token = 'YOUR_TOKEN_HERE'
    phone_number = 'YOUR_PHONE_NUMBER_HERE'
    upload_url = f"(link unavailable)"
    payload = {
      "image": open(image_path, "rb"),
      "caption": "Image caption"
    }
    response = requests.post(upload_url, files=payload, headers={"Authorization": f"Bearer {token}"})
    return response.json()["id"]
  }
};
```
