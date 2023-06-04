import React, { Component } from "react";

import Clock from "../../../components/Clock/Clock";
import PrayerTimes from "../../../components/PrayerTimes/PrayerTimes";
import { Helmet } from "react-helmet-async";

class PrayerTime extends Component {
  state = {
    secondRatio: 0,
    minuteRatio: 0,
    hourRatio: 0,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setClock();
    }, 0);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  setClock = () => {
    const currentDate = new Date();
    const secondRatio = currentDate.getSeconds() / 60;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / 60;
    const hourRatio = (minuteRatio + currentDate.getHours()) / 12;

    this.setState({
      secondRatio: secondRatio,
      minuteRatio: minuteRatio,
      hourRatio: hourRatio,
    });
  };

  render() {
    const { secondRatio, minuteRatio, hourRatio } = this.state;
    const currentDate = new Date();
    const options = { day: "numeric", month: "long", year: "numeric" };
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      ...options,
      day: "2-digit",
      month: "short",
    });
    return (
      <div className="rounded-[12px] py-8">
        <Helmet>
        <title>Ya-Sin - Prayer Time </title>
      </Helmet>
        <div className="flex justify-between gap-x-16">
          <PrayerTimes/>

          <div className="">
            <Clock
              secondRatio={secondRatio}
              minuteRatio={minuteRatio}
              hourRatio={hourRatio}
            />

            <h1 className="text-[#696969] font-Inter font-normal text-[24px] text-right mt-6">
              Bangladesh Time
            </h1>
            <p className="text-[#696969] font-Inter font-normal text-[24px] text-right">
              {formattedDate}
            </p>
          </div>
        </div>

        <div className="flex justify-end mt-4">
          <button className="ripple">Update Profile</button>
        </div>
      </div>
    );
  }
}

export default PrayerTime;
