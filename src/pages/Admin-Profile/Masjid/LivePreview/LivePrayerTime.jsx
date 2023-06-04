import React, { Component } from 'react';
import MobileTopLable from '../../../../components/LivePreview/MobileTopLable';
import sunrise from '../../../../assets/Sunrise.svg';
import Dhuhor from '../../../../assets/Dhuhor.svg';
import Asar from '../../../../assets/Asar.svg';
import Maghrib from '../../../../assets/Maghrib.svg';
import Esha from '../../../../assets/Esha.svg';
import MobileClock from './MobileClock';

class LivePrayerTime extends Component {
  constructor(props) {
    super(props);
    this.state = {
      secondRatio: 0,
      minuteRatio: 0,
      hourRatio: 0,
    };
  }

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
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = currentDate.toLocaleDateString('en-US', {
      ...options,
      day: '2-digit',
      month: 'short',
    });

    return (
      <div className="w-[220px] h-[450px] bg-blue-50 mx-auto rounded-md animate__animated animate__fadeIn">
        <MobileTopLable data={{ title: 'My Masjid', subtitle: 'Edit Your Masjid Prayer Time' }} />

        <div className="flex flex-col my-2">
          <div className="w-[150px] h-[150px] rounded-full  mx-auto ">
            <MobileClock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio} />
          </div>

          <div className="payer-time-shadow px-2 ">
            <h1 className="text-[#04A999] font-Inter text-sm py-2">Daily Prayer Time</h1>

            <div className="flex flex-col  gap-1 items-center">
              <div className="relative w-[205px] h-[35px] border-[1px] border-[#04A999] rounded-[6px]">
                <div className="flex justify-between w-[205px] absolute top-[9px] px-3">
                  <div className="flex gap-2 items-center">
                    <img className="" src={sunrise} alt="" />
                    <p className="text-[#04A999] text-[12px] font-Inter">Fajr</p>
                  </div>

                  <div>
                    <p className="text-[#04A999] text-[12px] font-Inter">05.15 am</p>
                  </div>
                </div>
              </div>

              <div className="relative w-[205px] h-[35px] border-[1px] border-[#04A999] rounded-[6px]">
                <div className="flex justify-between w-[205px] absolute top-[9px] px-3">
                  <div className="flex gap-3 items-center">
                    <img className="mt-[-4px] ml-[-6px]" src={Dhuhor} alt="" />
                    <p className="text-[#04A999] text-[12px] font-Inter">Dhuhor</p>
                  </div>

                  <div>
                    <p className="text-[#04A999] text-[12px] font-Inter">05.15 am</p>
                  </div>
                </div>
              </div>

              <div className="relative w-[205px] h-[35px] border-[1px] border-[#04A999] rounded-[6px]">
                <div className="flex justify-between w-[205px] absolute top-[9px] px-3">
                  <div className="flex gap-3 items-center">
                    <img className="" src={Asar} alt="" />
                    <p className="text-[#04A999] text-[12px] font-Inter">Asar</p>
                  </div>

                  <div>
                    <p className="text-[#04A999] text-[12px] font-Inter">05.15 am</p>
                  </div>
                </div>
              </div>

              <div className="relative w-[205px] h-[35px] border-[1px] border-[#04A999] rounded-[6px]">
                <div className="flex justify-between w-[205px] absolute top-[9px] px-3">
                  <div className="flex gap-3 items-center">
                    <img className="" src={Maghrib} alt="" />
                    <p className="text-[#04A999] text-[12px] font-Inter">Maghrib</p>
                  </div>

                  <div>
                    <p className="text-[#04A999] text-[12px] font-Inter">05.15 am</p>
                  </div>
                </div>
              </div>

              <div className='relative w-[205px] h-[35px]  border-[1px] border-[#04A999] rounded-[6px]'>
                   <div className='flex justify-between  w-[205px] absolute top-[9px] px-3'>
                       <div className='flex gap-3 items-center'>
                         <img className='' src={Esha} alt="" />
                          <p className='text-[#04A999] text-[12px] font-Inter '>Esha</p>
                       </div>

                       <div>
                       <p className='text-[#04A999] text-[12px] font-Inter '>05.15 am</p>
                       </div>
                   </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LivePrayerTime;
