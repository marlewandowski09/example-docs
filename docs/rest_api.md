---
sidebar_position: 6
---

# StreamData REST API
StreamData offers a REST API service that enables you to manage your dashboards, facilitating integration with other applications and automation of tasks.

## Authentication
To retrieve the authentication API key for your dashboard, select **StreamData API** from the navigation bar and the **API Information** dialog will appear.

Include the retrieved API key in the request header:

```
Authorization: Bearer STREAMDATA_API_KEY
```
---

## StreamData endpoints

The host for StreamData REST API is `api.streamdata.com`. 

| Endpoint | Method | Description |
| ---------| ------ | --------------------------------------------------------------------------- |
| `/dashboards`                             | `GET`  | Provides a list of available dashboards. |
| `/dashboards/{dashboard_id}/share`         | `POST` | Shares a link to a specific dashboard. |
| `/visualizations`                         | `GET`  | Provides a list of available visualizations |
| `/visualizations/{visualization_id}/share` | `POST` | Shares a link to a specific visualization. |

### Example: Retrieve a list of dashboards

Request:

```
GET /dashboards
Host: api.streamdata.com
Authorization: Bearer STREAMDATA_API_KEY
```

Response:

```json
{
  "dashboards": [
    {
      "id": "103",
      "name": "Your Dashboard 1",
      "owner": "owner@email.com",
      "created": "20250812"
    },
    {
      "id": "205",
      "name": "Your Dashboard 2",
      "owner": "owner@email.com",
      "created": "20250815"
    },
    ...
  ]
}
```

| Element   | Description | Type                  | Notes |
| --------- | ----------- | --------------------- | ----- |
| `id`      | The ID of the dashboard | Integer   | – |
| `name`    | The name of the dashboard | String  | – |
| `owner`   | The owner of the dashboard | String | The owner's email address |
| `created` | The creation date of the dashboard  | Integer | YYYYMMDD format |


### Example: Share a dashboard

Request:
```json
POST /dashboards/105/share
Host: api.streamdata.com
Authorization: Bearer STREAMDATA_API_KEY
Content-Type: application/json

{
  "access": "view",
  "password": "OptionalPassword123",
  "email": ["user1@email.com", "user2@email.com"]
}
```

| Element    | Description                                      | Type   | Notes            | Required |
| ---------- | ------------------------------------------------ | ------ | -----------------| -------- |
| `access`   | The rights to edit or view the dashboard         | String | `view` or `edit` | Yes |
| `password` | The password to access the link                  | String | –                | No |
| `email`    | The emails addresses to receive the sharing link | String | –                | No |

Response:
```json
{
  "share_link": "https://streamdata.com/share/105link",
  "message": "Dashboard shared successfully."
}
```

| Element      | Description                      | Type    | 
| ------------ | -------------------------------- | ------- |
| `share_link` | The link to the shared dashboard | String  |
| `message`    | Information on sharing status    | String  | 

### Example: Retrieve a list of visualizations

Request:

```
GET /visualizations
Host: api.streamdata.com
Authorization: Bearer STREAMDATA_API_KEY
```

Response:

```json
{
  "visualizations": [
    {
      "id": "1031",
      "type": "barchart",
      "dashboard_id": "105",
      "dashboard_name": "Your Dashboard 1",
      "owner": "owner@email.com",
      "created": "20250816"
    },
    ...
  ]
}
```

| Element   | Description                                      | Type      | Notes |
| --------- | ------------------------------------------------ | --------- | ----- |
| `id`      | The ID of the visualization                      | Integer   | – |
| `type`    | The type of the visualization                    | String    | `table`, `linechart`, `barchart`, `stackbarchart`, `piechart`, or `areachart` |
| `dashboard_id` | The ID of the visualization's dashboard     | Integer   | – |
| `dashboard_name` | The name of the visualization's dashboard | String    | – |
| `owner` | The owner of the visualization                     | String    | The owner's email address |
| `created` | The creation date of the visualization           | Integer   | YYYYMMDD format |

### Example: Share a visualization

Request:
```json
POST /visualizations/1031/share
Host: api.streamdata.com
Authorization: Bearer STREAMDATA_API_KEY
Content-Type: application/json

{
  "email": ["user1@email.com", "user2@email.com"]
}
```

| Element    | Description                                       | Type    | Notes            | Required |
| ---------- | ------------------------------------------------- | ------  | -----------------| -------- |
| `email`    | The email addresses to receive the sharing link   | String  | –                | No |

Response:
```json
{
  "share_link": "https://streamdata.com/share/1031link",
  "message": "Visualization shared successfully."
}
```

| Element      | Description                          | Type    | 
| ------------ | --------------------------------     | ------- |
| `share_link` | The link to the shared visualization | String  |
| `message`    | Information on sharing status        | String  |

---

## Error handling

- `400 Bad Request`: Invalid input or parameters
- `401 Unauthorized`: Missing or invalid API key
- `404 Not Found`: Resource doesn't exist
- `500 Internal Server Error`: Unexpected server error