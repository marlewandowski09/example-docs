---
sidebar_position: 4
title: StreamData Dashboard
---
import MyCarousel from '@site/src/components/MyCarousel';

# StreamData Dashboard
The dashboard is the most important aspect of StreamData. It fetches data from all the provided sources and presents it in the form of charts, graphs, and tables, allowing you to easily monitor your data.

## Accessing dashboards
To access a dashboard, select **Your Dashboards** from the navigation bar, then choose the desired dashboard from the list.

![Dashboard list](/dashboard_list_full.png)

To remove a dashboard, click the ❌ **Remove** button. 

---

## Dashboard overview
![Dashboard view](/dashboard.png)

### Sidebar menu
The sidebar menu provides the following features:

| Feature        | Description                                                        |
| ---------------|------------------------------------------------------------------- |
| Data sources   | Add, change, and remove the data sources of the current dashboard. |
| Filter data    | Filter the data range by dates or keywords.                        |
| Share    | Share full dashboard or a single visualization. For more information, see [Sharing Dashboards](/docs/sharing.md).                                                                                   |
| Rename         | Change the name of the current dashboard.                          |
| Delete         | Remove the current dashboard from the list.                         |
| StreamData API | Push and retrieve dashboard data using REST API. For more information, see [StreamData REST API](/docs/rest_api.md).                                                                                   |

### Data view

What you see under your dashboard title is the actual data. The three upper tiles display key metrics and are fully customizable. To change the displayed metric, click **Customize metric**.

Below the metrics are your data visualizations. StreamData allows you to use three different visualization types at the same time. Each new dashboard includes a table visualization by default.

To view a visualization, click its tile to open it in a new window.

To change the visualization type, click **Change**. To remove it, click **Remove**.

To add a new visualization type, click the **plus** sign on an empty tile.

---

## Visualization options

You can explore the visualization options below:

<MyCarousel />