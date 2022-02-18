---
sidebar_position: 3
---

# Setting up Servers

## Cloning

:::warning
The repositories needed for this step are private for now. You might **cannot** download them.
This is likely to be changed in the future.
:::

First you should clone the required repository and initialize the submodules:

```
git clone https://github.com/kiesman99/tik
git submodule init
git submodule update --recursive
```

### Building Telegraf

This project uses a modified version of [Telegraf](https://www.influxdata.com/time-series-platform/telegraf/). It enables a custom developed plugin to consume metrics via a *websocket server*. 

:::tip
You can find the plugin [here](https://github.com/kiesman99/telegraf/tree/37f7253ed467db128e86cb12c40a00be0841a1c9/plugins/inputs/websocket_listener)
:::

Build the custom telegaf using the following commands (assuming you're in the *tik* project):

```
cd custom/telegraf
env GOOS=linux GOARCH=arm64 make
```

:::info
Because we're using the executable that's build in this step in a docker-linux container, we need to tell the go-compiler explicitly we want to have a linux executable (`env GOOS=linux GOARCH=arm64`). Otherwise go would compile for the host system on which this command is invoked (Propably MacOS in this case).
:::

### Getting everything running

Now we want to start all the services configured in the `docker-compose.yaml`. For this execute the following command:

```
docker-compose up
```

:::tip
Make sure the docker engine is up and running. Otherwise this command won't work.
:::

You should see something similar to this:

![](/docs/docker-compose-up.png)