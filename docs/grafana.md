---
sidebar_position: 4
---

# Grafana

[Grafana](https://grafana.com/) is the dashboard system of choice in which we are going to be able to watch all logs.
The Grafana instance used in this project is preconfigured and has already setup dashboards for you to inspect.

Head over to [http://localhost:3000/dashboards](http://localhost:3000/dashboards) and select *BA Websocket Server* to inspect the metrics provided by the [custom websocket server](/docs/websocket_server). 

![](/docs/grafana_example.png)

The *upper left* tile describes how many connections are established to the */telegraf* endpoint of the [custom websocket server](/docs/websocket_server). The *lower right* tile describes how many incoming messages the */display* endpoint received.
