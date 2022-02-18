---
sidebar_position: 5
---

# Logga

Logga is a standalone WatchKit Application which enables logging of various sensors in near real time.

This application was used to inspect the sensor data for further evaluation.

### Cloning

:::warning
The repositories needed for this step are private for now. You might **cannot** download them.
This is likely to be changed in the future.
:::

```
git clone https://github.com/kiesman99/logga
```

### Building

:::info
For this stage you need to have the iPhone physically connected to your Mac. Both The Apple Watch and the iPhone should have the same Apple-ID assigned.
:::

Now you can open the `Logga.xcodeproj`, choose the device you want to deploy to *(2)* and hit the play button *(1)*.

![](/docs/logga_xcode.png)

:::tip
Sometimes the mac just did not want to sideload the application onto the apple watch duo to an `operation timed out` error. If this happnes to you: 
- Try rebooting **all** devices (annoying I know...) 
- Make sure your iPhone and Apple Watch are connected to the same WiFi, then turn off bluetooth on your iPhone

If nothing helps you should get some rest and hope it magically works after several minutes to hours.
:::

### Using the App

#### Inspect the metrics