---
sidebar_position: 1
---
# Configuring API Source
StreamData allows you fetch live data from a REST API endpoint and accepts both XML and JSON data formats.

![REST API configuration window](/rest_api.png)

## Steps to add an API source.
1. In the **API URL** field, enter the full endpoint address.
2. Choose the **HTTP method**, `GET` or `POST`.
:::info

StreamData supports the `GET` and `POST` methods. Most APIs use `GET` to retrieve data but some may require using  `POST` and sending data to request a specific result. For more information, see the documentation of the API service you want to connect to.

:::
3. (Optional) Add the required **Headers**. 
:::info

Some of the most common request headers include:
- **Accept**: Specifies the response format (for example, XML or JSON).
- **Content-type**: Indicates the type of content included in the request body.
- **Authorization**: Uses *API key* to prove your access rights.
Headers may be required for both `GET` and `POST` methods.
:::
4. Click **Save**.
:::warning

If StreamData fails to establish a connection with the REST API endpoint, a **Connection Failure** dialog will appear. After clicking **OK**, verify your URL, HTTP method, and headers before trying again.
:::